import Link from "next/link";
import { SiSpeedypage } from "react-icons/si";

function Layout({ children }) {
    return (
        <div className="min-w-screen">
            <header className=" flex flex-wrap w-screen p-5 bg-[#266ffb] text-white justify-between">

                <div className=" self-center  py-2  font-normal  text-lg ">
                    <ul className="flex flex-wrap w-full  self-center py-2 font-normal place-items-center">
                        <li className="ml-2  ease-in-out">
                            <Link href="/">Home</Link>
                        </li>
                        <li className=" ml-2  ease-in-out">
                            <Link href="/cars">Cars</Link>
                        </li>
                        <li className=" ml-2  ease-in-out">
                            <Link href="/">About Us</Link>
                        </li>
                        <li className=" ml-2  ease-in-out">
                            <Link href="/">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap">                
                <h2 className="flex place-items-center font-semibold text-2xl">
                    Best Car | 
                    {/* <FaCar className="ml-2 text-2xl " /> */}
                </h2>
                    <p className="flex place-items-center font-normal ml-2 text-lg "> Fast Sell & Buy Your Car <SiSpeedypage className="ml-2 text-2xl text-[#ff1a1a]" /></p>
                </div>


            </header>

            <div>
                {children}
            </div>

            <footer className="w-full mt-52 bg-[#266ffb] text-white text-center p-2">
                Developed By HsN - Ashrafi &copy;
            </footer>

        </div>

    )
}

export default Layout