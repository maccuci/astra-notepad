import LoginButton from "./login/login-button";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-3xl font-semibold text-white">
          Faça seu Login
        </h1>
        <div>
          <LoginButton type="github" callbackUrl="/" />
          <LoginButton type="google" callbackUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Login;
