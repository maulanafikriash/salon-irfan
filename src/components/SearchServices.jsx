/* eslint-disable react/prop-types */
import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchService({ searchQuery, setSearchQuery }) {
  return (
    <div className="input-group pt-3 pb-4">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FaSearch size={25} />
        </span>
      </div>
      <input
        type="text"
        placeholder="Cari layanan..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="form-control"
      />
    </div>
  );
}

export default SearchService;
