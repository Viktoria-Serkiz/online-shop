import { Link } from "react-router-dom";
import Logo from "../../img/logo-black.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().trim().uppercase().required(),
  lastName: yup.string().trim().uppercase().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const CreateAcc = () => {
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
          <img src={Logo} alt="Logo" className="createAcc__logos" />
        </Link>
        <h1 className="createAcc__title">Create account</h1>
        <p className="createAcc__text">
          Register to use convenient features and checkout within a moment.
        </p>
        <form className="createAcc__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName")}
            type="text"
            placeholder="First name"
            className="createAcc__form_firstName"
          />
          <p className="error-text">{errors.firstName?.message}</p>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last name"
            className="createAcc__form_lastName"
          />
          <p className="error-text">{errors.lastName?.message}</p>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
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
                {...register("checkbox")}
                type="checkbox"
                required
                className="createAcc__forgot_checkbox"
              />
              <p className="createAcc__forgot_text">Remember me</p>
            </label>
          </div>
          <button className="btn createAcc__btn createAcc__btn_create">
            Create account
          </button>
        </form>
        <div className="createAcc__newAccount">
          <p className="createAcc__newAccount_text ">Already have one?</p>
          <Link to="/signIn" className="createAcc__newAccount_link">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
