import LinkedInLayout from "../components/linkedinlayout/linkedinlayout";
import Heading from '../components/heading'
import MiniProfileCard from '../components/home/MiniProfileCard'
import user from '../data/user'

const Index = () => {

  return (
    <>
      <Heading />
      <LinkedInLayout user={user}>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <MiniProfileCard user={user} />
          </div>
          <div className="col-xs-12 col-md-5"></div>
          <div className="col-xs-12 col-md-4"></div>
        </div>
      </LinkedInLayout>
    </>
  );
};
export default Index;
