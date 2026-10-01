import ContactForm from "../components/ContactForm";
import Social from "../components/socials/Social";
import { socialLinks } from "../data.js"

export default function ContactPage() {
    return(
        <>
   <div className="flex flex-col items-center min-h-screen justify-center ">
      
    <div className="hero text-white bg-base-200 ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Lets Connect!</h1>
      
       <ContactForm />
      
    </div>
  </div>
</div>
<div className="mt-6">
  <Social {...socialLinks[0]} />

</div>
    </div>
</>
    )
}