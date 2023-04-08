import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Note",
    dataIndex: "note",
  },
  {
    title: "Receive",
    dataIndex: "receive",
  },

  {
    title: "Action",
    dataIndex: "action",
  },
];

const ViewOrder = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
  useEffect(() => {
  }, [dispatch]);

  const orderByUser = useSelector((state) => state.auth);
  const orderState = orderByUser?.orderByUser || {};
  const data1 = [];


  for (let i = 0; i < orderState?.length; i++) {
    data1.push({
      key: i + 1,
      product: orderState[i]?.products?.lenght || "",
      note: orderState[i]?.paymentIntent.note || "",
<<<<<<< HEAD
      address: orderState[i]?.paymentIntent.address || "",
      amount: orderState[i]?.paymentIntent.amount || "",
      status: orderState[i]?.orderStatus || "",
      receive: orderState[i]?.paymentIntent.sendTo || "",
=======
      address: orderState[i].paymentIntent.address || "",
      amount: orderState[i].paymentIntent.amount || "",
      status: orderState[i].orderStatus || "",
      receive: orderState[i].paymentIntent.sendTo || "",
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
      action: (
        <>
          <Link className="ms-3 fs-3 text-success" to={`/user/detail-order/${orderState[i]?._id}`}>
            <BiEdit />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <Meta title={"View Order"} />
      <BreadCrumb title="View Order" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <Table columns={columns} dataSource={data1} />
      </Container>
    </div>
  );
};

export default ViewOrder;
