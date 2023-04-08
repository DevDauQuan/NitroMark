import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
import { addtoCart } from "../features/user/userSlice";
const SpecialProduct = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddtoCart = () => {
    const values = {
      cart: [
        {
          _id: product._id,
          count: Number(quantity),
          color: "Black"
        }
      ]
    }
    dispatch(addtoCart(values));
  }

<<<<<<< HEAD
  return (
    <>
      <div className="col-12  mx-auto">
        <div className="special-product-card" >
          <div className="d-flex " style={{ minHeight: "269px" }}>
            <div className="flex-space">
              <img src={`${product.images[0].url}`} className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <div>
                <h5 className="brand">{product.brand}</h5>
                <h6 className="title">
                  {product.title}
                </h6>
              </div>
=======
  return (
    <>
      <div className="col-12  mx-auto">
        <div className="special-product-card" >
          <div className="d-flex " style={{ minHeight: "269px" }}>
            <div className="flex-space">
              <img src={`${product.images[0].url}`} className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <div>
                <h5 className="brand">{product.brand}</h5>
                <h6 className="title">
                  {product.title}
                </h6>
              </div>
=======
const SpecialProduct = (props) => {
  const { product } = props;


  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <img src={`${product.images[0].url}`} className="img-fluid" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{product.brand}</h5>
              <h6 className="title">
                {product.title}
              </h6>
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
              <ReactStars
                count={5}
                size={24}
                value={product.totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ {product.price}</span> &nbsp;
              </p>

              <div className="prod-count">
                <p>Products: {product.quantity}</p>
              </div>
<<<<<<< HEAD
              <button className="button" onClick={handleAddtoCart}>Add to Cart</button>
=======
<<<<<<< HEAD
              <button className="button" onClick={handleAddtoCart}>Add to Cart</button>
=======
              <div className="prod-count my-3">
                <p>Products: {product.quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
