import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Product() {
  // const navigate = useNavigate();

  const { product } = useSelector((state) => state.product);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Track</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
