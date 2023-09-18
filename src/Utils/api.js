import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDg4ZTYyMGU2NzRjZjllNTE3MGY5NGEwOTM2MzMxNiIsInN1YiI6IjY1MDdlMjcyM2NkMTJjMDBlYjQ1M2M2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gBOFr0kcVjiTNtVxT8IH3ghOckF-VX1gOUmchlM5KHw";


const headers = {
    Authorization:"bearer "+ TMDB_TOKEN,
}

export const fetchDataFromAPi = async(url, params)=>{
try{
const {data} = await axios.get(BASE_URL + url,{
    headers, params
})
return data;
}
catch(err){
    return err;
}
}