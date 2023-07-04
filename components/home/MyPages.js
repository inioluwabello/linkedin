import Link from "next/link";

// # TO DO: import pages using useSWR
import pages from "../../data/pages";

const MyPages = () => {
  return (
    <div className="card mt-3">
      <div className="card-content">
        <h6 className="page-title pry-text">My Pages ({pages.length})</h6>

        {pages.map((page, i) => {
          return (
            <>
              <div className="fl">
                <div className="page-img">
                  <img src={page.logo} />
                </div>
                <div className={`page-dets ${i > 0 ? "border-top-1" : ""} `}>
                  <div className="page-name pry-text">{page.name}</div>
                  <Link href="/" className="page-notifications">
                    <div className="alt-text" style={{ float: "left" }}>
                      Page notifications
                    </div>
                    <div style={{ float: "right" }}>{page.notifications}</div>
                    <br style={{ clear: "both" }} />
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default MyPages;
