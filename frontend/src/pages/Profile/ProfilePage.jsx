import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import classes from './profilePage.module.css';
import Title from '../../components/Title/Title';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

export default function ProfilePage() {
    var userId
    const { user, updateProfile } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  
userId = user.id
  const submit = user => {
    user={
        id:userId,
        name:user.name,
        address:user.address
    }
    console.log(user)
    updateProfile(user);
  };

  return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Update Profile" />
        <form onSubmit={handleSubmit(submit)}>
          <Input
            defaultValue={user.name}
            type="text"
            label="Name"
            {...register('name', {
              required: true,
              minLength: 5,
            })}
            error={errors.name}
          />
          <Input
            defaultValue={user.address}
            type="text"
            label="Address"
            {...register('address', {
              required: true,
              minLength: 10,
            })}
            error={errors.address}
          />

          <Button type="submit" text="Update" backgroundColor="#009e84" />
        </form>

      </div>
    </div>
  );
}