import {searchGifs} from "../services/GifServices";
import {useGifs} from "../hooks/useGifs";

export async function loader() {
    const keyword = localStorage.getItem("LAST_SEARCH") || "Oso";
    const gifs = (await searchGifs({keyword})).data;
    return {gifs};
}

function LastSearch() {
    const {component} = useGifs();

    return (
        <div className={"trends-container"}>
            {component}
        </div>
    );
}

export default LastSearch;