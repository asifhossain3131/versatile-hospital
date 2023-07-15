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
            <div className='grid grid-cols-2 lg:grid-cols-4 mx-12'>
{
    specialDoctors.splice(0,8).map((doctor:any)=>
    <SpecialDoctorsCard key={doctor.id} doctor={doctor}></SpecialDoctorsCard>
    )
}
            </div>
        </div>
    );
};

export default HomeSpecialDoctors;