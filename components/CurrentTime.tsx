import React, { FC } from "react";
import { WeatherEntryProps } from './WeatherEntry';

export const CurrentTime = ({ weather }: WeatherEntryProps) => {

  const current = new Date();
  const time = current.getHours().toLocaleString() + ':' + current.getMinutes().toLocaleString();

  return (
    <div className='text-2xl pb-2'>{time}</div>
  )
}