import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyLayout from "./component/layout"
import Footer from './component/footer'
import LoggedLayout from './component/loggedlayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <LoggedLayout title="Home" />
     <div class="flex flex-row">
  <div class="pt-20 pl-5">
  <div class="pt-20 pl-5" >
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/students.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h3 class="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-gray">Student1</h3>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
    </div>
</a>
</div>
  </div>
  <div class="pt-20 pl-5">
  <div class="pt-20 pl-5" >
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/students.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h3 class="mb-2 text-sm font-normal tracking-tight text-gray-900 dark:text-gray">Student1</h3>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
    </div>
</a>
</div>
  </div>
</div>
    


</>
  )
}
