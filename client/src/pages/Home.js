import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useSelector } from "react-redux";
import Advertisement from "../components/Advertisement";
import BrandParner from "../components/BrandParner";
import Section from "../components/Section";
import Slider from "../components/Slider";

const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { blogs } = useSelector((state) => state.blog);

  const featuredProducts = products?.filter((product) => product?.tags === "featured")
    .map((product) => (
      <ProductCard key={product?._id} product={product} />
    ));

  const specialProducts = products?.filter((product) => product?.tags === "special")
  // .map((product) => (
  //   <SpecialProduct key={product?._id} product={product} />
  // ));

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


      {/* feature */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 flex-space">
            <h3 className="section-heading">Featured Collection</h3>
            <Link to="/product" style={{ color: "#808080", paddingBottom: "10px" }}>See more </Link>
          </div>
          {products && products?.slice(0, 8).map((product, key) => (
            <ProductCard product={product} key={key} />
          ))}
        </div>
      </Container>

      {/* adv */}
      <Advertisement></Advertisement>

      <Section title={"Special Products"} children={<Slider products={specialProducts}></Slider>}></Section>


      <Section title={"Our Popular Products"} children={featuredProducts}></Section>
      <BrandParner></BrandParner>

      <Section title={"Our Latest Blogs"} children={
        <div className="col-3">
          {blogs && blogs?.map((item) => (
            <BlogCard key={item._id} props={item} />
          ))}
        </div>
      }
      ></Section>
    </>
  );
};

export default Home;
