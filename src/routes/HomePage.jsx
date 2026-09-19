import Social from "../components/socials/Social";

export default function HomePage() {
  return (
    <>
    <Social />
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-lg text-gray-600">Welcome to the portfolio home page.</p>
    </div>
    </>
  )
}