import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userlayout";
import AdminDrawer from '../../../component/admindrawer'

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      
      <MyLayout title="User Profile" />
      <AdminDrawer />

      <UserLayout
      id={data.id}
        filename={data.filename}
        name={data.name}
        email={data.email}
        address={data.address}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('http://localhost:3000/admin/findadmin/' + id);
  const data = await response.data;

  return { props: { data } }
}