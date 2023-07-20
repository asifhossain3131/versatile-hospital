import { getDiagnosticServiesNamesFromDb } from '@/services/services.service';
import React, { cache } from 'react';
import 'server-only'

const getDiagnosticNames = cache(() => {
    return getDiagnosticServiesNamesFromDb()
})

export default getDiagnosticNames;