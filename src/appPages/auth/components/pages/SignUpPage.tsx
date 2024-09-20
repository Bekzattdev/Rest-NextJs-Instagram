"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation } from "@/redux/api/auth";
import Link from "next/link";
import styles from "./DesignAuth.module.scss";
interface IFormInput {
  username: string;
  password: string;
  photo: string;
  email: string;
}

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const [signUpMutation] = useRegisterMutation();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const { data: responseData, error } = await signUpMutation(data);
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
    <section className={styles["auth"]}>
      <h1>Instagram</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="username"
          type="text"
          {...register("username", { required: true })}
        />
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
          type="password"
          {...register("password", { required: true })}
        />
        <input placeholder="photo URL" type="text" {...register("photo")} />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <Link href="/auth/sign-in">У вас уже есть аккаунт?</Link>
    </section>
  );
};

export default SignUpPage;
