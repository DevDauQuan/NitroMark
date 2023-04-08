import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
<<<<<<< HEAD
  // console.log(props);
=======
<<<<<<< HEAD
  // console.log(props);
=======

>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
  const getDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${day} ${monthName} ${year}`;
  }

<<<<<<< HEAD
=======


>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={`${props?.props?.images[0]?.url}`} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">{getDate(props?.props?.createdAt) || ""}</p>
        <h5 className="title">{`${props?.props?.title}` || ""}</h5>
        <p className="desc">
          {`${props?.props?.description?.split(".")[0]}...` || ""}
        </p>
<<<<<<< HEAD
        <Link to={`/blog/${props?.props?._id}`} className="button mt-3" >
=======
        <Link to={`/blog/${props?.props?._id}`} className="button" >
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
