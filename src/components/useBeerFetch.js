import { useEffect, useState } from "react";

const useBeerFetch = (url) => {
    const [beer, setBeer] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, {signal:abortCont.signal})
        .then(res => {
            if (!res.ok){
                throw Error ('Could not fetch data from that source');
            }
            return res.json();
        })
        .then (data => {
            setBeer(data);
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

    return{beer, pending, error};
}

export default useBeerFetch;