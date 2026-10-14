import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise;
    const db = client.db("BitTree");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle: handle })
    if(!item){
        return notFound()
    }

    const item2 = {
        "_id": {
            "$oid": "69cd8c180f6254db5df4d993"
        },
        "links": [
            {
                "link": "https://www.instagram.com/codewithharry/",
                "linktext": "Instagram"
            },
            {
                "link": "https://www.codewithharry.com",
                "linktext": "Website"
            },
            {
                "link": "https://www.youtube.com/codewithharry/",
                "linktext": "Youtube"
            }
        ],
        "handle": "harry",
        "pic": "https://avatars.githubusercontent.com/u/48705673?v=4"
    }

    return <div className="flex min-h-screen justify-center items-start py-10 bg-yellow-50">
        {item && <div className="photo flex flex-col justify-center items-center g-4">
            <img src={item.pic} alt={item.handle} />
            <span className="font-bold text-lg">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((linkElement, index)=>{
                    return <Link  key={index} href= {linkElement.link} target="_blank" rel="noreferrer"><div className="bg-white py-4 shadow-lg px-2 m-2 min-w-65 sm:min-w-96 flex justify-center rounded-md my-3">
                       {linkElement.linktext}
                    </div></Link> 
                })}
            </div>
        </div>}
    </div>
}