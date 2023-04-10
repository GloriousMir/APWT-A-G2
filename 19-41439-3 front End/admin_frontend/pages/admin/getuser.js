import Link from "next/link"
import MyLayout from "@/pages/component/layout"
import axios from "axios";


export default function GetUsers({ data }) {
    
  return (
      <>
       <MyLayout title="Get Users"/>
      <h1>All Users</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"/admin/users/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/admin/all');
      const data = await response.data;
    
  return { props: { data } }
  }