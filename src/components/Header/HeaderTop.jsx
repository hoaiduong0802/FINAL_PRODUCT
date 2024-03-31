import React from "react";
import tokenMethod from "../../utils/tooken";
import { useAuthContext } from "../../context/AuthContext";

const HeaderTop = () => {
  const { handleShowModal, handleLogout, profile } = useAuthContext();
  const { firstname, email } = profile || {};
  const _onShowAuthModal = (e) => {
    e?.prevenDefault();
    e?.stopPropagation();
    handleShowModal?.(MODAL_TYPES.login);
  };
  const _onSignOut = (e) => {
    e?.prevenDefault();
    handleLogout();
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
                    Login | Resgister{" "}
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              {/* Logged In */}
              <ul className="top-menu">
                <li>
                  <a href="#" className="top-link-menu">
                    <i className="icon-user" />
                    Thai Nguyen{"{"}" "{"}"}
                  </a>
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <a href="dashboard.html">Account Details</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Your Orders</a>
                        </li>
                        <li>
                          <a href="dashboard.html">
                            Wishlist <span>(3)</span>
                          </a>
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
