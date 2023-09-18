import { useEffect } from "react";
import "./App.css";
import { fetchDataFromAPi } from "./Utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAppConfiguration } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from './pages/searchResult/SearchResult';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchapiConfig();
  }, []);

  const fetchapiConfig = () => {
    fetchDataFromAPi("/configuration").then((res) => {
      console.log(res);

      //code for images that are being shown 
const url = {
  backdrop: res.images.secure_base_url + "original",
  poster: res.images.secure_base_url + "original",
  profile: res.images.secure_base_url + "original"
}

      dispatch(getAppConfiguration(url));
    });
  };

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    // {/* <>
    // <h1>movies</h1>      //did for Api testing purpose
    // {url?.total_pages}
    // </> */}
  );
}

export default App;
