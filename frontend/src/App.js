import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import ProductPage from './component/ProductPage';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  const {state}=useContext(Store);
const {cart}=state;
  return (
    <BrowserRouter >
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazons</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
              <Link to='/cart' className='nav-link'>
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                {cart.cartItems.length}
                </Badge>
              )}
              </Link>
              </Nav>
            </Container>
          </Navbar>
          {/* <Link to='/'>Amazons</Link> */}
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/Product/:slug'} element={<ProductPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
