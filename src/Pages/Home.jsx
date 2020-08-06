import React from "react";
import Header from "../Components/Home/Header";
import Deals from "./../Components/Home/Deals/Deals";
import Features from "./../Components/Home/Featuers/Features"
import Loading from "../Components/Home/Hero/Loading";
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
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Home;
