/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../User";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useGlobalState("user");
  const [isLoggedIn, setIsLoggedIn] = useGlobalState("isLoggedIn");

  const [isOpen, setOpen] = useState(false);

  const to = (address) => {
    setOpen(false);
    nav(`/${address}`);
  };

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const dataToPost = new FormData();
    dataToPost.set("phone", e.target.phone.value);
    dataToPost.set("password", e.target.password.value);

    api
      .post("/login/", dataToPost)
      .then((res) => {
        // Set token
        localStorage.setItem("token", res.data["access"]);
        api
          .get("/profile", {
            headers: {
              Authorization: `Bearer ${res.data["access"]}`,
            },
          })
          .then((profileResponse) => {
            let toUpdateKeys = [
              "id",
              "name",
              "phone",
              "email",
              "verified",
              "groups",
            ];
            let profile = profileResponse.data[0];
            Object.keys(user).forEach((k) => {
              if (toUpdateKeys.includes(k)) {
                user[k] = profile[k];
              }
            });
            setUser(user);
            setIsLoggedIn(true);
            nav("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setError("Invalid username or password");
      });
  };

  useEffect(() => {
    if (isLoggedIn) nav("/home");
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your phone
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <div
                  onClick={() => to("signUp")}
                  className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Sign up
                </div>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
