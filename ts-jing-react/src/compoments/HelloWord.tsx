import React from 'react';

interface IProps {
  message: string;
}
export const HelloWord = (props: IProps) => {
  return (
    <h2>{props.message}</h2>
  );
}