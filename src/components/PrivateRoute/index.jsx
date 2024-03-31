import React from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({redirectPath = "/"}) => {
    // const {handleShowModal} = useAuthContext();
    // if(!!!tokenMethod.get()){
    //     handleShowModal(MODAL_TYPES.login);
    //     return <Navigate to={redirectPath} />
    // }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
