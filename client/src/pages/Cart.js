import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductfromCart, getaUserCart } from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.auth);


  const handleRemoveItem = (id) => {
    dispatch(deleteProductfromCart(id));
<<<<<<< HEAD
    // console.log(id);
=======
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
    setTimeout(() => {
      dispatch(getaUserCart());
    }, 3000)
  }
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {orders &&
              orders?.products?.map((product, index) => (
                <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center" key={index}>
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div className="w-25">
                      <img src={product?.images[1]?.url || ""} className="img-fluid" alt="product" />
                    </div>
                    <div className="w-75">
                      <p>{`${product?.title}` || ""}</p>
                      <p>Color: {`${product?.color}` || ""}</p>
                    </div>
                  </div><div className="cart-col-2">
                    <h5 className="price">$ {`${product?.price}` || ""}</h5>
                  </div><div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        className="form-control"
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        defaultValue={`${product.count}` || ""}
                        id="" />
                    </div>
                    <div>
<<<<<<< HEAD
                      <AiFillDelete className="text-danger" onClick={() => handleRemoveItem(product?.product?._id)} />
=======
                      <AiFillDelete className="text-danger" onClick={() => handleRemoveItem(product?.product._id)} />
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
                    </div>
                  </div><div className="cart-col-4">
                    <h5 className="price">$ {`${product.count * product.price}`}</h5>
                  </div>
                </div>
              ))}

          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $ {`${orders?.cartTotal}`}</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
