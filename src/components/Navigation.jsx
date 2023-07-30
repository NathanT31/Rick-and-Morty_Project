import { useState, useEffect } from "react";

import BtnPrimary from "./Buttons/BtnPrimary";

function Navigation({ page, setPage, pages }) {
  const [disablePrevButton, setDisablePrevButton] = useState(false);
  const [disableNextButton, setDisableNextButton] = useState(false);
  const [handlePage, setHandlePage] = useState(page);

  const handlePrevPage = () => {
    const prevPage = page - 1;
    if (!disablePrevButton) setPage(prevPage);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    if (!disableNextButton) setPage(nextPage);
  };

  const handleStartPage = () => {
    if (page !== 1) setPage(1);
  };

  const handleEndPage = () => {
    if (page !== pages) setPage(pages);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!isNaN(handlePage) && handlePage >= 1 && handlePage <= pages) {
        setPage(handlePage);
      }
    }
  };

  useEffect(() => {
    setDisablePrevButton(page <= 1);
    setDisableNextButton(page >= pages);
    // window.scrollTo(0, 0);
  }, [page, pages]);

  return (
    <div className="flex justify-between gap-1.5 md:gap-3">
      <BtnPrimary
        onClick={handlePrevPage}
        content={"Prev"}
        disabled={disablePrevButton}
      />
      <div className="flex gap-1.5 md:gap-3">
        <BtnPrimary onClick={handleStartPage} content={"1"} />
        <input
          type="number"
          value={handlePage}
          onChange={(e) => setHandlePage(e.target.value)}
          onKeyDown={handleInputKeyPress}
          className="w-10 sm:w-14 text-sm rounded-lg text-center bg-zinc-200 focus:outline-indigo-400"
        />
        <BtnPrimary onClick={handleEndPage} content={pages} />
      </div>
      <BtnPrimary
        onClick={handleNextPage}
        content={"Next"}
        disabled={disableNextButton}
      />
    </div>
  );
}

export default Navigation;
