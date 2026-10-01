'use client';
import axios from 'axios';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'


const ManageUser = () => {
    const [userData, setUserData] = useState([]);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:5000/user/getall')
        if (res.status === 200) {
            console.log(res.data);
            setUserData(res.data);
        } else {
            console.log('some error occured');
        }

    };
    useEffect(() => {

        fetchUsers();

    }, [])
    const deleteUser = async (id) => {
        const res = await
            axios.delete(`http://localhost:5000/user/delete/${id}`)
        if (res.status === 200) {
            fetchUsers();
            toast.success('User Deleted Successfully');
        } else {
            toast.error('Something went wrong');
        }
    }

    return (
        <div>
            <div className='container mx-auto'>
                <table className='w-full'>
                    <thead className=''>
                        <tr className='text-left bg-gray-800 text-white' >
                            <th className='p-3'>ID</th>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                            <th className='p-3'>City</th>
                            <th className='p-3' colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map(user => {
                                return <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>

                                    <td>
                                        <button onClick={() => { deleteUser(user._id) }} className='p-2 text-white bg-red-500 rounded-md'>
                                            <Trash2 size={20} />
                                        </button>
                                    </td>
                                    <td><Link href={`/update-user/${user._id}`} className='block w-fit p-1 text-white bg-blue-500 rounded-md'>
                                        <Pencil size={20} />
                                    </Link></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUser;