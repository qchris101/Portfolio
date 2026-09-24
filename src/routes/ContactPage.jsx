import Social from "../components/socials/Social";

export default function ContactPage() {
    return(
        <>
   <div className="flex flex-col items-center min-h-screen justify-center ">
      
    <div className="hero text-white bg-base-200 ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Lets Connect!</h1>
      <p className="py-6">
       email.js contact page
      </p>
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