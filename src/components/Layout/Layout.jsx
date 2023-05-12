/*
  Importo componente Header , que es un componente que esta en toda la aplicacion
*/
import { Header } from "../Header/Header"

/* 
  El componente acepta una prop llamada "children", que es una referencia a cualquier contenido que se encuentre dentro del componente "Layout".
*/
function Layout ({ children }){
  return (
    <>
        <Header/>
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout
