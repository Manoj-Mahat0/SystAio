import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3">
            <Container>
                <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
            </Container>
        </footer>
    );
};

export default Footer;
