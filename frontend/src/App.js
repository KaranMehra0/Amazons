import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './component/Home';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import ProductPage from './component/ProductPage';
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Store } from './Store';
import CartPage from './component/CartPage';
import SignInPage from './component/SignInPage'
import ShippingAddressPage from './component/ShippingAddressPage';
import SignUpPage from './component/SignUpPage'
import PaymentMethodPage from './component/PaymentMethodPage';
import PlaceOrderPage from './component/PlaceOrderPage';



function App() {
  const {state, dispatch: ctxDispatch} = useContext(Store);
  const {cart, userInfo} = state;

const signoutHandler = () => {
    ctxDispatch({type : 'USER_SIGNOUT'});
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');

}
  return (
    <BrowserRouter >
      <div className="d-flex flex-column site-container">
        <ToastContainer  position='bottom-center' limit={1}/>
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
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <LinkContainer to='/profile'>
                  <NavDropdown.Item>
                    User Profile
                  </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/orderhistory'>
                  <NavDropdown.Item>
                    Order History
                  </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                <Link className='dropdown-item' to='#signout' onClick={signoutHandler}>
                Sign Out
                </Link>
                </NavDropdown>
              ) : (
                <Link className='nav-link' to='/signin'>
                Sign In
                </Link>
              )}
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
              <Route path={'/signup'} element={<SignUpPage />} />
              <Route path={'/shipping'} element={<ShippingAddressPage />} />
              <Route path={'/payment'} element={<PaymentMethodPage />} />
              <Route path={'/placeorder'} element={<PlaceOrderPage />} />
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
