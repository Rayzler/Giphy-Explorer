import {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import GifsContext from "../context/GifsContext.jsx";
import {searchGifById} from "../services/GifServices.js";

export async function loadGif(id) {
    return (await searchGifById(id)).data;
}

function GifDetail() {
    const {id} = useParams();
    const {gifs} = useContext(GifsContext);
    const [gif, setGif] = useState(gifs.filter((gif) => gif.id === id)[0]);

    useEffect(() => {
        !gif && loadGif(id).then(res => setGif(res));
    }, [gif, id]);

    if (gif && gif.length === 0) return <h2>No se encontro</h2>

    if (!gif) return <h2>Cargando...</h2>

    return (
        <div className={"detail"}>
            <h3 className={"detail__title"}>{gif.title}</h3>
            <img src={gif.images["downsized_medium"].url} alt="" width={"100%"} className={"detail__gif"}/>
        </div>
    );
}

export default GifDetail;