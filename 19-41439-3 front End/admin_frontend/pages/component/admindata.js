import Image from 'next/image'

export default function UserLayout({data})   
{
    return(
        <>
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
        </tr>
        <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
        </tr>
        </table>
     
      {/* <h1>Picture: </h1>  */}
      {/* <Image src={"http:/localhost:3000/admin/getimage/"+data.filename} alt="me" width="150" height="150" /> */}
        </>
    )
}