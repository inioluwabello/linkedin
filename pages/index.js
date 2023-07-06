import LinkedInLayout from "../components/linkedinlayout/linkedinlayout";
import Heading from "../components/heading";
import MiniProfileCard from "../components/home/MiniProfileCard";
import StartPost from "../components/home/StartPost";
import MyPages from "../components/home/MyPages";
import Posts from "../components/home/Posts";
import Suggestions from "../components/home/Suggestions";
import PremiumAd from "../components/home/PremiumAd";
import user from "../data/user";
import Disclaimer from "../components/utils/Disclaimer";

const Index = ({ posts }) => {

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
            <Posts posts={posts} user={user} />
          </div>
          <div className="col-xs-12 d-sm-none d-md-none d-lg-block col-lg-3">
            <Suggestions />
            <PremiumAd user={user} />
          </div>
        </div>
        
        <Disclaimer />
      </LinkedInLayout>
    </>
  );
};

export async function getStaticProps() {
  // TO DO: Get external data from API using useSWR.
  //const posts = [];
  return {
    props: {
      posts: [
        {
          id: 1,
          owner: {
            img: "/images/posts/nduka.jpg",
            name: "Immanuel Nduka",
            following: true,
            title:
              "Co-Founder Scholarly| Here to inspire not impress| Entrepreneur| Gen Z Speaker| Brand Influencer",
            connectionOrder: "1st",
          },
          postContent: `I officially started my new job and role as the Co-founder and COO at Scholarly.

        This is not just another badge I wish to add to my profile but a vision I share with my co-founders and that's to establish a platform for professionals engraved on African soil.
        
        I have never needed your help better than I do now because the time calls upon us to arise and challenge the status quo.
        
        At Scholarly, we are eager to serve you better by creating a marketplace that helps you find your tribe, collaborate with friends on projects, connect with like-minded individuals and grow together, attend free events in person/virtually, find study-abroad opportunities and place you in opportunities to earn money through gigs and side hustles.
        
        Whether we succeed or fail is not a subject of discussion but what's important is that we worked, we defied the norm, and we faced every challenge, barrier and confrontation with one goal in mind to see this platform come to life but we can't do it alone, we need you, we need you to win as one.
        
        we have a goal of having 10,000 people on our waitlist before our launch next month.
        
        Join our waitlist at scholarlyme.com
         and share this post. If we must win, we do it together, and in doing it together, we win as one. Cheers.`,
          postImage: "/images/posts/nduka-post.jpg",
          date: "1w",
          edited: true,
          showGlobe: true,
          reactions: {
            like: 23,
            celebrate: 12,
            love: 34,
          },
          comments: [
            {
              id: "comment-1",
              name: "Fadeyemo Temitope",
              profileImg: "/images/posts/adeyemo.jpg",
              title: "Sales Manager at Crowd square",
              content:
                "Congratulations Emmanuel, so happy for you and many more to come",
              time: "5h",
              replies: [
                {
                  id: "reply-1",
                  name: "Immanuel Nduka",
                  profileImg: "/images/posts/nduka.jpg",
                  title:
                    "Co-Founder Scholarly| Here to inspire not impress| Entrepreneur| Elumelu boy| Gen Z Speaker| Brand Influencer",
                  content: "Thank you so much.",
                  time: "4h",
                  isAuthor: true,
                  celebrates: [
                    {
                      id: 1,
                    },
                  ],
                },
              ],
            },
            {
              id: "comment-2",
              name: "Ini-Obon B.",
              profileImg: "/images/posts/ini.jpg",
              title:
                "Social Impact Advocate| Corporate Social Responsibility| Social Entreprenuer| MSc. Sustainability & Social Innovation HEC PARIS | 2020/21 TOTAL Energies Scholar",
              content: "Amazing, welldone Bro 👏",
              time: "5h",
              replies: [
                {
                  id: "reply-2",
                  name: "Immanuel Nduka",
                  profileImg: "/images/posts/nduka.jpg",
                  title:
                    "Co-Founder Scholarly| Here to inspire not impress| Entrepreneur| Elumelu boy| Gen Z Speaker| Brand Influencer",
                  content: "Thank you so much. 🤍🤍",
                  time: "4h",
                  isAuthor: true,
                  likes: [
                    {
                      id: 1,
                    },
                  ],
                },
              ],
            },
          ],
          likedByUser: true,
        },
        {
          id: 2,
          owner: {
            img: "/images/posts/vee.jpg",
            name: "Bee Mativhu, ed.m",
            following: false,
            title:
              "Young Leader at the UN | Girls'Education Activist | Harvard MA | Founder of Empowered By Vee | Oxford BA Grad",
            connectionOrder: "1st",
          },
          referrer: {
            img: "/images/posts/ruth.jpg",
            name: "Ruth Bazinga",
            desc: "likes this",
          },
          postContent: `Allow me to re-introduce myself, 👩🏾‍🦱 hi! my name is Varaidzo Felistus Kativhu - but everyone calls me Vee

          ✍🏾I am 25 years old & I’m 5ft2
          
          📚 I am full-time Girls’ Education Activist and Young Leader for all things youth empowerment!
          
          🍋 I am the Founder and Director of my non-profit organisation Empowered By Vee where I volunteer my time to provide resources to make higher education more accessible for students who feel unsupported and underrepresented.
          
          🎥 for work I am a full time YouTuber where I create helpful videos about studying for over 260,000 people. & I collaborate with brands on partnerships through the platform.
          
          📍I also work part time as a Global Youth Engagement Lead at UWS, formerly known as United World Schools
          
          👩🏾‍🎓 I am a 2x graduate from Oxford University, bachelors degree. and a Masters of Education from Harvard University.
          
          🇺🇳 I am currently a Young Leader at the United Nations for the Sustainable Development Goals (SDG). 2022-2024.
          
          🤝🏾I also sit on the Advisory Board for Lady Gaga’s Born This Way Foundation where we advocate and advice on mental health initiatives for young people around the world.
          
          🏆 As recognition for my efforts to bridge the gap of inequality in education, I have been named a 2x Diana Award and Diana Legacy Award Recipient by Prince Harry and Prince William.
          
          🇬🇧 a United Kingdom Rare Rising Star by executive members of British parliament,
          
          📍and A Diversity Champion by the Vice Chancellor of Oxford University.
          
          📚 I recently published a self-help book “EMPOWERED” Live your life with passion and purpose’, a practical and motivational self-help book for young people.
          
          ❤️ In my spare time I enjoy volunteering and fundraising for education-focused charities.
          I am currently an active ambassador forCAMFED and GirlUp Zimbabwe.
          
          💭 In the near future, I will pursue a Ph.D. in Education Leadership and work alongside other change makers to address the pressing issue of the 130 million girls who are currently out of school.
          
          🍕 ohhh and I LOVEEEEE pizza & travelling the world 🌍!!`,
          postImage: "/images/posts/vee1.jpg",
          date: "1h",
          edited: false,
          showGlobe: false,
          reactions: {
            like: 2,
            celebrate: 3,
            love: 16,
          },
          comments: [],
        },
      ],
    },
  };
}

export default Index;
