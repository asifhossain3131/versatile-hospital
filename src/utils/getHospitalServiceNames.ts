import { getHospitalServiesNamesFromDb } from '@/services/services.service';
import React, { cache } from 'react';
import 'server-only'

const getHospitalServiceNames = cache(() => {
    return getHospitalServiesNamesFromDb()
})

export default getHospitalServiceNames;