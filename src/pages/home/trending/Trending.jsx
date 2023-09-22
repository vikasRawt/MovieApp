import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTabs/switchTab';
import { useState } from 'react';
import useFetch from '../../../customHooks/UseFetch';
import Carousel from '../../../components/carousel/Carousel';



function Trending() {

  const[endPoint, setEndPoint] = useState("day")

const{data, loading}=useFetch(`/trending/all/${endPoint}`)                      //`/trending/{media_type}/{time_window}


//for tab change from day to week and vice-versa
  const onTabChange =(tab)=>{
    setEndPoint(tab==="Day"? "day":"week")
    }
  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
}

export default Trending;
