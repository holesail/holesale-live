import { useState } from "react";
import Cookies from "js-cookie";
export const USERNAME_COOKIENAME = "username";
import "../index.css";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123") {
      window.location.href = "/";
      Cookies.set(USERNAME_COOKIENAME, username, { expires: 1 / 24 });
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex flex-col items-center "></div>
      <div className="w-1/3 h-1/2 bg-white p-8  shadow-md ">
        <h1 className="text-white text-3xl font-bold mb-6 pl-4 flex justify-center">
          Login
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="">
            <label className="block text-white text-sm mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="border-2 border-gray-300 p-2 w-full focus:outline-none focus:border-blue-500 rounded"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="mt-4 bg-blue-500 text-white p-3 w-full rounded hover:bg-blue-600 focus:outline-none"
            type="submit">
            Login
          </button>
        </form>
      </div>
        
    </div>
  );
};
