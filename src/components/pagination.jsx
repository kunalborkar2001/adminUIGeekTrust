//Hello my name is Kunal Please read the comments for better understanding of code
// Pagination.js
import React from "react";
import "./pagination.css"

//The component Pagination controls DeleteAll and pagination. 

const Pagination = ({ totalPages, currentPage, onPageChange, onDeleteSelected }) => {
  const handlePageClick = (newPage) => {
    onPageChange(newPage);
  };


  return (
    <div className="pagination">
      <button className="deleteButton" onClick={onDeleteSelected}>
        Delete Selected
      </button>
      <ul>
        <li>
          <button onClick={() => handlePageClick(1)} disabled={currentPage === 1}>
            <i className="fa-solid fa-angles-left fa-xl"></i>
          </button>
        </li>
        <li>
          <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
        </li>
        {Array.from({ length: totalPages }, (v, i) => (
          <li key={i}>
            <button
              onClick={() => handlePageClick(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
            <i className="fa-solid fa-angle-left fa-rotate-180 fa-xl"></i>
          </button>
        </li>
        <li>
          <button onClick={() => handlePageClick(totalPages)} disabled={currentPage === totalPages}>
            <i className="fa-solid fa-angles-left fa-rotate-180 fa-xl"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

//This function is imported in table.js 
export default Pagination;

