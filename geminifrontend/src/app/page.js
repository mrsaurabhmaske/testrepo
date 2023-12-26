"use client"
import Link from "next/link";


export default function Home() {

  return (
    <main className="Indexpage">
      <h1>Welcome to Chintu AI</h1>
      <div className="indexbuttons">
      <Link className="button" href="/login" >Login</Link>
      <Link className="button" href="/signup" >Signup</Link>


      </div>


    </main>
  )
}
