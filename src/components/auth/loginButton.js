
import { signIn } from 'next-auth/react';
import { useState, useEffect } from "react";
import { authConfig } from "../../pages/api/auth/[...nextauth]";

export const LoginButton = () => {
  
    return (
        <button onClick={async() => await signIn() } className="btn btn-primary">Login</button>
    )
}