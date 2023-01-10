import signInPhoto from "../components/SignIn/img/signIn-photo.jpg";
import CreateAcc from "../components/SignIn/CreateAcc";

const CreateAccount = () => {
  return (
    <div className="signIn">
      <div className="signIn__wrapper">
        <CreateAcc />
        <img src={signInPhoto} alt="signIn" className="signIn__img" />
      </div>
    </div>
  );
};

export default CreateAccount;