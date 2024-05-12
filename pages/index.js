import carsData from "@/data/carsData";
import SearchBar from "./components/module/SearchBar";
import Categories from "./components/module/Categories";
import CarsPage from "./components/templates/CarsPage";
import header from '/public/images/header.jpeg'
import Link from "next/link";

export default function Index() {

  const cars = carsData.slice(0, 4)
  return (
    <div
      className={`flex flex-wrap min-h-screen flex-col items-center justify-between p-24 `}
    >
    <div className="text-6xl text-blue-600 font-extrabold p-2 px-5 m-1 rounded ">
    <p>Find Your Perfect Car</p>
    </div>
      <SearchBar />
      <Categories />
      <CarsPage data={cars} />
      <Link href="/cars"
        className="p-2 rounded bg-[#e0ebff] text-blue-600 hover:bg-opacity-55 text-center w-96 border border-blue-300">
        See All Cars
      </Link>
    </div>
  );
}
