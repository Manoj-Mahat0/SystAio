import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
    return (
        <div 
            className="hero-section text-center text-white d-flex align-items-center justify-content-center"
            style={{ 
                backgroundImage: "url('bg.jpg')", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                height: "100vh", 
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
            }}
        >
            <Container>
                <h1 className="display-4 fw-bold">Welcome to Our Store</h1>
                <p className="lead">Find the best products at unbeatable prices.</p>
                <Button variant="primary" href="#products" className="px-4 py-2 fw-bold shadow-lg">
                    Shop Now
                </Button>
            </Container>
        </div>
    );
};

export default HeroSection;
