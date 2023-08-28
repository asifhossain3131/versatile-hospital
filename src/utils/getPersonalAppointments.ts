import { getPersonalAppointmentsFromDB } from '@/services/doctorAppointment.service';
import React, { cache } from 'react';
import 'server-only'

const getPersonalAppointments = cache(() => {
    return getPersonalAppointmentsFromDB()
})
  

export default getPersonalAppointments;