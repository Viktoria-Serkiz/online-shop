import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Page is not found. Go <Link to="/home">Home</Link></p>
    </div>
  );
};

export default NotFound;