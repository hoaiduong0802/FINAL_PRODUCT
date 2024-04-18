import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MODAL_TYPES } from "../../constants/modaltypes";
import { handleLogout, handleShowModal } from "../../store/reducer/authReducer";
import tokenMethod from "../../utils/token";
import { PATHS } from "@/constants/paths";

const HeaderTop = () => {
  // const { handleShowModal, handleLogout, profile } = useAuthContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  console.log('profile', profile)
  const { firstName, email } = profile || {};
  const _onShowAuthModal = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    // handleShowModal?.(MODAL_TYPES.login);
    dispatch(handleShowModal(MODAL_TYPES.login));
  };
  const _onSignOut = (e) => {
    e.preventDefault();
    // handleLogout();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:0989596912">
            <i className="icon-phone" /> Hotline: 098 9596 912{" "}
          </a>
        </div>
        <div className="header-right">
          {!!!tokenMethod.get() ? (
            <>
              {/* Not LogIn */}
              <ul className="top-menu top-link-menu">
                <li>
                  <a
                    href="#signin-modal"
                    data-toggle="modal"
                    className="top-menu-login"
                    onClick={_onShowAuthModal}
                  >
                    <i className="icon-user" />
                    Login | Resgister
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              {/* Logged In */}
              <ul className="top-menu">
                <li>
                  <Link to={PATHS.PROFILE.INDEX} className="top-link-menu">
                    <i className="icon-user" />
                    {profile?.firstName == "" ? profile?.email : profile?.firstName }
                  </Link>
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <Link to={PATHS.PROFILE.INDEX}>Account Details</Link>
                        </li>
                        <li>
                          <Link to={PATHS.PROFILE.PROFILE_ORDER}>Your Orders</Link>
                        </li>
                        <li>
                          <Link to={PATHS.PROFILE.PROFILE_WISHLIST}>
                            Wishlist <span>{profile?.whiteList}</span>
                          </Link>
                        </li>
                        <li>
                          <a href="#" onClick={_onSignOut}>
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
