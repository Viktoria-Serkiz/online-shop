import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { clothing } = useSelector((store) => store.clothing);

  useEffect(() => {
    setSearchResult(clothing);
  }, [clothing]);

  const searchFunc = (e) => {
    const filtredData = clothing.filter((item) => {
      if (e.target.value == "") {
        return null;
      } else if (
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    if (filtredData.length == 0 && e.target.value.length !== 0) {
      setSearchResult([
        {
          title: "No data",
        },
      ]);
    } else {
      setSearchResult(filtredData);
    }
  };

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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search for..."
          className="header__form--input"
          onChange={searchFunc}
        />
        {!!searchResult && (
          <div className="header__form--search">
            {searchResult.map(({ title, id }) => {
              return <p key={`srch__${id}`}>{title}</p>;
            })}
          </div>
        )}
      </form>
    </>
  );
};

export default Searchbar;
