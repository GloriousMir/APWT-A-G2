import MyLayout from "@/pages/component/layout"
import Link from "next/link"

export default function AdminDashboard() {

    return (
      <>
      <MyLayout title="Admin DashBoard"/>
      <h1>Admin Dashboard</h1>

    <Link href="admin/getuser">See All Users</Link>
    <br></br>
    <Link href="/admin/findusers">Find Users by ID</Link>
    <br></br>
      </>
    )
  }