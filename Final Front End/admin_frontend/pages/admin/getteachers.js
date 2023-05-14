import Link from "next/link"
import axios from "axios";
import { useRouter } from 'next/router'
import AdminDrawer from '../component/admindrawer'
import LoggedLayout from "../component/loggedlayout";

export default function GetUsers({ data }) {
    const router = useRouter();
  return (
    <>

      <LoggedLayout title="Students" />
      <AdminDrawer />
      <div class="p-24 sm:ml-64 text-center">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        All Student
        </h1>  
        <br></br>    
      <div class="relative overflow-x-auto">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
         E-mail
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Number
        </th>
        <th scope="col" class="px-6 py-3">
          Address
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => {
        return (
          <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
           
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <Link href={"/admin/dashboard/teachers/" + item.id}> {item.TeacherName}</Link>
            </th>
            
            <td class="px-6 py-4">
              {item.TeacherEmail}
            </td>
            <td class="px-6 py-4">
              {item.PhoneNumber}
            </td>
            <td class="px-6 py-4">
              {item.Address}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>


        </div>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/allteacher');
      const data = await response.data;
    
  return { props: { data } }
  }