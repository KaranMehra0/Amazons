import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import data from '../data'
import { useEffect, useReducer } from 'react';
import Products from './Products';
import { Helmet } from 'react-helmet-async';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';



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
        product:{},
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

    return (<>
    <Helmet>
        <title>Amazons</title>
    </Helmet>
        <h1>Featured Products</h1>
        <div className='products'>
            {loading ? (
                <LoadingBox/>
        ): error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <Row>
            {product.map(product => (
                <Col key={product.slug} sm={6} md={4} lg={3} className='mb-3'>
                <Products product={product}></Products>
                </Col>
                ))}
                </Row>
            )}</div>
    </>)
}
export default Home;