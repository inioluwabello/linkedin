import LinkedInLayout from "../components/linkedinlayout/linkedinlayout";
import Heading from '../components/heading'
import MiniProfileCard from '../components/home/MiniProfileCard'

const Index = () => {
  return (
    <>
      <Heading />
      <LinkedInLayout>
        <div className="row mt-3">
          <div className="col-xs-12 col-md-2">
            <MiniProfileCard />
          </div>
          <div className="col-xs-12 col-md-7"></div>
          <div className="col-xs-12 col-md-3"></div>
        </div>
      </LinkedInLayout>
    </>
  );
};
export default Index;
