"use client"
import Link from "next/link"
import { GoogleLogin } from '@react-oauth/google'



const LoginPage = ()=>{
    return (
        <div className="mainContainer">
            <form>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
                <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
                <label className="message">Don't have an account? <Link href="/signup">Register</Link></label>
            </form>
            
        </div>
    )
}

export default LoginPage