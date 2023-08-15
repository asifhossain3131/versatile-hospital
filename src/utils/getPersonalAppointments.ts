import { getPersonalAppointmentsFromDB } from '@/services/doctorAppointment.service';
import React, { cache } from 'react';
import 'server-only'

const getPersonalAppointments = cache((email:string) => {
    return getPersonalAppointmentsFromDB(email)
})
  

export default getPersonalAppointments;