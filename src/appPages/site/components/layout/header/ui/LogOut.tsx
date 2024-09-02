import { useLogoutMutation } from "@/redux/api/auth";
import styles from "./LogOut.module.scss";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const [logOut, { isLoading }] = useLogoutMutation();
  const router = useRouter();
  return (
    <button
      className={styles.button}
      onClick={() => {
        logOut();
        setTimeout(() => {
          router.push("/aut/sign-in");
        }, 300);
      }}
      disabled={isLoading}
    >
      {"Logout"}
    </button>
  );
};

export default LogoutButton;
