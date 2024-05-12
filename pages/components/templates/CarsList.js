import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";
import Card from "../module/Card";


function CarsList({ data }) {
  console.log(data);
  const router = useRouter()
  const backHandler = () => {
    router.back()
  }

  return (
    <div className=" h-full w-full">
      <div onClick={backHandler} className="flex w-fit p-1 cursor-pointer  m-10 rounded-md place-items-center text-2xl ">
        <IoMdArrowRoundBack className="text-white mr-1  bg-blue-500 p-0.5  rounded-2xl " />
        <p>Back</p>
      </div>

      <div className="flex flex-wrap justify-center">
        {
          data.map((item) => <Card key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}

export default CarsList