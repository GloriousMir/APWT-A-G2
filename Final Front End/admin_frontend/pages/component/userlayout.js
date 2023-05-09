import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios';
import updateadmin from '../admin/updateadmin';

export default function UserLayout(props) {
    const router = useRouter();
   console.log(props.id)
   const updateadmin = async () =>{
    router.push("./../../dashboard/updateadmin/"+ props.id)
   }
    const deleteUser = async () =>{
        await axios.delete("http://localhost:3000/admin/deleteadmin/"+ props.id);
        router.push("./../../getusers")
    }
    return (
        <>
    <div class="flex justify-center px-20 pt-20">   
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4"> 
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={"http://localhost:3000/admin/getimage/"+ props.filename} alt="user Image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Name: {props.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">ID: {props.id}</span>

        <span class="text-sm text-gray-500 dark:text-gray-400">E-mail: {props.email}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">Address: {props.address}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            
            <a href="#" onClick={()=>updateadmin()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</a>
            {/* <a href="./../../updateadmin" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</a> */}
            <a href="#" onClick={()=>deleteUser()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</a>
            <a href="#"onClick={() => router.back()} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Back</a>
        </div>
    </div>
</div>
</div>  
    </>
    )
}