import pageSizes from '../../../data/page-sizes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const BusinessLink = ({pageWidth}) => {
    return (
        <a className={`nav-link ${
            pageWidth <= pageSizes.fourth ? "nav-link-sm" : ""
          }`}>
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
            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
          </svg>
          {(pageWidth > pageSizes.sixth) && (
            <span className="link-name">
              For Business <FontAwesomeIcon width={8} icon={faCaretDown} />
            </span>
          )}
        </a>
    )
};

export default BusinessLink;