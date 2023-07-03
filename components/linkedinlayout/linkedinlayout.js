import NavBar from "./NavBar";
import { useState } from "react";
import user from "../../data/user";
import { useEffect } from "react";

const LinkedInLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState("Home");
  const newPost = true;

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 769);
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
          <div>
            <NavBar
              page={page}
              setPage={setPage}
              profileImg={user.profileImg}
              userName={user.name}
              newPost={newPost}
              isMobile={isMobile}
            />
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default LinkedInLayout;
