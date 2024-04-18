import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { authService } from "../../services/authServices";
import { message } from "antd";
import Input from "../../components/Input";

const ChangePass = () => {
  const { profile } = useSelector((store) => store.auth);
  const newPassword = useRef({});
  const password = useRef({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  newPassword.current = watch("newPassword", "");
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const res = await authService.updateProfile({ ...profile, ...data });
      if (res.status === 200) {
        message.success("Update success");
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="tab-pane fade active show">
      <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          label="Current password (leave blank to leave unchanged)"
          defaultValue={null}
          {...register("password", {
            required: "Please enter the old password",
          })}
          error={errors?.password?.message || ""}
        />

        <Input
          type="password"
          label="New password (leave blank to leave unchanged)"
          defaultValue={null}
          {...register("newPassword", {
            validate: (value) =>
              value !== password.current ||
              "That's would be different with old password",
          })}
        />

        <Input
          type="password"
          label="Confirm new password"
          defaultValue={null}
          error={errors?.cpassword?.message || ""}
          {...register("cpassword", {
            validate: (value) =>
              value === newPassword.current ||
              "New password and Old password not as same",
          })}
        />

        <button className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-light"></i>
        </button>
      </form>
    </div>
  );
};

export default ChangePass;
