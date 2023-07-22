import { getSingleDiagnosticServiceFromDb } from '@/services/services.service';
import React, { cache } from 'react';
import 'server-only'

const getSingleDiagnosticByDiagnosticName = cache((diagnosticName:string) => {
 return getSingleDiagnosticServiceFromDb(diagnosticName)
})

export default getSingleDiagnosticByDiagnosticName;