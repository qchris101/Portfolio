import { useForm } from "react-hook-form"
import useContactForm from "../hooks/useContactForm"

export default function ContactForm () {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const { sendEmail, status } = useContactForm()

    const onSubmit = async (data) => {
        const success = await sendEmail(data)
        if (success) reset()
    }

    return(
        <div className="flex justify-center items-center lg:min-h-screen">

        <form className=" flex flex-col w-[420px] text-[#ffffff] gap-4 p-8 border-4" onSubmit={handleSubmit(onSubmit)}>
                 
            <h1 className="text-[#ffffff] text-center text-2xl mb-2 font-[Caladea] font-bold">Contact Me</h1>
            
            {/* Name */}
            <span className="text-sm text-gray-600">Name: <span className="text-xs text-gray-400 italic"> (Required)</span></span>
            
            <input className="input input-bordered w-full focus:input-info border-2" {...register("name", {required: true })}/>
            { errors.name && <span> Name required</span>}
            
            {/* Email */}
            <span className="text-sm text-gray-600">Email:<span className="text-xs text-gray-400 italic"> (Required)</span></span>
            <input className="input input-bordered w-full focus:input-info border-2"{...register("email", {
                required: "Email is required.",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:"Email must include @ and be valid."
                }
                })} />
            { errors.email && <span>{errors.email.message}</span>}

            {/* Subject */}
            <span className="text-sm text-gray-600">Subject: <span className="text-xs text-gray-400 italic"> (Required)</span></span>
            <input className="input input-bordered w-full focus:input-info border-2 " {...register("title", {required: true })}  />
            {errors.title && <span> Subject required</span>}

            {/* Message */}
            <span className="text-sm text-gray-600">Message: <span className="text-xs text-gray-400 italic"> (Required)</span></span>
            <textarea className="textarea textarea-bordered w-full focus:textarea-info border-2 " {...register("message", {required: true })} rows={5} ></textarea>
            { errors.message && <span> Message required</span>}

            <button className="border-2 mt-2 disabled:opacity-50" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send"}</button>


            {status && 
                <div role="alert" className="my-2 alert alert-success alert-soft">
                <p>{status}</p> 
                </div>
            }
        </form>
            </div>
    )

}