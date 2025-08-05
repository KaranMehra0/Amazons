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
import CartPage from './component/CartPage';
import SignInPage from './SignInPage';

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
                {cart.cartItems.reduce((a, c) => a+ c.quantity, 0 )}
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
              <Route path={'/Product/:slug'} element={<ProductPage />} />
              <Route path={'/cart'} element={<CartPage />} />
              <Route path={'/signin'} element={<SignInPage />} />
              <Route path={'/'} element={<Home />} />
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
