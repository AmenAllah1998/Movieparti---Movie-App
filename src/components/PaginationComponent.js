import React from "react";
import "./Pagination.css";
function PaginationComponent({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        {currentPage === 1 ? (
          <li className="page-item disabled">
            <a href="!#" className="page-link">
              Previous
            </a>
          </li>
        ) : (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage - 1)}
              href="!#"
              className="page-link"
            >
              Previous
            </a>
          </li>
        )}

        {pageNumbers.map((number) =>
          currentPage === number ? (
            <li key={number} className="page-item activated">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ) : (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          )
        )}

        {currentPage === pageNumbers.length ? (
          <li className="page-item disabled">
            <a href="!#" className="page-link">
              Next
            </a>
          </li>
        ) : (
          <li className="page-item">
            <a
              onClick={() => paginate(currentPage + 1)}
              href="!#"
              className="page-link"
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default PaginationComponent;
