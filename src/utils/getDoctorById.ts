import { getDoctorByIdFromdb } from '@/services/allDoctors.service';
import React, { cache } from 'react';
import 'server-only'

const getDoctorById = (id:string) => {
return getDoctorByIdFromdb(id)
};

export default getDoctorById;