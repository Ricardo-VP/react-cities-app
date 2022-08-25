import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { FcExport, FcOrganization } from "react-icons/fc";

export const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-primary">
          Cities <span className="text-neutral-content">App</span>{" "}
          <FcOrganization className="text-2xl ml-2" />
        </a>
      </div>
      {isAuthenticated && (
        <div className="flex-none">
          <span className="text-primary font-bold mr-2">Bienvenido,</span>
          <span className="text-secondary-content font-bold mr-2">
            {user?.given_name}
          </span>
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-circle avatar mr-3 mt-1"
            >
              <div className="w-10 rounded-full">
                <img src={user?.picture} />
              </div>
            </label>
            <div
              tabIndex="0"
              className="menu menu-compact dropdown-content mr-3 p-2 shadow rounded-box w-40 text-center"
            >
              <button className="btn btn-secondary" onClick={() => logout()}>
                <FcExport className="text-3xl text-primary inline" />{" "}
                <span className="font-bold hover:text-primary">Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
