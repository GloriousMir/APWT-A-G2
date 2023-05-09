import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userlayout";
import { useForm } from 'react-hook-form';
import AdminDrawer from '../../../component/admindrawer'
import { useState } from "react";

export default function UserProfile({ data }) {
    const myid=data.id;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
} = useForm();
const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png"];
    if (!allowedtypes.includes(file.type)){
        return false;
    }
    }
const [success, setSuccess] = useState('')

const onSubmit = async (data) => {
    console.log(data);
    // const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('email', data.email);
    // formData.append('password', data.password);
    // formData.append('address', data.address);
    // formData.append('filename', data.filename[0]);
    console.log(data);
    try {
        const response = await axios.put("http://localhost:3000/admin/updateadmin/" +myid,
            {name: data.name, });
      
        setSuccess('Admin Updated successfully');
        reset();
    }
    catch (error) {
        console.log(error.response.data.message);
        
        setSuccess('Admin add unsuccessfull ' + error.response.data.message);
    }
};
  return (
    <>
      
      <MyLayout title="User Profile" />
      <AdminDrawer />

      <div class="pt-44 sm:ml-64">
            <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Update Admin User
                                </h1>
       <p id="filled_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400"><span class="font-medium"> {success}</span></p>
      
              <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="space-y-4 md:space-y-6" action="#">
              <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""
                            {...register('name', { required: true })}  defaultValue={data.name}              
                                        />
{errors.name &&
        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Name is required</span></p>
}
                  </div>
            <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" id="email" //defaultValue={}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}  defaultValue={data.email} 
                                        />
                                          {errors.email && (
                        <p>
                            {errors.email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Email is required</span></p>
                                                    :
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                  {/* <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                        type="password"
                        id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                        // {...register('password', { required: true, pattern: /^\d+$/, minLength: 5 })}  value={data.name} 
                                        />
                                        {errors.password && (
                        <p>
                            {errors.password.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">password is required</span></p>
                                                :
                                                <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Invalid password pattern</span></p>
                                }
                        </p>
                    )}
                  </div> */}
                  <div>
                 
<label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
<textarea id="address"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Adress here...." {...register('address', { required: true })}  value={data.address} />
                  </div>
                <div>
                   
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input type="file" id="filename" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
{...register('filename', { required: true, validate: validateFile })}
/>
{errors.filename && 
                    <p>
                    {errors.filename.type === 'required'
                                                    ?
  <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">file is required</span></p>
                                                    :
                                                    
  <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">invalid file</span></p>
        }
                </p>}      
                </div>
                          <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button>
              </form>
          </div>
      </div>
  </div>
                </section>
              
            </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('http://localhost:3000/admin/findadmin/' + id);
  const data = await response.data;

  return { props: { data } }
}