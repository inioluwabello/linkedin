// # TO DO: get user profile details using useSWR
import Link from "next/link";

const ProfileViews = ({ user }) => {
  return (
    <>
      <div className="profile-views">
        <div className="profile-view-item hover-bg">
          <div className="row">
            <div className="col-sm-8">Profile Views</div>
            <div className="col-sm-4 text-right">
              <Link href="/">{user.profileViews}</Link>
            </div>
          </div>
        </div>

        <div className="profile-view-item hover-bg">
          <div className="row">
            <div className="col-sm-8">Impressions</div>
            <div className="col-sm-4 text-right">
              <Link href="/">{user.impressions}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileViews;
