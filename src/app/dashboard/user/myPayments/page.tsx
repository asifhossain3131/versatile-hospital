import { getPayments } from '@/services/payments.service';
import React from 'react';
export const revalidate=0

const MyPaymentsPage = async() => {
    const payments=await getPayments()
     const duesPayments=payments?.paymentsDues
     const successfulPayments=payments?.paymentsSuccessul
    return (
        <div>
            
        </div>
    );
};

export default MyPaymentsPage;