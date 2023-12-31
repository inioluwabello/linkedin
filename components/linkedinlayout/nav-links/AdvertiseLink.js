import pageSizes from "../../../data/page-sizes"
const AdvertiseLink = ({pageWidth}) => {
    return (
        <a className={`nav-link ${
            pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M12 17.13a5.13 5.13 0 010-10.25V4a8 8 0 108 8h-2.87A5.13 5.13 0 0112 17.13z"
              style={{ isolation: "isolate" }}
              opacity=".75"
            ></path>
            <path d="M23.31 6.34l-4.95-.71-.7-4.94-3.54 3.53.35 2.48-3.89 3.89a2 2 0 002.83 2.83l3.89-3.89 2.48.35z"></path>
          </svg>
          {(pageWidth > pageSizes.sixth) && <span className="link-name">Advertise</span>}
        </a>
    )
};

export default AdvertiseLink;