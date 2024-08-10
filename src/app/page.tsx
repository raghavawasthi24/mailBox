"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push("/signup");
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  return (
    <div className="bg-black max-w-[1440px] h-screen m-auto text-white flex flex-col justify-between">
      <div className="w-full h-16 flex justify-center items-center border border-slate-800">
        <img
          src="https://app.reachinbox.ai/assets/logo.svg"
          alt="reachinbox-logo"
          className="h-7"
        />
        <h1 className="uppercase font-semibold ml-[5px]">ReachInbox</h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="m-auto w-[460px] h-auto md:h-[312px] bg-[#111214] rounded-2xl border border-gray-700 py-6 px-10">
          <div className="w-[380px] m-auto">
            <p className="text-xl mb-6 text-center">Create new account</p>
            <div className="rounded border border-gray-500 h-12 flex justify-center items-center gap-2.5 mb-12">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/760/951/non_2x/colourful-google-logo-in-dark-background-free-vector.jpg"
                alt="google-logo"
                className="bg-black rounded-full h-5 mt-0.5"
              />
              <Link
                href="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/home"
                className="text-sm text-gray-400 cursor-pointer"
              >
                Sign Up with Google
              </Link>
            </div>
            <p
              className="w-[195px] h-12 bg-[#4B63DD] rounded m-auto text-center pt-2.5 mb-6 cursor-pointer"
              onClick={handleCreateAccount}
            >
              <Link href="/signup">Create an account</Link>
            </p>
            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <span
                className="cursor-pointer text-blue-400"
                onClick={handleSignIn}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-8 flex justify-center items-center border border-slate-800">
        <p className="h-5 text-gray-600 text-xs">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
