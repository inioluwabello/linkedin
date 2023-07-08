import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faProjectDiagram,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const LeftPane = ({}) => {
  return (
    <div className="left-content">
      <div style={{ width: "70%" }}>
        <h1 className="mt-5">
          <div>
            Hi! I Am 
            {/* <div className="dev">Verified</div> */}
          </div>
          <div>David Inioluwa...</div>
        </h1>
        <p style={{ fontWeight: "500" }}>
          Designing web and mobile apps for over <strong>5 years</strong> as a
          software developer
        </p>
      </div>

      {/* Hire Me */}
      <div className="hire mt-3">
        <div className="row">
          <div className="col">
            <a href="mailto:belloolakunledavid@gmail.com" className="home-btns hire-me">Contact Me</a>
          </div>
          {/* <div className="col"></div>
          <div className="col d-xs-none d-sm-none d-md-block">
            <img style={{ width: "100px" }} src="/images/design-pic.jpg" />
          </div> */}
        </div>
      </div>

      {/* Projects */}
      <div className="f-projects" style={{marginTop: "8rem"}}>
        <div className="space-between home-btns projects">
          <span>Featured Projects</span>
          <Link className="btn btn-sm btn-primary" href="/works">
            See All Projects{" "}<FontAwesomeIcon icon={faProjectDiagram} width={12} />
          </Link>
        </div>
        <hr style={{ marginTop: "0" }} />

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Link target="_blank" href="https://linkedin-two-chi.vercel.app/">
              <div className="card mt-3 pointer">
                <div className="card-title">LinkedIn Clone</div>
                <div className="card-content">
                  <div className="project-img">
                    <img src="/images/projects/li.jpg" alt="LI" />
                  </div>
                  <div className="card-footer alt-text">
                    <small>Click to see live app</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <Link className="mt" target="_blank" href="https://standr-next.vercel.app/product">
              <div className="card mt-3 pointer">
                <div className="card-title">EShop Checkout</div>
                <div className="card-content">
                  <div className="project-img">
                    <img src="/images/projects/eshop.jpg" alt="LI" />
                  </div>
                  <div className="card-footer alt-text">
                    <small>Click to see live app</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="page-footer mt-5">
          {/* Statistics */}
          <div className="row">
            <div className="col-sm-6">
              <strong>Project</strong>
              <br />
              <strong>Statistics 2023</strong> <br />
              <Link className="footer-button" href="/works">
                See All Projects
              </Link>
            </div>
            <div className="col-sm-6">
              <div className="mt-5 space-between statistics border-bottom-1">
                <div className="stat">Front End Development</div>
                <div className="rating">
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                </div>
              </div>
              <div className="space-between statistics border-bottom-1">
                <div className="stat">Back End Development</div>
                <div className="rating">
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#fbd20b" }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    width={16}
                    style={{ color: "#c5c5c5" }}
                  />
                </div>
              </div>
              <div className="space-between statistics border-bottom-1">
                <div className="stat">Tools</div>
                <div className="rating">VSCode | Git | Jira | ChatGPT</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-around footer-links alt-color text-sm mt-5">
            <span style={{position: "relative", top: ".3rem"}}>
              <strong>Contact: </strong>
            </span>
            <Link
              className="hover-bg hover-items"
              target="_blank"
              href="https://www.linkedin.com/in/olakunle-david-bello/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>{" "}
              <span>LinkedIn</span>
            </Link>
            
            <Link
              className="hover-bg hover-items"
              target="_blank"
              href="https://github.com/inioluwabello"
            >
              <svg
                width="16"
                height="16"
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                fill="currentColor"
                data-view-component="true"
                className=""
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>{" "}
              <span>GitHub</span>
            </Link>
            
            <Link
              className="hover-bg hover-items"
              target="_blank"
              href="mailto:belloolakunledavid@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} width={16} height={16} />{" "}
              <span>Email</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
