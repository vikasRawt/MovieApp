import React from "react";
import "./hB.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //when we hit enter then this should go to the searched page
import useFetch from "../../../customHooks/UseFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadimg/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); //instance created of navigate
  const { url } = useSelector((state) => state.home);

  //Api Calling ::--
  const { data, loading } = useFetch("/movie/upcoming");

  //using useEffect for random background images and set through setBackground:- //data in this dependency is the above fetched api data
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path; //background_path is the key here that we get from data only
    setBackground(bg);
  }, [data]); //and ?(optional chaining) is used as we don't know when we have data and when we don't

  const searchQuerHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`); //inside is the url that is used to go searchResult in and quer is the param
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="sub-Title">
            Millions of movie SHows and TV shows to Discover
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for Shows..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQuerHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
