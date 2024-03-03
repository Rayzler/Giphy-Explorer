import {Link, useLoaderData, useNavigation} from "react-router-dom";
import {useContext, useEffect} from "react";
import Masonry from "react-masonry-css";
import GifsContext from "../context/GifsContext.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    576: 1
};

export function useGifs() {
    const data = useLoaderData();
    const gifsData = data.gifs;
    const keyword = data.keyword;
    const trending = data.trending;
    const navigation = useNavigation();
    let loading = false;
    const {gifs, setGifs} = useContext(GifsContext);

    if (navigation.state === "loading")
        loading = true;

    useEffect(() => {
        setGifs(gifsData);
    }, [gifsData, keyword, setGifs]);

    const component = loading ? <div className="loader-container"><span className="loader"></span></div> : (
        <div className={"list-container"}>
            <div>
                {keyword ? "": (<FontAwesomeIcon icon={faClock}/>)}
                <span className={keyword ? "searched" : ""}>{keyword ? `${decodeURI(keyword)}` : `Ultima búsqueda`}</span>
            </div>
            <Masonry
                breakpointCols={breakpointColumns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    gifs.map(gif => <Link to={`/gif/${gif.id}`} key={gif.id}>
                        <img src={gif.images["downsized_medium"].url} alt="" width={"100%"}/>
                    </Link>)
                }
            </Masonry>
        </div>
    );

    return {component, trending, setGifs}
    ;
}