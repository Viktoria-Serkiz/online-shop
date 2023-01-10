import React from "react";
import LogoBlack from "../../img/logo-black.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const SignInValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="createAcc">
      <div className="createAcc__wrapper">
        <Link to="/home">
          <img src={LogoBlack} alt="Logo" className="createAcc__logos" />
        </Link>
        <h1 className="createAcc__title">Sign in</h1>
        <form className="createAcc__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            type="email"
            placeholder="alma.lawson@example.com"
            className="createAcc__form_email"
          />
          <p className="error-text">{errors.email?.message}</p>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="createAcc__form_password"
          />
          <p className="error-text">{errors.password?.message}</p>
          <div className="createAcc__forgot">
            <label className="createAcc__forgot_wrapper">
              <input
                type="checkbox"
                className="createAcc__forgot_checkbox"
                required
              />
              <p className="createAcc__forgot_text">Remember me</p>
            </label>
            <Link to="/forgot-password" className="createAcc__forgot_text">
              Forgot password?
            </Link>
          </div>
          <button className="btn createAcc__btn">Sign in</button>
        </form>
        <div className="createAcc__newAccount">
          <p className="createAcc__newAccount_text ">New here?</p>
          <Link to="/create-account" className="createAcc__newAccount_link">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInValidation;
