import { useLogoutMutation } from "@/redux/api/auth";
import styles from "./LogOut.module.scss";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [logOut, { isLoading }] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logOut().unwrap();
      localStorage.removeItem("tokens");
      router.push("/auth/sign-in");
    } catch (error) {
      console.error("Ошибка из системы:", error);
    }
  };

  return (
    <button
      className={styles.button}
      onClick={handleLogout}
      disabled={isLoading}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
