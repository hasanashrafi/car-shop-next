import { useRouter } from 'next/router'
import carsData from '@/data/carsData';
import CarsDetail from '../components/templates/CarsDetail';


function CarDetail() {
    const router = useRouter();
    const { carsId } = router.query;
    const carDetails = carsData[carsId - 1]
  
    return <CarsDetail {...carDetails}/>
       
    
}

export default CarDetail