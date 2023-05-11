import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyLayout from "./component/layout"
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <MyLayout title="Home" />
    
<section className="bg-white dark:bg-gray-900">
<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
  <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4 xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Where students learn, grow, and succeed together.</h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Join the community of like-minded learners</p>
     
  </div>
  <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
     
    <img class="h-auto max-w-lg ml-auto" src="/students.jpg" alt="image description"/>

  </div>                
</div>
</section>
<section className="bg-white dark:bg-gray-900">
<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
<div className="max-w-screen-md mb-8 lg:mb-16">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Learning without limits.</h2>
    <p className="text-gray-500 sm:text-xl dark:text-gray-400">From novice to expert, we welcome learners of all levels to our inclusive community. Start your educational journey with us.</p>
</div>
<div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
    <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Sharing</h3>
        <p className="text-gray-500 dark:text-gray-400">Access to a platform for sharing ideas, feedback, and opinions on issues that matter to students.</p>
    </div>
    <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Resources</h3>
        <p className="text-gray-500 dark:text-gray-400">Access to educational resources, study materials, and learning tools that can help improve academic performance.
</p>
    </div>
    <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
        </div>
        <h3 className="mb-2 text-xl font-bold dark:text-white">Collaboration</h3>
        <p className="text-gray-500 dark:text-gray-400">Opportunities to collaborate on projects and initiatives that can help enhance skills and build a portfolio.</p>
    </div>
</div>
</div>
</section>

<Footer/>

</>
  )
}
