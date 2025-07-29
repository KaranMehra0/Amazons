import { Link } from 'react-router-dom';
import axios from 'axios'
// import data from '../data'
import { useEffect, useReducer, useState } from 'react';



const reducerLogger = (reducer) => {
    return (state, action) => {
        console.log('%cPrevious State:', 'color: gray', state);
        console.log('%cAction:', 'color: blue', action);
        const nextState = reducer(state, action);
        console.log('%cNext State:', 'color: green', nextState);
        return nextState;
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const loggerReducer = reducerLogger(reducer);

function Home() {
    const [{ loading, error, product }, dispatch] = useReducer(loggerReducer, {
        product: [],
        loading: true,
        error: '',
    })
    //const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/product`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
            // setProduct(result.data)
        }
        fetchData();

    }, [])

    return (
        <>
            <h1>Featured Product</h1>
            <div className='products'>
                {
                    loading ? (<div>Loading...</div>)
                        :
                        error ? (<div>{error}</div>)
                            : (
                                product.map(product => (
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
                                    </div>
                                )))}</div>
        </>
    )
}
export default Home;