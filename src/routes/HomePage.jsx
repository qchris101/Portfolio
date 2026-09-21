import Social from "../components/socials/Social";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-6 bg-black text-white">
        <section>
          <h1 className="text-3xl">Christian Quintana</h1>
          <span className="text-sm">React Focused Engineer</span>
        </section>
        <section className="mt-6">
          Junior React focused engineer, with a deep motivation to build React 
          web applications.
        </section>
      </div>
    </>
  )
}