import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-4 rounded-lg shadow-md">
            <Link className="text-white font-bold text-2xl" href={'/'}>
                Saim.
            </Link>
            <Link
                href={'/addTopic'}
                className="bg-white text-blue-500 font-medium py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition-all"
            >
                Add Topic
            </Link>
        </nav>
    );
}
