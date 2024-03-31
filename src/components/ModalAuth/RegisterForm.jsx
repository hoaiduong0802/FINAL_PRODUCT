import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { PATHS } from "../../constants/paths";
import { Link } from "react-router-dom";
import ComponentLoading from "../ComponentLoading";
import Input from "../Input";
import Button from "../Button";

const RegisterForm = () => {
  const { handleRegister } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    if (data) {
      setLoading(true);
      handleRegister?.(data, () => {
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
        label="Your email address"
        required
        {...register("email", {
          required: MESSAGE.required,
          pattern: {
            value: REGEX.email,
            message: MESSAGE.email,
          },
        })}
        error={errors?.email?.message || ""}
      />
      <Input
        label="Password"
        required
        type="password"
        {...register("password", {
          required: MESSAGE.required,
        })}
        error={errors?.password?.message || ""}
      />
      <div className="form-footer">
        <Button type="submit" variant="outline">
          <span>SIGN UP</span>
          <i className="icon-long-arrow-right"></i>
        </Button>
        <div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="register-policy"
              {...register("isAgree", {
                required: "Please agree with our policy!!!",
              })}
            />
            <label className="custom-control-label" htmlFor="register-policy">
              I agree to the{" "}
              <Link to={PATHS.PRIVATE_POLICY}>privacy policy</Link> *
            </label>
          </div>
          {errors?.isAgree?.message && (
            <p className="form-error">{errors.isAgree.message}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
