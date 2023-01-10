import signInPhoto from "../SignIn/img/signIn-photo.jpg";
import LogoBlack from "../../img/logo-black.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <div className="createAcc">
          <div className="createAcc__wrapper">
            <Link to="/home">
              <img src={LogoBlack} alt="Logo" className="createAcc__logos" />
            </Link>
            <h1 className="createAcc__title">Forgot password?</h1>
            <p className="createAcc__text">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
            <form className="createAcc__form" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                type="email"
                placeholder="alma.lawson@example.com"
                className="createAcc__form_email"
              />
              <p className="error-text">{errors.email?.message}</p>
              <button className="btn createAcc__btn createAcc__btn_forgot">
                Send instructions
              </button>
            </form>
          </div>
        </div>
        <img src={signInPhoto} alt="signIn" className="signIn__img" />
      </div>
    </div>
  );
};

export default ForgotPassword;
