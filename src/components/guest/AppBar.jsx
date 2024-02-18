'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const AppBar = () => {
  const router = useRouter();

  return (
    <div className="navbar bg-base-300 px-3 py-4">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Eventmakers</a>
        </div>
        <div className="navbar-end space-x-3">
            <button onClick={() => router.push("/auth/login")} className="btn w-32 btn-circle">Log In</button>
            <button onClick={() => router.push("/auth/register")} className="btn btn-neutral w-32 btn-circle">Register</button>
        </div>
    </div>
  )
}
