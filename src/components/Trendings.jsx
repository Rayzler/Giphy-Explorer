import {lazy, Suspense, useEffect, useState} from 'react';
import {useObserver} from "../hooks/useObserver.js";
import {getTrending} from "../services/GifServices.js";
import Dropdown from "./Dropdown.jsx";

const TrendingSearches = lazy(() => import("./TrendingSearches.jsx"));

function Trendings() {
    const [show, ref] = useObserver({distance: "125px"});
    const [trendings, setTrendings] = useState([]);

    useEffect(() => {
        if (show)
            getTrending().then(res => setTrendings(res.data));
    }, [show]);

    return (
        <div ref={ref}>
            <Dropdown title={"Tendencias"}>
                <Suspense>
                    {show ? <TrendingSearches trendings={trendings}/> : null}
                </Suspense>
            </Dropdown>
        </div>
    );
}

export default Trendings;