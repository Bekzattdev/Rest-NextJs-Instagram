"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "@/redux/api/auth";
import Link from "next/link";

interface IFormInput {
  email: string;
  password: string;
}

const SignInPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [loginMutation] = useLoginMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { data: responseData, error } = await loginMutation(data);
      if (responseData) {
        localStorage.setItem("tokens", JSON.stringify(responseData));
        window.location.reload();
      } else {
        const errorMessage = error as { data: { message: string } };
        alert(errorMessage.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <h1>Sign-In Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="email"
          type="text"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        <input
          placeholder="password"
          type="text"
          {...register("password", { required: true })}
        />
        <button type="submit">Вход</button>
      </form>
      <Link href="/auth/sign-up">У вас нету аккаунта?</Link>
      <Link href="/auth/forgot">Забыли пароль?</Link>
    </section>
  );
};

export default SignInPage;
