const Searchbar = () => {
  return (
    <>
      <form className="header__form">
        <button type="button" className="header__form--button">
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM18 18l-6-5"
              stroke="#32313A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search for..."
          className="header__form--input"
        />
      </form>
    </>
  );
};

export default Searchbar;
