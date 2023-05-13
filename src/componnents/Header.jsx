import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../img/logo.png'
function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={Logo}
                            width="35"
                            height="35"
                            className="d-inline-block align-top rounded"
                        />{' '}
                       Go Alert
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;