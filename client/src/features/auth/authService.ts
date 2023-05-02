import axios from "axios";
const API_URL = "/api/users/";

interface IUser {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface IUserData {
  user: IUser | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

// Register user
const register = async (userData: IUserData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData: IUserData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
