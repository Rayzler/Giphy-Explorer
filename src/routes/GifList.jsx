import {useEffect, useState} from 'react';
import {searchGifs} from "../services/GifServices.js";
import {useGifs} from "../hooks/useGifs.jsx";
import {useObserver} from "../hooks/useObserver.js";
import {useParams} from "react-router-dom";

export async function loader({request}) {
    const url = new URL(request.url);
    const keyword = url.pathname.substring(8);
    localStorage.setItem("LAST_SEARCH", decodeURI(keyword));
    const gifs = (await searchGifs({keyword})).data;
    return {keyword, gifs};
}

function GifList() {
    const {component, setGifs} = useGifs();
    const [loadNext, ref] = useObserver({disconnect: false});
    const [page, setPage] = useState(0);
    const {keyword} = useParams();
    const limit = 15;

    useEffect(() => {
        if (loadNext) {
            setPage(prev => prev + 1);
        }
    }, [loadNext]);

    useEffect(() => {
        if (page > 0)
            searchGifs({keyword, offset: page * limit})
                .then(res => setGifs(prevGifs => [...prevGifs, ...res.data]));
    }, [keyword, page, setGifs]);

    return (
        <>
            {component}
            <div ref={ref}></div>
        </>
    );
}

export default GifList;