const PostReferrer = ({ post }) => {
  <div className="space-between">
    <div className="referrer">
      <img src={post.referrer.img} alt="Referrer Image" />
      <span>{post.referrer.desc}</span>
    </div>
    <button className="small-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        data-supported-dps="24x24"
        fill="currentColor"
        className="mercado-match"
        width="24"
        height="24"
        focusable="false"
      >
        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
      </svg>
    </button>
  </div>;
};

export default PostReferrer;
