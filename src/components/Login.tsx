import React from "react";
import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const history = useNavigate();
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/users/login`,
        {
          email,
          password,
        }
      );
      console.log(res);
      history("/");
    } catch (err: AxiosError | any) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <>
      {error && (
        <p className="text-center text-black w-full px-4 py-3 bg-red-200 mb-4 rounded">
          {error}
        </p>
      )}
      <div>
        <label className="text-black abel text-xl font-[500]">Email</label>
        <input
          type="text"
          className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="text-black abel text-xl font-[500]">Password</label>
        <input
          className="block  border-b-2 border-blackish w-full outline-none py-2 px-3 mb-4"
          required
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Link
        to={"/auth/forgot-password"}
        className="text-center block self-center mb-8 text-black hover:text-blackish text-[18px] abel"
      >
        forgot password?
      </Link>
      <button
        type="submit"
        className={
          "w-full text-center py-4  hover:bg-mostlyblack bg-black text-white text-2xl hover:bg-green-dark focus:outline-none mb-4 abel"
        }
        onClick={(e: React.FormEvent) => {
          e.preventDefault();
          login();
        }}
      >
        Submit
      </button>
    </>
  );
};

export default Login;
