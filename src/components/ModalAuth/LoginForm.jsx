import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "antd/es/form/Form";
import ComponentLoading from "../ComponentLoading";
import Input from "../Input";
import Button from "../Button";

const LoginForm = () => {
  const { handleLogin } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    if (data) {
      setLoading(true);
      handleLogin?.(data, () => {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ position: "relative" }}>
      {loading && <ComponentLoading />}
      <Input
        label="Username or email address"
        required
        {...register("email", {
          required: MESSAGE.required,
          pattern: {
            value: REGEX.email,
            message: MESSAGE.email,
          },
        })}
        error={error?.email?.message || ""}
      />
      <Input
        label="Password"
        required
        {...register("password", {
          required: MESSAGE.required,
        })}
        error={error?.password?.message || ""}
      />
      <div className="form-footer">
        <Button type="submit" variant="outline">
          <span>LOG IN</span>
          <i className="icon-long-arrow-light" />
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
