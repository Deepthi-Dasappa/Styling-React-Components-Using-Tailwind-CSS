import { useState } from "react";

let labelCss = `block mb-3 font-medium uppercase tracking-normal`;
let inputCss = `width py-1 px-1 text-black leading-3 rounded-sm outline-none `;

export default function AuthInputs() {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    submitted: false,
  });

  function handleInputChange(fieldName, inputValue) {
    setInputData((previousData) => {
      return { ...previousData, [fieldName]: inputValue };
    });
  }

  function handleLogin(data) {
    setInputData((previousData) => {
      return { ...previousData, submitted: true };
    });
  }

  const emailValid = inputData.submitted && !inputData.email.includes("@");
  const passwordValid =
    inputData.submitted && inputData.password.trim().length < 6;

  return (
    <div
      id="auth-inputs"
      className="w-72 md:w-full max-w-md p-8 -my-5 mx-auto rounded-md shadow-authInputBoxShadow bg-authInputBackground text-white"
    >
      <div className="flex flex-col gap-8 mb-7">
        <p className="flex flex-col">
          {/* <label className={label ${!emailValid ? "" : "invalid"}`}> */}
          <label
            className={`${labelCss} ${
              !emailValid ? "text-slate-400" : "text-red-400"
            } `}
          >
            Email
          </label>
          <input
            type="email"
            required
            onChange={(event) => handleInputChange("email", event.target.value)}
            // className={`input ${!emailValid ? undefined : "invalid"}`}
            className={`${inputCss} ${
              !emailValid ? "bg-slate-200" : "bg-red-200"
            } `}
          />
        </p>
        <p className="flex flex-col">
          {/* <label className={`label ${!passwordValid ? "" : "invalid"}`}> */}
          <label
            className={`${labelCss} ${
              !passwordValid ? "text-slate-400" : "text-red-400"
            } `}
          >
            Password
          </label>
          <input
            type="password"
            required
            onChange={(event) => {
              handleInputChange("password", event.target.value);
            }}
            // className={`input ${!passwordValid ? undefined : "invalid"}`}
            className={`${inputCss} ${
              !passwordValid ? "bg-slate-200" : "bg-red-200"
            } `}
          />
        </p>
      </div>
      <div className="flex justify-end gap-6">
        <button
          className="cursor-pointer bg-none outline-none font-medium text-sm hover:text-orange-300"
          onClick={handleLogin}
        >
          Create a new account
        </button>
        <button
          className="cursor-pointer bg-slate-600 rounded-sm px-1 md:px-2 font-medium hover:bg-orange-400"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
