import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  return (
    <nav className="flex justify-between items-center bg-gray-800 px-28 py-3">
      <Link href="/">
        <h1 className="font-bold text-3xl text-white">
          Next context
          <span className="text-sm ml-5 text-slate-300">{state.tasks.length} tasks</span>
        </h1>
      </Link>
      <ul>
        <li><button className="bg-green-500 hover:bg-green:400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center" onClick={() => router.push("/new")}>Add task</button></li>
      </ul>
    </nav>
  )
}

export default Navbar;
