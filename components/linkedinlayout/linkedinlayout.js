import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import user from "../../data/user";

const LinkedInLayout = ({ children }) => {
  const [pageWidth, setPageWidth] = useState(1200)
  const [page, setPage] = useState("Home");
  const newPost = true;

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setPageWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
      <div className="container" style={{ paddingBottom: "2rem" }}>
        <div className="top-bar bg-wh">
          <div className="container">
            <NavBar
              page={page}
              setPage={setPage}
              profileImg={user.profileImg}
              userName={user.name}
              newPost={newPost}
              pageWidth={pageWidth}
            />
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}></div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default LinkedInLayout;
