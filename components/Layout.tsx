import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: IProps): JSX.Element => {
  return <main className='container fluid'>{children}</main>;
};
