<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useParams } from "react-router-dom";
import wish from "../images/wish.svg";
import wishred from "../images/wishred.svg";
=======
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useParams } from "react-router-dom";
import wish from "../images/wish.svg";
import wishred from "../images/wishred.svg";
=======
import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useParams } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishList } from "../features/products/productSlice";
import { addtoCart, getWishList } from "../features/user/userSlice";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c


const ProductCard = (props) => {
  const { grid, product } = props;
  let location = useLocation();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [inWishlist, setInWishList] = useState(false);
  const { wishlist } = useSelector((state) => state.products);
=======
<<<<<<< HEAD
  const [inWishlist, setInWishList] = useState(false);
  const { wishlist } = useSelector((state) => state.products);
=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c

  useEffect(() => {
    if (wishlist?.wishlist.includes(product?._id)) {
      setInWishList(true);
    }
    else {
      setInWishList(false);
    }
  }, [product?._id, wishlist?.wishlist])

<<<<<<< HEAD
=======
=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
  const handleAddtoWishList = (e) => {
    e.preventDefault();
    const values = {
      id: product?._id
    }
    dispatch(addToWishList(values));
    setTimeout(() => {
      dispatch(getWishList());
    }, 500);
  }

  const handleAddtoCart = (e) => {
    e.preventDefault();
    const values = {
      cart: [
        {
          _id: product?._id,
          count: 1,
          color: "Black"
        }
      ]
    }
    dispatch(addtoCart(values));
  }
  return (
    <>
      <div
        className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3"
          } `}
      >
        <Link
          to={
            location.pathname === "/"
<<<<<<< HEAD
              ? `/product/${product?._id}`
              : `/product/${product?._id}`
=======
              ? `/product/${product._id}`
              : `/product/${product._id}`
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
          }
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
<<<<<<< HEAD
              <img src={inWishlist ? wishred : wish} alt="wishlist" onClick={(e) => handleAddtoWishList(e)} />
=======
<<<<<<< HEAD
              <img src={inWishlist ? wishred : wish} alt="wishlist" onClick={(e) => handleAddtoWishList(e)} />
=======
              <img src={wish} alt="wishlist" onClick={(e) => handleAddtoWishList(e)} />
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
            </button>
          </div>
          <div className="product-image" >
            <img src={product.images[0]?.url} className="img-fluid" alt="product" />
            <img src={product.images[1]?.url} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
<<<<<<< HEAD
            <h6 className="brand">{`${product?.brand}`}</h6>
            <h5 className="product-title">
              {`${product?.title}`}
=======
            <h6 className="brand">{`${product.brand}`}</h6>
            <h5 className="product-title">
              {`${product.title}`}
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
            </h5>
            <ReactStars
              count={5}
              size={24}
<<<<<<< HEAD
              value={product && Number(product?.totalrating)}
=======
              value={Number(product.totalrating)}
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
<<<<<<< HEAD
              {`${product?.description}`}
            </p>
            <p className="price">{`$ ${product?.price}`}</p>
=======
              {`${product.description}`}
            </p>
            <p className="price">{`$ ${product.price}`}</p>
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">

              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" onClick={(e) => handleAddtoCart(e)} />
              </button>
            </div>
          </div>
        </Link>
      </div>

    </>
  );
};

export default ProductCard;
