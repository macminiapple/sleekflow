import { useState } from "react";
import styles from "@/styles/pagination.module.css";

const Pagination = ({ onClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            href="#"
            className={`block px-3 py-2 ml-0 leading-[40px] h-[40px] text-gray-500 bg-white 
            border border-gray-300 rounded-l-lg ${styles.pagination}
            ${currentPage === 1 ? styles.paginationDisable : ""}
            `}
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        <PaginationNumber
          label={1}
          current={currentPage === 1 ? true : false}
        />
        <PaginationNumber
          label={2}
          current={currentPage === 2 ? true : false}
        />
        <PaginationNumber
          label={3}
          current={currentPage === 3 ? true : false}
        />
        <PaginationNumber
          label={4}
          current={currentPage === 4 ? true : false}
        />
        <li>
          <button
            href="#"
            className={`block px-3 py-2 leading-[40px] h-[40px] text-gray-500 
            bg-white border border-gray-300 rounded-r-lg ${styles.pagination}
            ${currentPage === 4 ? styles.paginationDisable : ""}
            `}
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

const PaginationNumber = ({ label, current, ...props }) => {
  return (
    <li>
      <button
        href="#"
        className={`px-4 py-[9px] leading-tight text-gray-500 bg-white border border-gray-300 
        ${current ? styles.paginationActive : ``}
         ${styles.pagination}
        `}
        {...props}
      >
        {label}
      </button>
    </li>
  );
};
