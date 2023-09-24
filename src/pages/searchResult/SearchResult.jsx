import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./searchResult.scss";
import { fetchDataFromAPi } from '../../Utils/api';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
// import MovieCard from '../../components/'
import Spinner from '../../components/spinner/Spinner';
// import noRes


function SearchResult() {
  const [data, setData]= useState(null);
  const[pageNum, setPageNum] = useState(1);
  const[loading, setLoading]=useState(false);
  const{query}= useParams();

  const fetchInitialData = ()=>{
    setLoading(true)
    fetchDataFromAPi(`/search/multi?query=${query}&page=${pageNum}`).then( (res)=>{
      setData(res)
      setPageNum( (prev)=> prev + 1);
      setLoading(false);
    })
  }

  const fetchNextPageData = ()=>{
    fetchDataFromAPi(`/search/multi?query=${query}&page=${pageNum}`).then( (res)=>{
      if(data?.results){
        setData({
          ...data, results:[...data?.results, ...res.results]
        })
      }
      else{
        setData(res)
      }
      setPageNum((prev)=> prev + 1 );
    })
  }

  useEffect( ()=>{
    fetchInitialData();
  },[query])


  return (
    <div className='searchResultsPage'>
      {loading && <Spinner initial={true}/>}
      {!loading && (
        <ContentWrapper>
          {data?.results.length > 0 ? (
              <>
              <div className="pageTitle">
                {`Search ${data.total_results > 1 ? "results" :"result"} of '${query}'`}
              </div>
              </>
          ):(<span classname="resultNotFound">
            Sorry, Result Not Found!
          </span>)}
        </ContentWrapper>
      )}
    </div>
  );
}

export default SearchResult;
