import React from 'react';

const useLeftTime = (deadline: Date,day:number): boolean=> {
    const currentDate = new Date();
    const DaysFromNow = new Date();
    DaysFromNow.setDate(currentDate.getDate() + day);
    const targetDate = new Date(deadline)

//    converting to utc time 
    const targetDateUTC = new Date(targetDate.toISOString().slice(0, 10));
    const DaysFromNowUTC = new Date(DaysFromNow.toISOString().slice(0, 10));
  
    return targetDateUTC.getTime() === DaysFromNowUTC.getTime();
  }

export default useLeftTime;