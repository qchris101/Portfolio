import  {  useState } from 'react';
import emailjs from '@emailjs/browser';

  
  
  
  export default function useContactForm() {

      
      
      
      const publicKey = import.meta.env.VITE_EMAILJS_KEY
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    
    
    const [status, setStatus] = useState("")
    


    const sendEmail = async (data) => {
        try {
            await emailjs.send(
                serviceID,
                templateID,
                data,
                publicKey
            )
            setStatus("Message sent successfully!")
            return true
        } catch(error) {
            setStatus("Failed: " + error.text || error)
            return false
        }
    }
    
    return {
        sendEmail,
        status,
    }
}