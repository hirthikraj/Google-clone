import React,{useState,useEffect} from 'react'
import API_KEY from './Key'

const CONTEXT_KEY = "39099d0e5b44f0dec";

const useGoogleSearch = (term) => {
    const[data,setData] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(results => setData(results))
        }

        fetchData();

    },[term])

    return {data};
}

export default useGoogleSearch;
