import React from 'react';
import { useLoading } from '../../hooks/useLoading';
import classes from './loading.module.css';
import MoonLoader  from 'react-spinners/MoonLoader'
export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.items}>
      <MoonLoader color="red" />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}