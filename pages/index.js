import LinkedInLayout from "../components/linkedinlayout/linkedinlayout";
import Heading from '../components/heading'
import MiniProfileCard from '../components/home/MiniProfileCard'
import StartPost from '../components/home/StartPost'
import MyPages from '../components/home/MyPages'
import Posts from '../components/home/Posts'

import user from '../data/user'

const Index = () => {

  return (
    <>
      <Heading />
      <LinkedInLayout user={user}>
        <div className="row">
          <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3">
            <MiniProfileCard user={user} />
            <MyPages />
          </div>
          <div className="col-xs-12 col-sm-7 col-md-8 col-lg-6">
            <StartPost user={user} />
            <Posts />
          </div>
          <div className="col-xs-12 d-sm-none d-md-none d-lg-block col-lg-3"></div>
        </div>
      </LinkedInLayout>
    </>
  );
};
export default Index;
