import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import pageSizes from "../../data/page-sizes";

const NavBar = ({
  page,
  setPage,
  profileImg,
  userName,
  newPost,
  pageWidth
}) => {
  return (
    <>
      <div className="space-between">
        <div className="brand-color">
          <table style={{ marginTop: "7px" }} className={pageWidth <= pageSizes.fourth ? "mtx" : ""}>
            <tbody>
            <tr>
              <td>
                <Logo />
              </td>
              {pageWidth > pageSizes.seventh && (
                <td>
                  <SearchBar />
                </td>
              )}
              {pageWidth <= pageSizes.seventh && (
                <td>
                  <ul className="nav">
                    <li>
                      <a className={`nav-link `}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          class="mercado-match"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                        </svg>
                        {!(pageWidth <= pageSizes.sixth) && (
                          <span className="link-name">Search</span>
                        )}
                      </a>
                    </li>
                  </ul>
                </td>
              )}
            </tr>
            </tbody>
          </table>
        </div>
        <Nav
          page={page}
          setPage={setPage}
          profileImg={profileImg}
          userName={userName}
          newPost={newPost}
          pageWidth={pageWidth}
        />
      </div>
    </>
  );
};
export default NavBar;
