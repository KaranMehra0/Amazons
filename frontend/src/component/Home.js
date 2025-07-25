import { Link } from 'react-router-dom';
import data from '../data'

function Home() {
    return (
        <>
            <h1>Featured Product</h1>
            <div className='products'>
                {data.product.map(product => (
                    <div className='product' key={product.slug}>

                        <Link to={`/product/${product.slug}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>

                        <div className='product-info'>
                            <Link to={`/product/${product.slug}`}>
                                <p>{product.name}</p>
                            </Link>
                            <p><strong>${product.price}</strong></p>
                            <button>Add to cart</button>
                        </div>
                    </div>))
                }
            </div>
        </>
    )
}
export default Home;