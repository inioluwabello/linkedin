import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AdvertiseLink from "./nav-links/AdvertiseLink";
import BusinessLink from "./nav-links/BusinessLink";
import { useState } from "react";

const Nav = ({
  page,
  setPage,
  profileImg,
  newPost,
  newRequests,
  newMessages,
  newNotifications,
  pageWidth,
  pageSizes,
}) => {
  const [navOverflowShowing, setNavOverflowShowing] = useState(false);

  const handlePageClick = (page) => {
    setPage(page);
  };

  return (
    <>
      <ul className="nav">
        <li>
          <a
            onClick={() => handlePageClick("Home")}
            className={`nav-link ${page === "Home" ? "nav-link-active" : ""}`}
          >
            {newPost === true && (
              <div style={{ position: "relative", height: 0 }}>
                <span className="notification-badge"></span>
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            {!(pageWidth <= pageSizes.sixth) && (
              <span className="link-name">Home</span>
            )}
          </a>
          {!(pageWidth <= pageSizes.sixth) && page === "Home" && (
            <div style={{ position: "relative" }}>
              <span className="nav-link-active-bar"></span>
            </div>
          )}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Network")}
            className={`nav-link ${
              page === "Network" ? "nav-link-active " : " "
            } ${pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""}`}
          >
            {newRequests > 0 && (
              <div style={{ position: "relative", height: 0 }}>
                <span className="insert notification-badge">
                  {newRequests}
                </span>
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            {pageWidth > pageSizes.sixth && (
              <span className="link-name">My Network</span>
            )}
          </a>
          {!(pageWidth <= pageSizes.sixth) && page === "Network" && (
            <div style={{ position: "relative" }}>
              <span className="nav-link-active-bar"></span>
            </div>
          )}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Jobs")}
            className={`nav-link ${page === "Jobs" ? "nav-link-active" : ""} ${
              pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            {pageWidth > pageSizes.sixth && (
              <span className="link-name">Jobs</span>
            )}
          </a>
          {!(pageWidth <= pageSizes.sixth) && page === "Jobs" && (
            <div style={{ position: "relative" }}>
              <span className="nav-link-active-bar"></span>
            </div>
          )}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Messaging")}
            className={`nav-link ${
              page === "Messaging" ? "nav-link-active" : ""
            } ${pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""}`}
          >
            
            {newMessages > 0 && (
              <div style={{ position: "relative", height: 0 }}>
                <span className="insert notification-badge">
                  {newMessages}
                </span>
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            {pageWidth > pageSizes.sixth && (
              <span className="link-name">Messaging</span>
            )}
          </a>
          {!(pageWidth <= pageSizes.sixth) && page === "Messaging" && (
            <div style={{ position: "relative" }}>
              <span className="nav-link-active-bar"></span>
            </div>
          )}
        </li>
        <li>
          <a
            onClick={() => handlePageClick("Notifications")}
            className={`nav-link ${
              page === "Notifications" ? "nav-link-active" : ""
            } ${pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""}`}
          >
          {newNotifications > 0 && (
            <div style={{ position: "relative", height: 0 }}>
              <span className="insert notification-badge">
                {newNotifications}
              </span>
            </div>
          )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            {pageWidth > pageSizes.sixth && (
              <span className="link-name">Notifications</span>
            )}
          </a>
          {!(pageWidth <= pageSizes.sixth) && page === "Notifications" && (
            <div style={{ position: "relative" }}>
              <span className="nav-link-active-bar"></span>
            </div>
          )}
        </li>
        <li>
          <a
            className={`nav-link ${
              pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""
            }`}
          >
            <img src={profileImg} className="profile-img-sm" />
            {pageWidth > pageSizes.sixth && (
              <span className="link-name">
                Me <FontAwesomeIcon width={8} icon={faCaretDown} />
              </span>
            )}
          </a>
        </li>

        {pageWidth < pageSizes.second && (
          <li className="border-left-1">
            <a
              onClick={() => setNavOverflowShowing(!navOverflowShowing)}
              className={`nav-link ${
                pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
              </svg>
            </a>
            <div
              className={`nav-overflow ${
                navOverflowShowing ? "d-block" : "d-none"
              }`}
            >
              <div className="nav-overflow-items">
                <ul className="nav">
                  <li>
                    <BusinessLink pageWidth={pageWidth} />
                  </li>
                  <li>
                    <AdvertiseLink pageWidth={pageWidth} />
                  </li>
                </ul>
              </div>
            </div>
          </li>
        )}

        {pageWidth >= pageSizes.second && (
          <li className="border-left-1">
            <BusinessLink pageWidth={pageWidth} />
          </li>
        )}
        {pageWidth >= pageSizes.second && (
          <li>
            <AdvertiseLink pageWidth={pageWidth} />
          </li>
        )}
      </ul>
    </>
  );
};

export default Nav;
