import Link from "next/link"

const Navbar = () => {
  return (
    <>
        <nav className="flex justify-between text-sm border-b-2 border-b-gray-300">
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>

            <div className="flex gap-4">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>

        </nav>
    </>
  )
}
export default Navbar