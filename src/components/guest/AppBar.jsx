import React from 'react'

export const AppBar = () => {
  return (
    <div className="navbar bg-base-300 px-3 py-4">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Eventmakers</a>
        </div>
        <div className="navbar-end space-x-3">
            <button className="btn w-32 btn-circle">Log In</button>
            <button className="btn btn-neutral w-32 btn-circle">Sign Up</button>
        </div>
    </div>
  )
}
