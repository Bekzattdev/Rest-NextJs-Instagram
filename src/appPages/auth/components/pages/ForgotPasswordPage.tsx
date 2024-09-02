"use client";
import { useForgotMutation } from "@/redux/api/auth";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFromForgotPassword {
  email: string;
  frontEndUrl: string;
}

const ForgotPasswordPage = () => {
  const [forgotMutation] = useForgotMutation();
  const { register, handleSubmit } = useForm<IFromForgotPassword>();

  const onSubmit: SubmitHandler<IFromForgotPassword> = async (data) => {
    const newData = {
      email: data.email,
      frontEndUrl: window.location.href,
    };
    const { data: responseData, error } = await forgotMutation(newData);
    if (responseData) {
      alert(responseData.message);
    } else {
      const messageError = error as { data: { message: string } };
      alert(messageError.data.message);
    }
  };

  return (
    <div>
      <h1>ForgotPasswordPage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="email"
          type="text"
          {...register("email", { required: true })}
        />
        <button type="submit">Отправить письмо сброса</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
