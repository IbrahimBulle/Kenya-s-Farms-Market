'use client'
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   const getUsers = async () => {
  try {
    const res = await fetch(`/api/getusers`, { cache: 'no-store' });
    const data = await res.json();
    console.log('Fetched users:', data); // <--- add this
    setUsers(data || []);
    console.log(data);
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
};


    getUsers();
  }, []);
 const handleDelete = async (email) => {
    console.log(email);
  try {
    const res = await fetch(`/api/deleteuser`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email}),
    });
  console.log(res);
    if (res.ok) {
    alert('user deleted successfully')
    window.location.reload()
    } else {
      const err = await res.json();
    //   console.error('Delete failed:', err.message);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

// const handleDelete = async (email) => {
//     try {
//       const res = await fetch('/api/deleteuser', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }), // Pass public_id to backend
//       })

//       if (res.ok) {
//         setIsDeleted(true) // Remove image from UI immediately
//       } else {
//         console.error('Delete failed')
//       }
//     } catch (err) {
//       console.error('Error deleting image:', err)
//     }
//   }

console.log("Users data:", users.map((user)=>{
    console.log(user);
}));

  return (
    <div className="relative overflow-x-scroll shadow-md sm:rounded-lg p-4">
      <div className="mb-4 p-4 bg-blue-50 border border-blue-300 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
        <span className="font-semibold flex justify-center items-center">Here are all the users</span>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">User</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Delete Users</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
              <td className="px-6 py-4 break-all">
                {user.name || <span className="italic text-gray-400">N/A</span>}
              </td>
              <td className="px-6 py-4 break-all">{(user.email || '').replace('%40', '@')}</td>
              <td className="px-6 py-4">
                <Button onClick={() => handleDelete(user.email)}>Delete User</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
