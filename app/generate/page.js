"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const searchParams = useSearchParams()
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => { 
    setLinks((initialLinks)=>{
      return initialLinks.map((item, i)=>{
        if (i==index){
          return {link, linktext}
        }
        else {
          return item
        }
      })
    })
   }

   const addLink = () => { 
    setLinks(links.concat([{link: "", linktext: ""}]))
    }

    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });

        console.log(raw)
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if(result.success){
            toast(result.message)
            setLinks([])
            sethandle("")
            setpic("")
            setdesc("")
        } else {
            toast.error(result.message)
        }
    }

    return (
        <div className='bg-white min-h-screen grid lg:grid-cols-2'>
            <div className="col1">
                <div className="logo m-7">
                    <img width={140} src="/logo.png" alt="logo" />
                </div>
                <div className='flex justify-center items-center flex-col gap-7 p-4'>
                    <h1 className='font-bold text-4xl'>Welcome back</h1>
                    <h2 className='text-xl'>Create your Linktree</h2>
                    <div className='flex flex-col gap-5'>
                        <input className='bg-[#f6f7f5] focus:outline-black px-5 py-2 rounded-lg' type="text" placeholder="Choose a handle" value={handle || ""} onChange={e => { sethandle(e.target.value) }} />
                        {links && links.map((item, index) => {
                            return <div key={index} className='flex gap-2'>
                                <input value={item.linktext || ""} onChange={e=>{handleChange(index, item.link, e.target.value)}} className='bg-[#f6f7f5] focus:outline-black px-2 sm:px-5 py-2 rounded-lg' type="text" placeholder="Enter link text" />

                                <input value={item.link || ""} onChange={e=>{handleChange(index, e.target.value, item.linktext)}} className='bg-[#f6f7f5] focus:outline-black px-5 py-2 rounded-lg' type="text" placeholder="Enter link"  />
                            </div>
                        })}
                        <button className='bg-black text-white py-2 rounded-lg' onClick={() => addLink()} >Add Links</button>

                        <input className='bg-[#f6f7f5] focus:outline-black px-5 py-2 rounded-lg' type="text" placeholder="Enter link to your picture" value={pic || ""} onChange={e => { setpic(e.target.value) }} />
                        <input className='bg-[#f6f7f5] focus:outline-black px-5 py-2 rounded-lg' type="text" placeholder="Enter description" value={desc || ""} onChange={e => { setdesc(e.target.value) }} />

                        <button className='disabled:bg-gray-400  bg-black text-white py-2 rounded-lg' onClick={() => { submitLinks() }} disabled={pic == "" || handle == "" || links[0].linktext == ""} >Create Linktree</button>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen overflow-hidden hidden lg:block md:fixed md:top-0 md:right-0 md:w-1/2">
                <img className='h-full w-full object-cover' src="/banner-login.webp" alt="Genereate your links" />
                <ToastContainer />
            </div>

        </div>
    )
}

export default Generate
