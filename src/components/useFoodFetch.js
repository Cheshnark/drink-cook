import { useEffect, useState } from "react";

const useFoodFetch = (url) => {
    const [food, setFood] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        const abortCont = new AbortController();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8cb910c87cmsh7fa5bccb169469bp10ef42jsn86fdd980bc79',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        fetch(url, options, {signal:abortCont.signal})
        .then(res => {
            if (!res.ok){
                throw Error ('Could not fetch data from that source');
            }
            return res.json();
        })
        .then (data => {
            setFood(data.results);
            setPending(false);
            setError(null)
        })
        .catch(err => {
            console.log(err);
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                setPending(false);
                setError(err.message);
            }
        })

        return () => abortCont.abort();
    }, [url]);

    return{food, pending, error};
}

export default useFoodFetch;