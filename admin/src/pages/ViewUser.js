import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../features/product/productSlice";
import { getAUser, updateAUser } from "../features/auth/authSlice";

let schema = yup.object().shape({
    firstname: yup.string().required("First name is Required"),
    lastname: yup.string().required("Last name is Required"),
    email: yup.string(),
    mobile: yup.string().required("Mobile is Required"),
    role: yup.string(),
    address: yup.string().required("Address is Required"),
});

const ViewUser = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAUser(id));
    }, [dispatch, id]);


    const User = useSelector((state) => state.auth);
    const { isSuccess, isError, getauser, updateUser } = User;
    useEffect(() => {

        if (isSuccess && updateUser) {
            toast.success("Color Updated Successfullly!");
            navigate("/admin/customers");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, updateUser, navigate]);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: getauser?.user?._id || "",
            firstname: getauser?.user?.firstname || "",
            lastname: getauser?.user?.lastname || "",
            email: getauser?.user?.email || "",
            mobile: getauser?.user?.mobile || "",
            role: getauser?.user?.role || "",
            address: getauser?.user?.address || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            // console.log(values);
            dispatch(updateAUser(values.id));
            formik.resetForm();
            setTimeout(() => {
                dispatch(resetState());
            }, 3000);

        },
    });

    return (
        <div>
            <h3 className="mb-4 title text-center">User {`${formik.values.lastname} ${formik.values.firstname}`}</h3>
            <div>
                <form
                    onSubmit={formik.handleSubmit}
                    className="d-flex gap-3 flex-column"
                >
                    <CustomInput
                        type="text"
                        label="Enter Product Title"
                        name="firstname"
                        onChng={formik.handleChange("firstname")}
                        onBlr={formik.handleBlur("firstname")}
                        val={formik.values.firstname}
                    />
                    <div className="error">
                        {formik.touched.firstname && formik.errors.firstname}
                    </div>
                    <CustomInput
                        type="text"
                        label="Enter Your Last Name"
                        name="lastname"
                        onChng={formik.handleChange("lastname")}
                        onBlr={formik.handleBlur("lastname")}
                        val={formik.values.lastname}
                    />
                    <div className="error">
                        {formik.touched.lastname && formik.errors.lastname}
                    </div>
                    <CustomInput
                        type="email"
                        label="Enter Product Price"
                        name="email"
                        onChng={formik.handleChange("email")}
                        onBlr={formik.handleBlur("email")}
                        val={formik.values.email}
                    />
                    <div className="error">
                        {formik.touched.email && formik.errors.email}
                    </div>

                    <CustomInput
                        type="text"
                        label="Enter Product Price"
                        name="mobile"
                        onChng={formik.handleChange("mobile")}
                        onBlr={formik.handleBlur("mobile")}
                        val={formik.values.mobile}
                    />
                    <div className="error">
                        {formik.touched.mobile && formik.errors.mobile}
                    </div>

                    <CustomInput
                        type="text"
                        label="Enter Product Price"
                        name="role"
                        onChng={formik.handleChange("role")}
                        onBlr={formik.handleBlur("role")}
                        val={formik.values.role}
                    />
                    <div className="error">
                        {formik.touched.role && formik.errors.role}
                    </div>
                    <CustomInput
                        type="text"
                        label="Enter Product Price"
                        name="address"
                        onChng={formik.handleChange("address")}
                        onBlr={formik.handleBlur("address")}
                        val={formik.values.address}
                    />
                    <div className="error">
                        {formik.touched.address && formik.errors.address}
                    </div>

                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ViewUser;
