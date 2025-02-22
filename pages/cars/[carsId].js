import { useRouter } from 'next/router'
import carsData from '@/data/carsData';
import CarsDetail from '../components/templates/CarsDetail';

function CarDetail() {
  const router = useRouter();
  const { carsId } = router.query;

  if (!carsId) {
    return <div>Car not found</div>;
  }

  const carDetails = carsData[parseInt(carsId) - 1];

  if (!carDetails) {
    return <div>Car not found</div>;
  }

  return <CarsDetail {...carDetails} />;
}

export default CarDetail