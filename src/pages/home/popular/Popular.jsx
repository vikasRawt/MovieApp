import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/SwitchTab';
import { useState } from 'react';
import useFetch from '../../../customHooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';



function Popular() {

  const[endpoint, setEndPoint] = useState("movie")

const{data, loading}=useFetch(`/${endpoint}/popular`)                      //`/trending/{media_type}/{time_window}


//for tab change from day to week and vice-versa
  const onTabChange =(tab)=>{
    setEndPoint(tab==="Movies"? "movie":"tv")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>What's Popular</span>
        <SwitchTab data={["Movies","Tv Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} 
      loading={loading}
      endpoint = {endpoint}/>
    </div>
  );
}

export default Popular;
