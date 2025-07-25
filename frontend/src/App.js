import data from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='/'>Amazons</a>
      </header>
      <main>
        <h1>Featured Product</h1>
        {
          data.products.map(product => (<div>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>

          </div>))
        }
      </main>
    </div>
  );
}

export default App;
