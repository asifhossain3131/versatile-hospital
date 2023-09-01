import PaymentTable from './PaymentTable'
export const  revalidate=0

const MyPaymentsPage = async() => {
    return (
        <div>
            <h1 className='text-xl font-medium text-center mt-12'>All Payments List</h1>
        <PaymentTable></PaymentTable>
        </div>
    );
};

export default MyPaymentsPage;