import React from 'react';
import SignUp from "./SignUp";
import { useState } from 'react';

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-8  sm:px-12 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-center text-3xl font-bold text-indigo-600 sm:text-4xl">Get started today</h1>
        {showSignUp ? (
          <SignUp />
        ) : (
          <form action="#" className="mb-0 mt-12 space-y-6 rounded-lg p-8 shadow-lg sm:p-12 lg:p-16">
            <p className="text-center text-lg font-medium">Sign in to your account</p>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-2 pe-16 text-lg shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-2 pe-16 text-lg shadow-sm"
                  placeholder="Enter password"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-8 py-4 text-lg font-medium text-white"
            >
              Sign in
            </button>

            <p className="text-center text-lg text-gray-500">
              No account?
              <p className="underline" onClick={handleSignUpClick}>Sign up</p>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;