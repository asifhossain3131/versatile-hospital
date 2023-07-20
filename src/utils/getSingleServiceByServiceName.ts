import { getSingleServiceInfoFromDb } from '@/services/services.service';
import React from 'react';
import 'server-only'

const getSingleServiceByServiceName = (serviceName:string) => {
    return getSingleServiceInfoFromDb(serviceName)
};

export default getSingleServiceByServiceName;