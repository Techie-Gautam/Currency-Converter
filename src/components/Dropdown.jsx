import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const Dropdown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFavorite,
  title = "",
}) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {favorites.map((currency) => (
            <option value={currency} key={currency} className="font-bold text-blue-600 pb-1 bg-gray-300">
              {currency}
            </option>
          ))}
          <hr className="w-full" />
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
        </select>

        <button
          onClick={() => handleFavorite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"
        >
          {favorites.includes(currency) ? <HiStar className="text-yellow-500" /> : <HiOutlineStar />}
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
