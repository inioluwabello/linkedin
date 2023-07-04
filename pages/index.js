import LinkedInLayout from "../components/linkedinlayout/linkedinlayout";
import Heading from '../components/heading'
import MiniProfileCard from '../components/home/MiniProfileCard'

const Index = () => {
  
  return (
    <>
      <Heading />
      <LinkedInLayout>
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <MiniProfileCard />
          </div>
          <div className="col-xs-12 col-md-6"></div>
          <div className="col-xs-12 col-md-3"></div>
        </div>
      </LinkedInLayout>
    </>
  );
};
export default Index;
