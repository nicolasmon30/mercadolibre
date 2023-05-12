/**
 * Impotamos hooks para las rutas y componentes para renderizar en la app
 */
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home } from "../pages/Home/Home";
import { Search } from "../pages/Search/Search";
import { Detail } from "../pages/Detail/Detail";

export const routes = () => {
    return(
        /**
         * Implementamos nuestro componente layput que trae la estructura basica de toda la app y renderiza los componentes de cada ruta respectiva
         */
        <Layout>
            <Routes>
                {
                    /**
                     * Creamos las rutas respectivas para el funcionamiento de la app
                     * La ruta /items/:id recibe como parametro el id de el producto consultado
                     */
                }
                <Route path="/"  element={<Home />}/>
                <Route path="/items"  element={<Search />} />
                <Route path="/items/:id"  element={<Detail />} />
            </Routes>
        </Layout>
    )
}