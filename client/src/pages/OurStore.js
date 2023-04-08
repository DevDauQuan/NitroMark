import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductCategory, getProductinStock, getProductoutStock, getProductPrice, getProductPriceFrom, getProductPriceTo, getProducts, getProductTags } from "../features/products/productSlice";
import { debounce } from 'lodash';
import ReactPaginate from "react-paginate";
<<<<<<< HEAD
=======

>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c

const OurStore = () => {
  const dispatch = useDispatch();

<<<<<<< HEAD
  const [grid, setGrid] = useState(4);
  const [pageNumber, setPageNumber] = useState(0);
  const [sort, setSort] = useState("");
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  // Value of price from -> to
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
=======
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 6;
  const pagesVisited = pageNumber * productsPerPage;

  // Value of price from -> to
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [grid, setGrid] = useState(4);
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const { pCategories } = useSelector((state) => state.pCategory)
  const { products } = useSelector((state) => state.products);

  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleInputFrom = debounce((value) => {
    setPriceFrom(value);
  }, 500)

  const handleInputTo = debounce((value) => {
    setPriceTo(value);
  }, 500)

  const handleChangeInStock = (event) => {
    setIsCheckedIn(event.target.checked);
    if (!isCheckedIn) {
      dispatch(getProductinStock());
    } else {
      dispatch(getProducts());
    }
  }

  const handleChangeOutStock = (event) => {
    setIsCheckedOut(event.target.checked);
    if (!isCheckedOut) {
      dispatch(getProductoutStock());
    } else {
      dispatch(getProducts());
    }
  }

  useEffect(() => {
    if (priceFrom && priceTo) {
      const values = {
        from: priceFrom,
        to: priceTo,
      }
      dispatch(getProductPrice(values));
    } else if (priceTo) {
      dispatch(getProductPriceTo(priceTo));
    } else if (priceFrom) {
      dispatch(getProductPriceFrom(priceFrom));
    }
  }, [priceFrom, priceTo, dispatch])


  const handleGetCategory = (category) => {
    dispatch(getProductCategory(category))
  }

  const handleGetTags = (tags) => {
    dispatch(getProductTags(tags))
  }

<<<<<<< HEAD
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedProducts = [...products]?.sort((a, b) => {
    switch (sort) {
      case 'best-selling':
        return b.sold - a.sold;
      case 'title-ascending':
        return a.title.localeCompare(b.title);
      case 'title-descending':
        return b.title.localeCompare(a.title);
      case 'price-ascending':
        return a.price - b.price;
      case 'price-descending':
        return b.price - a.price;
      default:
        // sortOrder mặc định là 'manual'
        return 0;
    }
  })

  // console.log(sort, sortedProducts);
=======
  const featuredProducts = products
    .filter((product) => product.tags === "featured")
    .map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  // const sort = products
  //   .filter((product) => product.tags === "featured")
  //   .sort((a, b) => a.name.localeCompare(b.name)) // Sắp xếp theo tên từ a đến z
  //   .map((product) => (
  //     <ProductCard key={product.id} grid={grid} product={product} />
  //   ));
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            {/* Shop By Categories */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {pCategories.map((pCate, key) => (
                    <li key={key}>
                      <Link className="text-dark" to={`/product?category=${pCate.title}`}
                        onClick={() => { handleGetCategory(pCate.title) }}
                      >
                        {pCate.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Filter By */}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      onChange={handleChangeInStock}
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                      onChange={handleChangeOutStock}
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                      onChange={(e) => handleInputFrom(e.target.value)}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                      onChange={(e) => handleInputTo(e.target.value)}
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
<<<<<<< HEAD
=======
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div>

>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
              </div>
            </div>
            {/* Product Tags*/}
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 hover-span" onClick={() => handleGetTags("special")}>
                    #special
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 hover-span" onClick={() => handleGetTags("featured")}>
                    #feature
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3 hover-span" onClick={() => handleGetTags("popular")}>
                    #popular
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                    onChange={handleSortChange}
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
<<<<<<< HEAD
                    <option value="price-ascending" >Price, low to high</option>
                    <option value="price-descending" >Price, high to low</option>
=======
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">{`${products?.length || 0}`} Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
<<<<<<< HEAD
                {sortedProducts
                  .slice(pagesVisited, pagesVisited + productsPerPage)
                  .map((product) => {
                    return <ProductCard key={product._id} product={product} grid={grid} />;
                  })}
=======
                {products
                  .slice(pagesVisited, pagesVisited + productsPerPage)
                  .map((product, index) => (
<<<<<<< HEAD
                    <ProductCard key={index} product={product} grid={grid} />
=======
                    <ProductCard key={index} product={product} />
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
                  ))}
>>>>>>> 3e4dd3a83de174f915bccce2e0aa19690d78373c
              </div>
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pagination"}
                previousLinkClassName={"previous-page"}
                nextLinkClassName={"next-page"}
                disabledClassName={"disabled-page"}
                activeClassName={"active-page"}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
