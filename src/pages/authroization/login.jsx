import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const intitalState = {
  email: "",
  password: "",
};
const Authlogin = () => {
  const [formData, setFormatData] = useState(intitalState);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Work or not bro");

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        console.log("Chal ja bhai");
        
      } else {
        toast.error(data?.payload?.message);
      }
      console.log(data);
    });
  };
  return (
    <div className="mx-auto w-full  max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in your account
        </h1>
        <p className="mt-2 ">
          Don't have an account
          <Link
            className="font-medium text-primary hover:underline ml-2"
            to={"/auth/register"}
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormatData={setFormatData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Authlogin;
