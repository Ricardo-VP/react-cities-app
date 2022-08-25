import React from 'react'

import { FcOrganization } from 'react-icons/fc'

export const NavBar = () => {
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-primary">
          Cities <span className="text-neutral-content">App</span>{' '}
          <FcOrganization className="text-2xl ml-2" />
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-neutral"
          >
            <li className="hover:bg-primary">
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li className="hover:bg-primary">
              <a>Settings</a>
            </li>
            <li className="hover:bg-primary">
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
