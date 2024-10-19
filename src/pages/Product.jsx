import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import useGetProduct from "../hooks/useGetProduct";
import MainLayout from "../layouts/MainLayout";
import Breadcrumb from "../components/Breadcrumb";
import Loader from "../components/Loader";

const Product = () => {
  const { productId } = useParams();
  const { isLoading, product, isError, addToCart } = useGetProduct(productId);
  const [addedToCart, setAddedToCart] = useState(false);

  if (isLoading) return <Loader />;
  if (isError || !product)
    return (
      <div>
        <p>Something went wrong</p>
        <Link to={"/products"}>Back to products</Link>
      </div>
    );

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  return (
    <MainLayout>
      <div className="card">
        <Breadcrumb category={product.category} productName={product.title} />
        <div className="product-item">
          <div className="product-image">
            <img src={product.image} alt="Product Image" />
          </div>
          <div className="productContent">
            <div className="product_header_container">
              <h1>{product.title}</h1>
              <div className="price-container">
                <span className="price-value">{product.price}$</span>{" "}
              </div>
            </div>
            <hr />
            <div className="product-information">
              <div className="rating-reviews">
                <StarRating rating={product.rating.rate} />
                <span className="reviews">{product.rating.count} reviews</span>
              </div>

              <p className="description">{product.description}</p>
              <button onClick={handleAddToCart}>Add to Cart</button>
              {addedToCart && <p style={{ color: "green" }}>Added to Cart!</p>}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
