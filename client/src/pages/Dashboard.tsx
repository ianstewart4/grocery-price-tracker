import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PRODUCT_API = "/api/products/";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [userProductID, setUserProductID] = useState("");
  const [productData, setProductData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProductID(e.currentTarget.elements.id.value);
    e.target.reset();
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // TODO: Fix double render at the beginning
  useEffect(() => {
    // data fetching here
    console.log("This is the userProductID: " + userProductID);
    const fetchData = async () => {
      try {
        const response = await axios.post(
          PRODUCT_API,
          {
            productID: userProductID,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setProductData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(productData);
    console.log("...processing...");
  }, [userProductID]);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen hero-overlay bg-opacity-60">
        <h1 className="text-center text-xl pt-10">
          Welcome {user && user.name}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="text"
              id="id"
              placeholder="Find Superstore Items"
              className="input input-bordered w-9/12"
              onSubmit={handleSubmit}
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
        </form>
        <p>Trackers Dashboard</p>
        <h1>{JSON.stringify(productData)}</h1>
      </section>
      {/* <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi there!</h1>
            <p>Tired of paying too much for your groceries?</p>
            <p className="mb-5">
              Well there's nothing I can do about that, but here's a way to keep
              a little more money in your pocket!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Dashboard;
