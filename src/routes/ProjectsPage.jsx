import { Link } from "react-router"

export default function ProjectsPage() {
  return (
    <> 
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

      <h1 className="text-4xl font-bold text-white mb-4">Projects Page</h1>
      <p className="text-lg text-gray-600">This is the Projects page of the portfolio.</p>
    <section className="bg-white p-2 rounded mt-2">

    <Link to="/projects/client-showcase" className="btn btn-outline max-w-md">
          Client Showcase.
    </Link>
      
    </section>
    </div>
    </>
    
  )
}