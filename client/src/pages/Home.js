import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import Advertisement from "../components/Advertisement";
import BrandParner from "../components/BrandParner";
import Section from "../components/Section";
import Slider from "../components/Slider";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { blogs } = useSelector((state) => state.blog);
=======

const Home = () => {

  const [specialProd, setSpecialProd] = useState([]);

  const { products } = useSelector((state) => state.products);



  const filterProductsByCategory = (products, category) => {
    const filteredProducts = products?.filter((product) => product?.category === category);
    return filteredProducts.length;
  };
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8

  const featuredProducts = products?.filter((product) => product?.tags === "featured")
    .map((product) => (
      <ProductCard key={product?._id} product={product} />
    ));

  const specialProducts = products?.filter((product) => product?.tags === "special")
<<<<<<< HEAD
  // .map((product) => (
  //   <SpecialProduct key={product?._id} product={product} />
  // ));
=======
    .map((product) => (
      <SpecialProduct key={product?._id} product={product} />
    ));
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8

  return (
    <>
      {/* banner */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $41.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Services */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

<<<<<<< HEAD

      {/* feature */}
=======
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptops</h6>
                  <p>{filterProductsByCategory(products, "Laptop")} Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>{filterProductsByCategory(products, "Camera")} Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>{filterProductsByCategory(products, "TV")} Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Phones</h6>
                  <p>{filterProductsByCategory(products, "Smart Phone")} Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>


            </div>
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center" style={{ width: "50%" }}>
                <div>
                  <h6>Macbook</h6>
                  <p>{filterProductsByCategory(products, "Macbook")} Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center" style={{ width: "50%" }}>
                <div>
                  <h6>Watchs</h6>
                  <p>{filterProductsByCategory(products, "Watch")} Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 flex-space">
            <h3 className="section-heading">Featured Collection</h3>
            <Link to="/product" style={{ color: "#808080", paddingBottom: "10px" }}>See more </Link>
          </div>
<<<<<<< HEAD
          {products && products?.slice(0, 8).map((product, key) => (
=======
          {products && products?.map((product, key) => (
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
            <ProductCard product={product} key={key} />
          ))}
        </div>
      </Container>

      {/* adv */}
      <Advertisement></Advertisement>

<<<<<<< HEAD
      <Section title={"Special Products"} children={<Slider products={specialProducts}></Slider>}></Section>
=======
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {specialProducts}
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {featuredProducts}
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8


      <Section title={"Our Popular Products"} children={featuredProducts}></Section>
      <BrandParner></BrandParner>

      <Section title={"Our Latest Blogs"} children={
        <div className="col-3">
          {blogs && blogs?.map((item) => (
            <BlogCard key={item._id} props={item} />
          ))}
        </div>
<<<<<<< HEAD
      }
      ></Section>
=======
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>

        </div>
      </Container>
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
    </>
  );
};

export default Home;
