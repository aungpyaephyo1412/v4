"use client"
import React, {useEffect, useState} from 'react';
import supabase from "@/services/supabase";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Dashboard = () => {
    supabase
        .channel('any')
        .on('postgres_changes', { event: '*', schema: '*' }, payload => {
            console.log('Change received!', payload)
        })
        .subscribe()
    const router = useRouter()
    const [projects,setProjects] = useState([])
    const getData = async ()=>{
        const {data,error} = await supabase.from('projects').select("*").order('id', { ascending: false })
        if (error ===null){
            setProjects(data)
        }
    }
    const deleteData = async (id,image)=>{
        await supabase
            .storage
            .from('projects')
            .remove([`images/${image}`])
        await supabase.from("projects").delete().eq("id",id)
    }
    const session = localStorage.getItem("sb-otgegesmjkdjmcppbsbl-auth-token")
    useEffect(() => {
        getData()
        router.prefetch("/")
        router.prefetch("/dashboard/create")
        router.prefetch("/dashboard/edit")
        if (session === null){
            router.push("/")
        }
    }, []);

    return (
        <div className="relative h-screen shadow-md sm:rounded-lg pb-5">
            <div className='text-white flex justify-between items-center p-5'>
                <Link href={"/"} className='font-semibold'>
                    Dashboard
                </Link>
                <div>
                    <Link href={"/dashboard/create"} className='text-sm bg-blue-500 px-4 py-2 rounded'>
                        Create New Project
                    </Link>
                </div>
            </div>
            <table className="w-full overflow-auto text-sm text-left text-gray-400 px-5">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400 sticky top-0">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Project name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {projects?.map(project => <tr key={project.id} className="bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                            {project?.title}
                        </th>
                        <td className="px-6 py-4 flex">
                            <Link href={`/dashboard/edit/${project.id}`}  className="font-medium  text-blue-500 hover:underline mr-2">Edit</Link>
                            <button onClick={()=>{
                                if (confirm("Do you wanna delete this")){
                                    deleteData(project.id,project.image)
                                }
                            }} className="font-medium  text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
