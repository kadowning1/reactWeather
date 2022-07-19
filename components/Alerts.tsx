import React, { FC } from "react";

interface AlertProps {
  message: string
}

export function alertComponent(className: string): FC<AlertProps> {
  // eslint-disable-next-line react/display-name
  return ({ message }) =>
    message
      ? <div className={`alert ${className}`}>{message}</div>
      : null;
}

export const ErrorAlert = alertComponent('text-red-500 font-bold text-center text-xl p-5 rounded-lg');
export const WarningAlert = alertComponent('text-red-500 font-bold text-center text-xl p-5 rounded-lg');