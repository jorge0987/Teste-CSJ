import react from "react";
import { Container, Img, Menu, Login } from "./style";
import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <Container>
            <Img
            >
                <img src={logo} alt="Logo" to="/#" />
            </Img>
            <Menu>
                <Link to="/">
                    <Login>Home</Login>
                </Link>
            </Menu>
            <Link to="/maps">
                <Login>Locais Cadastrados</Login>
            </Link>
            <Login
            >
                <Link to="/signin">
                    Login
                </Link>
            </Login>
        </Container>
    );
}

export default Header;