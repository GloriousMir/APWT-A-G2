import Header from "./header"
import Link from "next/link"

export default function LoggedLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-50 shadow-sm">

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/admin/dashboard" className="flex items-center">
            <img src="/student.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">AJK</span>
          </a>
          
          {/* <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded text-sm">Logout</button> */}
        </div>
      </nav>
    </>
  );
}
