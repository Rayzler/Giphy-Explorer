import {Link} from "react-router-dom";

function TrendingSearches({trendings}) {
    return (
        <>
            {trendings.slice(0, 5).map((trend, i) => <li key={i}><Link className="link" to={`/search/${trend}`}><p>{trend}</p></Link></li>)}
        </>
    );
}

export default TrendingSearches;