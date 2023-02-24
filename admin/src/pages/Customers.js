import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/cutomers/customerSlice";
import { Link } from "react-router-dom";
import { BiEdit, BiBlock } from "react-icons/bi";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import CustomModal from "../components/CustomModal";
import { blockAUser, deleteAUser, unBlockAUser } from "../features/auth/authSlice";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Customers = () => {

  const [open, setOpen] = useState(false);
  const [colorId, setcolorId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setcolorId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);



  const customerstate = useSelector((state) => state.customer.customers);
  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: customerstate[i].firstname + " " + customerstate[i].lastname,
        email: customerstate[i].email,
        mobile: customerstate[i].mobile,
        action: (
          <>
            <Link
              to={`/admin/get-user/${customerstate[i]._id}`}
              className=" fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            {customerstate[i].isBlocked ?
              (<button className="ms-3 fs-3 text-danger bg-transparent border-0"
                onClick={() => handleUnBlock(customerstate[i]._id)}>
                <BiBlock></BiBlock>
              </button>) : ((<button className="ms-3 fs-3 text-success bg-transparent border-0"
                onClick={() => handleBlock(customerstate[i]._id)}>
                <AiOutlineCheckCircle></AiOutlineCheckCircle>
              </button>))
            }
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(customerstate[i]._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      });
    }
  }

  const deleteColor = (e) => {
    dispatch(deleteAUser(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
  };

  const handleBlock = (e) => {
    dispatch(blockAUser(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
  };

  const handleUnBlock = (e) => {
    dispatch(unBlockAUser(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
  };

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteColor(colorId);
        }}
        title="Are you sure you want to delete this color?"
      />
    </div>
  );
};

export default Customers;
