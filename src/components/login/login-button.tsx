import { signIn } from "next-auth/react";
import GithubIcon from "../icons/github";
import GoogleIcon from "../icons/google";

type Props = {
  type: string;
  callbackUrl: string;
};

const LoginButton = ({ type, callbackUrl }: Props) => {
  return (
    <div>
      {type === "github" && (
        <button
          type="button"
          className="mb-2 mr-2 inline-flex items-center rounded-lg bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500"
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          <GithubIcon />
          Continuar com Github
        </button>
      )}
      {type === "google" && (
        <button
          type="button"
          className="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex items-center rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-sky-700/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
          onClick={() => signIn("google", { callbackUrl: callbackUrl })}
        >
          <GoogleIcon />
          Continuar com Google
        </button>
      )}
    </div>
  );
};

export default LoginButton;
