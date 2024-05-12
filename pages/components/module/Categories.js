import Link from "next/link"
import Hatchback from "../icons/Hatchback"
import Sedan from "../icons/Sedan"
import Sport from "../icons/Sport"
import Suv from "../icons/Suv"

function Categories() {
    return (
        <div className="flex flex-wrap shadow-xl w-fit p-2 px-8 mt-5 mx-auto justify-center items-center rounded-xl bg-[#e0ebff] ">
            <Link href="/categories/sedan">
                <div className="flex place-items-center  justify-center m-1 p-3  rounded-md hover:bg-white ease-in-out">
                    <span className="mr-2">Sedan</span>
                    <Sedan />
                </div>
            </Link>

            <Link href="/categories/suv">
                <div className="flex place-items-center  justify-center m-1  p-3  rounded-md hover:bg-white ease-in-out">
                    <span className="mr-2">SUV</span>
                    <Suv />
                </div>
            </Link>

            <Link href="/categories/hatchback">
                <div className="flex place-items-center  justify-center m-1  p-3  rounded-md hover:bg-white ease-in-out">
                    <span className="mr-2">HatchBack</span>
                    <Hatchback />
                </div>
            </Link>

            <Link href="/categories/sport">
                <div className="flex place-items-center justify-center m-1  p-3  rounded-md hover:bg-white ease-in-out">
                    <span className="mr-2">Sport</span>
                    <Sport />
                </div>
            </Link>
        </div>

    )
}

export default Categories