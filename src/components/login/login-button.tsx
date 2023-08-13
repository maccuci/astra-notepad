import { signIn } from "next-auth/react";
import GithubIcon from "../icons/github";
import GoogleIcon from "../icons/google";

const buttonStyles = {
  base: "mb-2 mr-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium transition-all focus:outline-none",
  github: "bg-[#24292F] text-white hover:-translate-y-0.5 hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500",
  google: "bg-sky-600 text-white hover:-translate-y-0.5 hover:bg-sky-700/90 focus:ring-4 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55",
};

const iconDictionary = {
  github: <GithubIcon />,
  google: <GoogleIcon />,
};

type Props = {
  type: "github" | "google";
  callbackUrl: string;
};

const LoginButton = ({ type, callbackUrl }: Props) => {
  const signInWithProvider = (provider: string) => {
    signIn(provider, { callbackUrl });
  };

  return (
    <button
      type="button"
      className={`${buttonStyles.base} ${buttonStyles[type]}`}
      onClick={() => signInWithProvider(type)}
    >
      {iconDictionary[type]}
      {`Continuar com ${type === "github" ? "Github" : "Google"}`}
    </button>
  );
};

export default LoginButton;
