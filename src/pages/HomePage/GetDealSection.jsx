import React from "react";
import { useForm } from "react-hook-form";
import { MESSAGE } from "../../constants/message";
import { REGEX } from "../../constants/regex";

const GetDealSection = ({ handleSubscribeDeal }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: "",
  });

  const _onSubmit = (value) => {
    handleSubscribeDeal?.(value, reset);
  };

  return (
    <div className="container">
      <div
        className="cta cta-separator cta-border-image cta-half mb-0"
        style={{
          // nhớ thêm / vào image
          backgroundImage: "url(/assets/images/demos/demo-3/bg-2.jpg)",
        }}
      >
        <div className="cta-border-wrapper bg-white">
          <div className="row">
            <div className="col-lg-6">
              {/* Social media các bạn xử lý tuỳ ý */}
            </div>
            <div className="col-lg-6">
              <div className="cta-wrapper text-center">
                <h3 className="cta-title">Get the Latest Deals</h3>
                <p className="cta-desc">
                  and <br />
                  receive <span className="text-primary">$20 coupon</span> for
                  first shopping{" "}
                </p>
                <form onSubmit={handleSubmit(_onSubmit)}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email Address"
                      // aria-label="Email Adress"
                      {...register("email", {
                        required: MESSAGE.required,
                        pattern: {
                          value: REGEX.email,
                          message: MESSAGE.email,
                        },
                      })}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary btn-rounded"
                        type="submit"
                      >
                        <i className="icon-long-arrow-right" />
                      </button>
                    </div>
                  </div>
                  <p
                    className="form-error"
                    style={{
                      textAlign: "left",
                      minHeight: 23,
                    }}
                  >
                    {errors?.email?.message || ""}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDealSection;
