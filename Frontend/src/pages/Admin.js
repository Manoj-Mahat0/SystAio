import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, Form, Container, Modal } from "react-bootstrap";
import { getOrders, acceptOrder, getProducts, addProduct, updateProduct, deleteProduct } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Admin = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", category_name: "", price: "", stock: "" });
    const [showEditModal, setShowEditModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null); //  Ensure editProduct starts as null
    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        if (!token) {
            alert("You must be logged in as an admin!");
            navigate("/login");
            return;
        }
        fetchOrdersAndProducts();
    }, [token, navigate]);

    const fetchOrdersAndProducts = async () => {
        setOrders(await getOrders());
        setProducts(await getProducts());
    };

    const handleAcceptOrder = async (orderId) => {
        try {
            console.log("🔷 Trying to accept order with ID:", orderId);
    
            const response = await acceptOrder(orderId);
            console.log("✅ API Response:", response);
    
            if (response?.message) {
                toast.success(`✅ ${response.message}`);
            } else {
                toast.success("✅ Order accepted successfully!");
            }
    
            fetchOrdersAndProducts(); // Refresh orders
        } catch (error) {
            console.error("❌ Order acceptance failed:", error);
            toast.error(error?.message || "❌ Failed to accept order.");
        }
    };
    
    

    const handleAddProduct = async () => {
        try {
            const formattedProduct = {
                name: newProduct.name.trim(),
                category_name: newProduct.category_name.trim(),
                price: parseFloat(newProduct.price) || 0,
                stock: parseInt(newProduct.stock, 10) || 0
            };

            if (!formattedProduct.name || !formattedProduct.category_name) {
                alert("Please fill in all fields.");
                return;
            }

            await addProduct(formattedProduct);
            toast.success(" Product added successfully!");
            fetchOrdersAndProducts();
            setNewProduct({ name: "", category_name: "", price: "", stock: "" });
        } catch (error) {
            toast.error(" Failed to add product!");
        }
    };

    const handleEditProduct = (product) => {
        setEditProduct({ ...product }); //  Ensure a new object is created
        setShowEditModal(true);
    };

    const handleUpdateProduct = async () => {
        if (!editProduct) return;
        try {
            await updateProduct(editProduct.id, editProduct);
            toast.success(" Product updated successfully!");
            setShowEditModal(false);
            fetchOrdersAndProducts();
        } catch (error) {
            toast.error(" Failed to update product!");
        }
    };

    const handleDeleteProduct = async (product) => {
        try {
            console.log("🛠️ Deleting Product:", product);
            if (!product || !product.id) {
                console.error(" Invalid product object:", product);
                return;
            }
    
            await deleteProduct(product.id);
            toast.success(" Product deleted successfully!");
            fetchOrdersAndProducts(); //  Refresh the list
        } catch (error) {
            toast.error(" Failed to delete product!");
        }
    };
    
    return (
        <Container className="mt-4">
            <h1 className="text-center">Admin Panel</h1>
            <Button variant="danger" className="mb-3" onClick={() => { localStorage.removeItem("adminToken"); navigate("/login"); }}>
                Logout
            </Button>

            <h2>Orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((o, index) => (
                        <tr key={o.id}>
                            <td>{index + 1}</td>
                            <td>{o.quantity} pcs</td>
                            <td>{o.status}</td>
                            <td>
                                {o.status === "Pending" && (
                                    <Button variant="success" onClick={() => handleAcceptOrder(o.id)}>Accept</Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h2>Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price ($)</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p, index) => (
                        <tr key={p.id}>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>${p.price}</td>
                            <td>{p.stock} left</td>
                            <td>
                                <Button variant="warning" size="sm" onClick={() => handleEditProduct(p)}>Edit</Button>{' '}
                                <Button variant="danger" size="sm" onClick={() => handleDeleteProduct(p)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <h3>Add Product</h3>
            <Form className="mb-4">
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" value={newProduct.category_name} onChange={(e) => setNewProduct({ ...newProduct, category_name: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
                </Form.Group>
                <Button variant="primary" className="mt-3" onClick={handleAddProduct}>Add Product</Button>
            </Form>

            {/* Edit Product Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" value={editProduct?.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control type="number" value={editProduct?.stock} onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleUpdateProduct}>Update</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Admin;
