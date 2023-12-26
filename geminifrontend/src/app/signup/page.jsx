import Link from "next/link"

const SignupPage = ()=>{
    return (
        <div className="mainContainer">
            <form>
                <h2>Register</h2>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" name="cpassword" id="cpassword" />
                <button type="submit">Login</button>
                <label className="message">Already have an account? <Link href="/login">Login</Link></label>
            </form>
            
        </div>
    )
}

export default SignupPage