import carsData from "@/data/carsData"
import { useRouter } from "next/router"
import Card from "../components/module/Card";
import { IoMdArrowRoundBack } from "react-icons/io";
import CarsList from "../components/templates/CarsList";

function FilteredCar() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    const filterData = carsData.filter((item) => item.price >= min && item.price <= max)
    console.log(filterData);

    const backHandler = () => {
        router.back()
    }
    if (!filterData.length) {
        return <div className="flex flex-col justify-center bg-red-500 place-items-center text-3xl text-white  m-10 text-center p-10 rounded ">
            <h1 className=" p-1.5"> NotFound!</h1>
            <div onClick={backHandler} className="flex border w-fit mt-3 hover:opacity-60 p-1.5 cursor-pointer   rounded-md place-items-center text-2xl ">
                <IoMdArrowRoundBack className="text-white mr-1  bg-blue-500 p-0.5  rounded-2xl " />
                <p>Back</p>
            </div>
        </div>
    }

    return <CarsList data={filterData} />
}

export default FilteredCar