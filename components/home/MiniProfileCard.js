import ProfileViews from "./ProfileViews";
import AccessTools from "./AccessTools";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const MiniProfileCard = ({ user }) => {
  return (
    <div className="card mt-3">
      <div className="profile-header"></div>

      <div className="identity">
        <img src="/images/profile.jpg" />

        <div className="text-center profile-name">{user.name}</div>
        <div className="text-center profile-title">{user.title}</div>
        <ProfileViews user={user} />
        <AccessTools />
        <Link className="profile-items hover-bg" href="/">
          <span><FontAwesomeIcon icon={faBookmark} width={16} height={16} /></span>
          <span style={{position: "relative", left: "0.6rem", top: "2px"}}>My Items</span>
        </Link>
      </div>
    </div>
  );
};
export default MiniProfileCard;
