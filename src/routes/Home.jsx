import {Outlet, redirect} from "react-router-dom";
import {Provider as GifsContextProvider} from "../context/GifsContext.jsx";
import Navbar from "../components/Navbar.jsx";

export async function action({request}) {
    const formData = await request.formData();
    const keyword = formData.get("keyword") || localStorage.getItem("LAST_SEARCH") || "Huevos";
    localStorage.setItem("LAST_SEARCH", keyword);
    return redirect(`/search/${keyword}`);
}

export default function Home() {
    return (
        <>
            <Navbar/>
            <GifsContextProvider>
                <Outlet/>
            </GifsContextProvider>
        </>
    );
}