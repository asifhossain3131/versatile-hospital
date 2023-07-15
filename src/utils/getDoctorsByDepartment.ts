import { getDoctorsByDepartmentName } from '@/services/allDoctors.service';
import React, { cache } from 'react';
import 'server-only'

const getDoctorsByDepartment = cache((department:string) => {
    return getDoctorsByDepartmentName(department)
   });

export default getDoctorsByDepartment;