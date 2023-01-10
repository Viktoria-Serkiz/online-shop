import { Link } from "react-router-dom";

const Headericons = () => {
  return (
    <>
      <div>
        <Link to="/favorites">
          <button type="button" className="header__icons btn">
            <svg
              width="20"
              height="18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4 2.8a4.6 4.6 0 0 0-6.5 0l-.9 1-.9-1a4.6 4.6 0 1 0-6.5 6.5l1 1 6.4 6.4 6.5-6.5.9-.9a4.6 4.6 0 0 0 0-6.5v0Z"
                stroke="#E6E5E8"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <Link to="/signIn">
          <button type="button" className="header__icons btn">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7 17.5v-1.7a3.3 3.3 0 0 0-3.4-3.3H6.7a3.3 3.3 0 0 0-3.4 3.3v1.7M10 9.2a3.3 3.3 0 1 0 0-6.7 3.3 3.3 0 0 0 0 6.7Z"
                stroke="#E6E5E8"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        <Link to="/shopping-bag">
          <button type="button" className="header__icons btn">
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1.7 2.5 5v11.7a1.7 1.7 0 0 0 1.7 1.6h11.6a1.7 1.7 0 0 0 1.7-1.6V5L15 1.7H5ZM2.5 5h15"
                stroke="#E6E5E8"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3 8.3a3.3 3.3 0 1 1-6.6 0"
                stroke="#E6E5E8"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Headericons;
