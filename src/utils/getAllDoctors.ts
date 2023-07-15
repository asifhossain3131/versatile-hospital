import { getAllDoctorsFromDb } from '@/services/allDoctors.service';
import React, { cache } from 'react';
import 'server-only'

const getAllDoctors = cache(() => {
   return getAllDoctorsFromDb()
})

export default getAllDoctors;