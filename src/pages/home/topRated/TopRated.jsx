import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/switchTab';
import { useState } from 'react';
import useFetch from '../../../customHooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';



function TopRated() {

  const[endpoint, setEndPoint] = useState("movie")

const{data, loading}=useFetch(`/${endpoint}/top_rated`)                      //`/trending/{media_type}/{time_window}


//for tab change from day to week and vice-versa
  const onTabChange =(tab)=>{
    setEndPoint(tab==="Movies"? "movie":"tv")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTab data={["Movies","TV-Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} 
      loading={loading}
      endpoint = {endpoint}/>
    </div>
  );
}

export default TopRated;
