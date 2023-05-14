import MyLayout from "@/pages/component/layout"
import axios from "axios";
import { useRouter } from 'next/router'
import UserLayout from "@/pages/component/userlayout";
import AdminDrawer from '../../../component/admindrawer'
import TeacherUserLayout from "@/pages/component/teacherlayout";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      
      <MyLayout title="User Profile" />
      <AdminDrawer />

      <TeacherUserLayout
      id={data.id}
        Name={data.TeacherName}
        TeacherEmail={data.TeacherEmail}
        InstituteName={data.InstituteName}
        PhoneNumber={data.PhoneNumber}
        Username={data.Username}
        Address={data.Address}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get('http://localhost:3000/admin/findteacher/' + id);
  const data = await response.data;

  return { props: { data } }
}