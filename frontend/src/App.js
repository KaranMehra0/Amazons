import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <Link to='/'>Amazons</Link>
        </header>
        <main>

          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/Product/:slug'} element={<Product />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter >
  );
}

export default App;
