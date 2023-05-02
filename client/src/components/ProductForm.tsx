import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { findProduct } from "../features/products/productSlice";

function ProductForm() {
  const [product, setProduct] = useState("");

  const dispatch = useDispatch();

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(findProduct({ product }));
  //     setProduct("");
  //   };
  return (
    <div className="input-group" title="Enter product URL">
      <input
        type="text"
        placeholder="Find Superstore Items"
        className="input input-bordered w-9/12"
        // onSubmit={onSubmit}
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <button className="btn btn-square" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductForm;
