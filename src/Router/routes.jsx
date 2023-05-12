import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Search } from "../pages/Search/Search";
import { Detail } from "../pages/Detail/Detail";

export const routes = () => {
    return(
        <Layout>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/items"  element={<Search />} />
                <Route path="/items/:id"  element={<Detail />} />
            </Routes>
        </Layout>
    )
}