import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleClose = () => setShowDisclaimer(false);
  return (
    <Modal show={showDisclaimer} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Important Notice!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-sm">
          <h6 className="bold">Disclaimer:</h6>
          This app is a project created for educational purposes and to showcase
          the developer's skills. It is not affiliated with or endorsed by
          LinkedIn, and the content displayed on this website is for
          demonstration purposes only. Any resemblance to real persons,
          companies, or organizations is purely coincidental.
          <br />
          <br />
          <h6 className="bold mt-3">Credits:</h6>
          This <span className="bold emphasis">LinkedIn clone</span> was
          developed by{" "}
          <span className="bold emphasis">Olakunle David Bello</span> as a
          personal project. The design and layout of this website were inspired
          by LinkedIn but have been customized and implemented from scratch. The
          technologies used include{" "}
          <span className="bold emphasis">
            React, Next.js, Vercel, Git, VSCode, Trello
          </span>
          . Please note that this is not a production-ready application and
          should not be used for any real-world purposes. It is solely intended
          for educational and learning purposes.
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Disclaimer;
