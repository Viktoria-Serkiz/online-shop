import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getClothing } from "../../api/clothing";
import {
  clothingLoading,
  clothingSuccess,
  clothingError,
} from "../../store/actions/clothingAction";

const Searchbar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const { clothing } = useSelector((store) => store.clothing);
  const dispatch = useDispatch();

  useEffect(() => {
    if (clothing.length == 0) {
      dispatch(clothingLoading());
      getClothing()
        .then(({ data }) => {
          dispatch(clothingSuccess(data));
        })
        .catch((error) => {
          dispatch(clothingError(error.massage));
        });
    }
  }, []);

  const closeSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  };

  const searchFunc = (e) => {
    setSearchInput(e.target.value);
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
          value={searchInput}
        />
        {!!searchResult && (
          <div className="header__form--search">
            {searchResult.map(({ title, id }, index) => {
              return !!id ? (
                <Link
                  to={`product/${id}`}
                  onClick={closeSearch}
                  key={`srch__${index}`}
                >
                  <p className="header__form--title">{title}</p>
                </Link>
              ) : (
                <p key={`srch__${index}`}>{title}</p>
              );
            })}
          </div>
        )}
      </form>
    </>
  );
};

export default Searchbar;
