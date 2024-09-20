"use client";
import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useResetPasswordMutation } from "@/redux/api/auth";
import styles from "./DesignAuth.module.scss";
interface IFormResetPassword {
  newPassword: string;
}

const ResetPasswordForm = () => {
  const [resetPasswordMutation] = useResetPasswordMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormResetPassword>();

  const onSubmit: SubmitHandler<IFormResetPassword> = async (data) => {
    const newData = {
      token: token!,
      newPassword: data.newPassword,
    };
    const { data: responseData, error } = await resetPasswordMutation(newData);
    if (responseData) {
      alert(responseData.message);
      router.push("/auth/sign-in");
    } else {
      const messageError = error as { data: { message: string } };
      alert(messageError.data.message);
    }
  };

  return (
    <div className={styles["auth"]}>
      <h1>Сброс пароля</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="new password"
          type="text"
          {...register("newPassword", { required: true })}
        />
        <button type="submit">Сбросить пароль</button>
      </form>
    </div>
  );
};

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
};

export default ResetPasswordPage;
