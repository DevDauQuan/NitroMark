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
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishList } from "../features/products/productSlice";
import { addtoCart, getWishList } from "../features/user/userSlice";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8


const ProductCard = (props) => {
  const { grid, product } = props;
  let location = useLocation();
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [inWishlist, setInWishList] = useState(false);
  const { wishlist } = useSelector((state) => state.products);
=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

<<<<<<< HEAD

  useEffect(() => {
    if (wishlist?.wishlist.includes(product?._id)) {
      setInWishList(true);
    }
    else {
      setInWishList(false);
    }
  }, [product?._id, wishlist?.wishlist])

=======
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
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
              ? `/product/${product._id}`
              : `/product/${product._id}`
          }
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
<<<<<<< HEAD
              <img src={inWishlist ? wishred : wish} alt="wishlist" onClick={(e) => handleAddtoWishList(e)} />
=======
              <img src={wish} alt="wishlist" onClick={(e) => handleAddtoWishList(e)} />
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
            </button>
          </div>
          <div className="product-image" >
            <img src={product.images[0]?.url} className="img-fluid" alt="product" />
            <img src={product.images[1]?.url} className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">{`${product.brand}`}</h6>
            <h5 className="product-title">
              {`${product.title}`}
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={Number(product.totalrating)}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              {`${product.description}`}
            </p>
            <p className="price">{`$ ${product.price}`}</p>
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
