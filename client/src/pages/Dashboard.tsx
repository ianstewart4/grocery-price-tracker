import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <div>
      <Navbar />
      <section className="min-h-screen hero-overlay bg-opacity-60">
        <h1 className="text-center text-xl pt-10">
          Welcome {user && user.name}
        </h1>
        <p>Trackers Dashboard</p>
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
