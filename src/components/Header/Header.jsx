import { SearchBar } from "../SearchBar/SearchBar"

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                <img src="../src/assets/images/Logo_ML.png" alt="" />
            </div>
            <SearchBar/>
        </div>
    </header>
  )
}
