const SuggestionItems = ({ suggestion, i }) => {
  const titleLimiterCount = 60;
  return (
    <div className={`suggestion-item ${i === 0 ? "mt-1" : "mt-3"}`}>
      <div className="fl post-owner">
        <img src={suggestion.profileImg} />
        <div>
          <div className="post-user-name pry-text">
            <span className="name bold">{suggestion.name}</span>
          </div>

          {suggestion.title && (
            <div className="owner-title sm-text-1 alt-text">
              {suggestion.title.length > titleLimiterCount
                ? `${suggestion.title.slice(0, titleLimiterCount)}...`
                : suggestion.title}
            </div>
          )}

          {suggestion.type === "Company" && (
            <div className="owner-title sm-text-1 alt-text">
              {suggestion.type} <div className="grey-dot"></div>{" "}
              {suggestion.industry}
            </div>
          )}

          <div style={{height: "40px"}}>
            <button class="alt-text follow-btn hover-bg text-lg mt-1">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="16"
                height="16"
              >
                <path
                  fill="currentColor"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                ></path>
              </svg>{" "}
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionItems;
