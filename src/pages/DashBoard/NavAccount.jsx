import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/reducer/authReducer";
import { PATHS } from "../../constants/paths";

const NavAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _onSignOut = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };
  return (
    <aside className="col-md-4 col-lg-3">
      <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            end
            to={PATHS.PROFILE.INDEX}
            // id="tab-account-link"
            // data-toggle="tab"
            // href="#tab-account"
            // role="tab"
            // aria-controls="tab-account"
            // aria-selected="false"
          >
            Account Details
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            end
            to={PATHS.PROFILE.PROFILE_ORDER}
            // id="tab-orders-link"
            // data-toggle="tab"
            // href="#tab-orders"
            // role="tab"
            // aria-controls="tab-orders"
            // aria-selected="false"
          >
            Orders
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            end
            to={PATHS.PROFILE.PROFILE_ADDRESS}
            // id="tab-address-link"
            // data-toggle="tab"
            // href="#tab-address"
            // role="tab"
            // aria-controls="tab-address"
            // aria-selected="false"
          >
            Adresses
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            end
            to={PATHS.PROFILE.PROFILE_WISHLIST}
            // id="tab-wishlist-link"
            // data-toggle="tab"
            // href="#tab-wishlist"
            // role="tab"
            // aria-controls="tab-wishlist"
            // aria-selected="false"
          >
            Wishlist
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            end
            to={PATHS.PROFILE.PROFILE_CHANGE_PASS}
            // id="tab-wishlist-link"
            // data-toggle="tab"
            // href="#tab-wishlist"
            // role="tab"
            // aria-controls="tab-wishlist"
            // aria-selected="false"
          >
            Change password
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={_onSignOut}>
            Sign Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default NavAccount;
