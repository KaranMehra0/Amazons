import { useParams } from "react-router-dom";

function Product() {
    const param = useParams();
    const { slug } = param;
    return (
        <>
            <h1>{slug}</h1>
        </>
    )
}

export default Product;