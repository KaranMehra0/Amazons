import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Product from './component/Product';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter >
      <div className="d-flex flex-column site-container">
        <header className="App-header">
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazons</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
          {/* <Link to='/'>Amazons</Link> */}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route path={'/Product/:slug'} element={<Product />} />
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
