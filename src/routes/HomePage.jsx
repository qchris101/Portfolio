import Social from "../components/socials/Social";
import { Link } from "react-router"
export default function HomePage() {
  return (
    <>
    <div className="flex flex-col items-center min-h-screen justify-center ">
      
    <div className="hero text-white bg-base-200 ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Christian Quintana</h1>
      <p className="py-6">
       Junior React focused engineer, with a deep motivation to build React 
          web applications.
      </p>
      <Link to="/projects" className="btn outline-3 p-2 rounded">
      <button className="btn btn-primary">Check Out some of my Work!</button>
      </Link>
    </div>
  </div>
</div>
<div className="mt-6">
  <Social />

</div>
    </div>
</>
  )
}