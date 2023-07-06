const PremiumAd = ({ user }) => {
  return (
    <div className="card mt-3">
      <div className="card-content">
        <div className="reactivate-top text-md text-right">
          Ad &nbsp;{" "}
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g>
              <g>
                <path d="M3,9.5A1.5,1.5,0,1,1,4.5,8,1.5,1.5,0,0,1,3,9.5ZM11.5,8A1.5,1.5,0,1,0,13,6.5,1.5,1.5,0,0,0,11.5,8Zm-5,0A1.5,1.5,0,1,0,8,6.5,1.5,1.5,0,0,0,6.5,8Z"></path>
              </g>
            </g>
          </svg>
          <div className="text-center alt-text text-sm">
            {user.name.split(" ")[0]}, reactivate your Premium free trial today!
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-right">
            <img
              src={user.profileImg}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </div>
          <div className="col">
            <img
              style={{ width: "69px", height: "70px" }}
              src="/images/li-premium.jpg"
            />
          </div>
        </div>

        <div className="mt-3 text-center">
          <button className="reactivate-btn brand-color bold text-md">
            Reactivate Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumAd;
