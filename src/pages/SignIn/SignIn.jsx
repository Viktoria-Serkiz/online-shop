import SignInValidation from "../../pages/SignIn/SignInValidation";
import signInPhoto from "../../pages/SignIn/img/signIn-photo.jpg";

const SignIn = () => {
  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <SignInValidation />
        <img src={signInPhoto} alt="signIn" className="signIn__img" />
      </div>
    </div>
  );
};

export default SignIn;
