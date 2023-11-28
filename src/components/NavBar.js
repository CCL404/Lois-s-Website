import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] =useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink =(value) => {
        setActiveLink(value);
    }

    return (
        <NavBar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <NavBar.Brand href="#home">
                <img src={''} alt="Logo" />
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </NavBar.Toggle>
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"className={activeLink === 'home' ? 'active nav bar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active nav bar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active nav bar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={} alt="" /></a>
                        <a href="#"><img src={} alt="" /></a>
                        <a href="#"><img src={} alt="" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Conncet</span></button>
                </span>
            </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}