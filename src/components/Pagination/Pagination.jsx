import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.css";

function Pagination({ pageCount, handlePageClick, currentPage }) {
  return (
    <div className={styles.block}>
      <ReactPaginate
        className="flex gap-1 sm:gap-2 justify-center m-10 font-bold"
        pageClassName="w-9 sm:w-11 h-9 sm:h-11 rounded-xl transition ease-in-out hover:text-white hover:bg-indigo-500 active:scale-95 cursor-pointer"
        nextClassName={
          "w-10 sm:w-12 h-9 sm:h-11 mx-1 rounded-xl transition ease-in-out border border-indigo-500 hover:text-white hover:bg-indigo-500 active:scale-95 cursor-pointer"
        }
        previousClassName={
          "w-10 sm:w-12 h-9 sm:h-11 mx-1 rounded-xl transition ease-in-out border border-indigo-500 hover:text-white hover:bg-indigo-500 active:scale-95 cursor-pointer"
        }
        activeClassName={"bg-indigo-700 text-white"}
        disabledClassName={"text-indigo-400 cursor-not-allowed "}
        breakClassName={
          "transition ease-in-out hover:text-indigo-700 cursor-pointer"
        }
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
    </div>
  );
}

export default Pagination;
