import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <nav>
            <h3>nav bar</h3>
        
        </nav>
       
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            19-41439-3 @copyright</div>
        </>
    )
}