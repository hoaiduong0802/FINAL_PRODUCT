import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MODAL_TYPES } from "../../constants/modaltypes";
import {
  handleCloseModal,
  handleShowModal,
} from "../../store/reducer/authReducer";
import cn from "../../utils/cn";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthenModalContainer = styled.div`
  display: ${(props) => (props?.isShow ? "block" : "none")};
`;
const AuthenModal = () => {
  // const { showedModal, handleShowModal, handleCloseModal } = useAuthContext();
  // const _onTabChange = (e, tab) => {
  // 	e?.stopPropagation();
  // 	e?.preventDefault();
  // 	handleShowModal?.(tab);
  // };
  const dispatch = useDispatch();
  const { showedModal } = useSelector((state) => state.auth);
  const  auth = useSelector((state) => state.auth);
  const _onTabChange = (e, tab) => {
    e?.stopPropagation();
    e?.preventDefault();
    dispatch(handleShowModal(tab));
  };

  const _onCloseModal = (e) => {
    e?.stopPropagation();
    e?.preventDefault();
    dispatch(handleCloseModal());
  };

  console.log('showedModal', showedModal, auth)
  return (
    <>
      {/* Sign in / Register Modal */}
      <AuthenModalContainer
        // className="modal fade"
        className={cn("modal", { "fade show": !!showedModal })}
        isShow={!!showedModal}
        // id="signin-modal"
        // tabIndex={-1}
        // role="dialog"
        // aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                // data-dismiss="modal"
                // aria-label="Close"
                onClick={_onCloseModal}
              >
                <span aria-hidden="true">
                  <i className="icon-close" />
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul
                    className="nav nav-pills nav-fill nav-border-anim"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        // className="nav-link active"
                        className={cn("nav-link", {
                          active: showedModal === MODAL_TYPES.login,
                        })}
                        // id="signin-tab"
                        // data-toggle="tab"
                        href="#signin"
                        onClick={(e) => _onTabChange(e, MODAL_TYPES.login)}
                        // role="tab"
                        // aria-controls="signin"
                        // aria-selected="true"
                      >
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        // className="nav-link"
                        className={cn("nav-link", {
                          active: showedModal === MODAL_TYPES.register,
                        })}
                        // id="register-tab"
                        // data-toggle="tab"
                        href="#register"
                        onClick={(e) => _onTabChange(e, MODAL_TYPES.register)}
                        // role="tab"
                        // aria-controls="register"
                        // aria-selected="false"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div
                      className="tab-pane fade show active"
                      // id="signin"
                      // role="tabpanel"
                      // aria-labelledby="signin-tab"
                    >
                      {showedModal === MODAL_TYPES.login && <LoginForm />}
                      {showedModal === MODAL_TYPES.register && <RegisterForm />}
                      <div className="form-choice">
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>
                          {/* End .col-6 */}
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>
                          {/* End .col-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .form-choice */}
                    </div>
                    {/* .End .tab-pane */}
                    <div
                      className="tab-pane fade"
                      id="register"
                      role="tabpanel"
                      aria-labelledby="register-tab"
                    >
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="register-email">
                            Your email address *
                          </label>
                          <input
                            type="email"
                            className="form-control input-error"
                            id="register-email"
                            name="register-email"
                            required
                          />
                          <p className="form-error">
                            Please fill in this field
                          </p>
                        </div>
                        {/* End .form-group */}
                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            name="register-password"
                            required
                          />
                        </div>
                        {/* End .form-group */}
                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right" />
                          </button>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="register-policy"
                              required
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="register-policy"
                            >
                              I agree to the
                              <a href="privacy-policy.html">privacy policy</a> *
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .form-footer */}
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>
                          {/* End .col-6 */}
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>
                          {/* End .col-6 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .form-choice */}
                    </div>
                    {/* .End .tab-pane */}
                  </div>
                  {/* End .tab-content */}
                </div>
                {/* End .form-tab */}
              </div>
              {/* End .form-box */}
            </div>
            {/* End .modal-body */}
          </div>
          {/* End .modal-content */}
        </div>
        {/* End .modal-dialog */}
      </AuthenModalContainer>
      {/* End .modal */}
      {!!showedModal && (
        <div className="modal-backdrop fade show" onClick={_onCloseModal}></div>
      )}
    </>
  );
};

export default AuthenModal;
