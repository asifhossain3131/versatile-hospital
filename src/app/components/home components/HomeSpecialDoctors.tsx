import Link from 'next/link';
import PrimaryButton from '../buttons/PrimaryButton';
import SpecialDoctorsCard from '../cards/SpecialDoctorsCard';
import SectionTitle from '../section title/SectionTitle';
import getAllDoctors from '@/utils/getAllDoctors';
export const revalidate=false

const HomeSpecialDoctors = async() => {
const allDoctors=await getAllDoctors()
const specialDoctors=allDoctors.filter((specialDoctor:any)=>specialDoctor.rank==='Senior')
    return (
        <div>
            <SectionTitle title='special consultants' subtitle='Over 50 multi-disciplinary specialists having higher degree and experience'></SectionTitle>
            <div className='grid grid-cols-2 lg:grid-cols-4 mx-12 gap-4'>
{
    specialDoctors.splice(0,8).map((doctor:any)=> 
  <Link  key={doctor._id} href={`/findDoctors/${doctor?.department}/${doctor?._id}`}><SpecialDoctorsCard doctor={JSON.parse(JSON.stringify(doctor))}></SpecialDoctorsCard></Link>
    )
}
            </div>
            <div className='text-center mx-auto my-8'>
               <Link href={'/findDoctors'}> <PrimaryButton title='Meet all consultants'></PrimaryButton></Link>
            </div>
        </div>
    );
};

export default HomeSpecialDoctors;