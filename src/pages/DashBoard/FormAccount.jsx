import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAddress from "../../hooks/useAddress";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/Input";
import { REGEX } from "../../constants/regex";
import { authService } from "../../services/authServices";
import { Select, message } from "antd";
import { handleGetProfile } from "../../store/reducer/authReducer";
import dayjs from "dayjs";
import { MESSAGE } from "../../constants/message";
import { removeAccents } from "../../utils/format";

const FormAccount = () => {
  const { profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    provinces,
    districts,
    wards,
    provinceId,
    districtId,
    wardId,
    handleProvinceChange,
    handleDistrictChange,
    handleWardChange,
  } = useAddress();

  const { firstName, phone, email, province, district, ward, street } =
    profile || {};

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    control,
    formState: { errors },
  } = useForm();

  const _onProvinceChange = (changeId) => {
    handleProvinceChange?.(changeId);
    reset({
      ...getValues(),
      province: changeId,
      district: undefined,
      ward: undefined,
    });
  };

  const _onDistrictChange = (changedId) => {
    handleDistrictChange?.(changedId);
    reset({
      ...getValues(),
      district: changedId,
      ward: undefined,
    });
  };

  const _onWardChange = (changedId) => {
    handleWardChange?.(changedId);
    reset({
      ...getValues(),
      ward: changedId,
    });
  };
  
  const onSubmit = async (data) => {
    const _payload = {
      ...data,
      lastName: profile?.lastName || profile?.firstName,
    };
    try {
      const res = await authService.updateProfile(_payload);
      if (res.status == 200) {
        message.success("Update success");
        dispatch(handleGetProfile());
      }
    } catch (error) {
      message.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (!profile) return;
    reset?.({
      firstName,
      phone,
      email,
      province,
      district,
      ward,
      street,
      birthday: profile?.birthday
        ? dayjs(profile?.birthday || "01-01-2000")
            .format("YYYY/MM/DD")
            .replaceAll("/", "-")
        : "",
    });
    handleProvinceChange?.(province);
    handleDistrictChange?.(street);
    handleWardChange?.(ward);
  }, [profile]);

  return (
    <div className="tab-pane fade show active">
      <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <Input
              type="text"
              required
              label="Name"
              {...register("firstName", {
                required: "Please enter your name",
              })}
              error={errors?.firstName?.message || ""}
            />
          </div>
          <div className="col-sm-6">
            <Input
              type="email"
              required
              disabled
              label="Email address"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: REGEX.phone,
                  message:
                    "Please enter phone number with out special characters",
                },
              })}
              error={errors?.email?.message || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <Input
              type="text"
              required
              label="Phone number"
              {...register("phone", {
                required: "Please enter your phone number",
              })}
              error={errors?.phone?.message || ""}
            />
          </div>
          <div className="col-sm-6">
            <Input
              type="date"
              className="form-control"
              required
              label="Ngày sinh"
              {...register("birthday", {
                required: "Please enter your birth day",
              })}
              error={errors?.birthday?.message || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label>Province/City *</label>
            <Controller
              name="province"
              control={control}
              rules={{ required: MESSAGE.required }}
              render={({ formState: { errors } }) => {
                return (
                  <>
                    <Select
                      className="customSelect select-custom"
                      suffixIcon={<></>}
                      showSearch
                      placeholder="Please select Province/City"
                      options={provinces}
                      value={provinceId}
                      optionFilterProp="children"
                      onChange={_onProvinceChange}
                      filterOption={(input, option) =>
                        removeAccents(option?.label ?? "")
                          .toLowerCase()
                          .includes(removeAccents(input.toLowerCase()))
                      }
                    />
                    <p className="form-error" style={{ minHeight: 23 }}>
                      {errors?.province?.message || ""}
                    </p>
                  </>
                );
              }}
            />
          </div>
          <div className="col-sm-4">
            <label>District/Town *</label>
            <Controller
              name="province"
              control={control}
              rules={{ required: MESSAGE.required }}
              render={({ formState: { errors } }) => {
                return (
                  <>
                    <Select
                      className="customSelect select-custom"
                      suffixIcon={<></>}
                      showSearch
                      placeholder="Please select Province/City"
                      options={districts}
                      value={districtId}
                      optionFilterProp="children"
                      onChange={_onProvinceChange}
                      filterOption={(input, option) =>
                        removeAccents(option?.label ?? "")
                          .toLowerCase()
                          .includes(removeAccents(input.toLowerCase()))
                      }
                    />
                    <p className="form-error" style={{ minHeight: 23 }}>
                      {errors?.district?.message || ""}
                    </p>
                  </>
                );
              }}
            />
          </div>
          <div className="col-sm-4">
            <label>Ward *</label>
            <Controller
              name="province"
              control={control}
              rules={{ required: MESSAGE.required }}
              render={({ formState: { errors } }) => {
                return (
                  <>
                    <Select
                      className="customSelect select-custom"
                      suffixIcon={<></>}
                      showSearch
                      placeholder="Please select Province/City"
                      options={wards}
                      value={wardId}
                      optionFilterProp="children"
                      onChange={_onProvinceChange}
                      filterOption={(input, option) =>
                        removeAccents(option?.label ?? "")
                          .toLowerCase()
                          .includes(removeAccents(input.toLowerCase()))
                      }
                    />
                    <p className="form-error" style={{ minHeight: 23 }}>
                      {errors?.ward?.message || ""}
                    </p>
                  </>
                );
              }}
            />
          </div>
        </div>
        <Input
          type="text"
          required
          {...register("street", {
            required: "Please enter street name",
          })}
          label="Street address"
          error={errors?.street?.message || ""}
        />

        <button type="submit" className="btn btn-outline-primary-2">
          <span>SAVE CHANGES</span>
          <i className="icon-long-arrow-right" />
        </button>
      </form>
    </div>
  );
};

export default FormAccount;
