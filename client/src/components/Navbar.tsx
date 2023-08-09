import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset, RootState } from "../features/auth/authSlice";
import { AppDispatch } from "../app/store";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const themeValues = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald", // Light Mode?
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee", // Dark Mode?
    "winter",
  ];
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="navbar bg-base-100 sticky">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Grocery Price Tracker
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>

      <div className="navbar-end gap-3">
        {user ? (
          <button onClick={onLogout} className="btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Sign Up
            </Link>
          </>
        )}

        <select
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          data-choose-theme
        >
          <option>Theme</option>
          {themeValues.map((theme) => (
            <option key={theme}>{theme}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Navbar;
