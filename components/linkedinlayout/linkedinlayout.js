import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import user from "../../data/user";
import pageSizes from '../../data/page-sizes'

const LinkedInLayout = ({ children }) => {
  const [pageWidth, setPageWidth] = useState(580);
  const [page, setPage] = useState("Home");
  const newPost = true;
  const newRequests = 2;
  const newNotifications = 111

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setPageWidth(width);
  };

  setTimeout(() => {
    handleWindowSizeChange();
  }, 1000);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div style={{ paddingBottom: "2rem" }}>
        <div className="top-bar bg-wh">
          <div className="container">
            <NavBar
              page={page}
              setPage={setPage}
              profileImg={user.profileImg}
              userName={user.name}
              newPost={newPost}
              pageWidth={pageWidth}
              pageSizes={pageSizes}
              newRequests={newRequests}
              newNotifications={newNotifications}
            />
          </div>
        </div>

        <div 
          className={`${pageWidth <= pageSizes.second ? "mobile-viewport" : ""}`}
          style={{ position: "relative", top: "3.5rem", padding: "0 0.8rem" }}>
          <div className="container">{children}</div>
        </div>
      </div>
    </>
  );
};

export default LinkedInLayout;
