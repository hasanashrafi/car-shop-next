
import carsData from "@/data/carsData"
import CarsPage from "../components/templates/CarsPage"
import Categories from "../components/module/Categories"
import SearchBar from "../components/module/SearchBar"


function Details() {
    return (
        <div className=" w-6xl m-auto h-fit justify-center">
            <SearchBar/>
            <Categories />
            <CarsPage data={carsData} />
        </div>
    )
}

export default Details