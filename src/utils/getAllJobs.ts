import { getAllJobsFromDb } from '@/services/career.service';
import React, { cache } from 'react';
import 'server-only'

const getAllJobs = cache(() => {
    return getAllJobsFromDb()
})

export default getAllJobs;