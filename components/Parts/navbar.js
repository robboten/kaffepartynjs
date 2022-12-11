import Link from 'next/link';

import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { siteName, sitePages } from '../../lib/constants'

export default function NavbarHead() {
    return (
        <header>
            <Navbar expand="sm" bg="light">
                <Container>
                    <Link className='navbar-brand' href="/">{siteName}</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {sitePages.map(data => (
                                <Nav.Link key={data.name} as={Link} href={data.path}>{data.name}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
