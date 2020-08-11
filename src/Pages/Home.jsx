import React from "react";
import Header from "../Components/Home/Header";
import Deals from "./../Components/Home/Deals/Deals";
import Features from "./../Components/Home/Featuers/Features";
import Loading from "../Components/Home/Hero/Loading";
import Article from "../Components/Home/Article/Article";
import GamerBanner from "../Components/Home/GamerBanner/GamerBanner"



const Home = () => {

  const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => {
        setIsLoading(true);
      }, 500);
    }, [isLoading]);

  return (
    <>
      <div className="home">
        {isLoading ? (
          <>
            <Header />
            <Deals />
            <Features />
            <Article />
            <GamerBanner />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
