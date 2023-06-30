import React ,{useEffect} from "react";
import { uesLocation, useLocation} from 'react-router-dom';

const SearchResult = () => {
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search)
    const query = queryParams.get('query');
    useEffect(()=>{
        console.log(query);
    },[query]);
    return (
        <div>
            <h1>검색결과</h1>
            <h3>검색어 : {query}</h3>
        </div>
    )
}
export default SearchResult;