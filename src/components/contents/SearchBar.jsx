import React from "react";

const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Cari catatan..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            className={'w-full px-3 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200'}
        />
    );
}
 
export default SearchBar;