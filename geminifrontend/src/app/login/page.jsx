"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const router = useRouter();

const login = useGoogleLogin({
  onSuccess: tokenResponse => {
    console.log(tokenResponse);
    router.push("/dashboard")
  },
  onError: error => console.log(error),
  flow: 'auth-code',
});

console.log("Login page rerendered! ", Date.now());

  return (
    <div className="mainContainer">
      <form>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
        {/* On success navigate to "/dashboard" */}
        {/* <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log({ans:credentialResponse});
            console.log();
            router.push("/dashboard");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}

        <label className="message">
          {"Don't have an account?"} <Link href="/signup">Register</Link>
        </label>
      </form>
      <div className="google-login-container">
<button className="google-login-btn button" onClick={login}>Google Login🚀</button>
      </div>
    </div>
  );
};

export default LoginPage;
