import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PostSort = ({orderBy, setOrderBy}) => {
  const [showingOrderOptions, setShowingOrderOptions] = useState(false);

  const handleOrderOptionsSelectedClick =(selected) => {
    setOrderBy(selected);
    setShowingOrderOptions(false);
  }

  const handleOrderOptionsClick = (showing) => {
    setShowingOrderOptions(showing);
  }

  return (
    <>
      <div className="fl" style={{height: "29px"}}>
        <div style={{ flexGrow: "1" }}>
          <hr />
        </div>
        <div className="post-sort">
          <span className="alt-text">Sort by:{" "}</span>
          <button onClick={() => handleOrderOptionsClick(!showingOrderOptions)}>
            {orderBy} &nbsp;&nbsp;
            <FontAwesomeIcon width={8} icon={faCaretDown} />
          </button>

          {showingOrderOptions && (
            <div style={{ position: "relative" }}>
              <div className="options-dropdown">
                <div
                  onClick={() => handleOrderOptionsSelectedClick("Top")}
                  className={`options hover-bg alt-text bold ${
                    orderBy === "Top" ? "option-selected" : ""
                  }`}
                >
                  Top
                </div>
                <div
                  onClick={() => handleOrderOptionsSelectedClick("Recent")}
                  className={`options hover-bg alt-text bold ${
                    orderBy === "Recent" ? "option-selected" : ""
                  }`}
                >
                  Recent
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostSort;
