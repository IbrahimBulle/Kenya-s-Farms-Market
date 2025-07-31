// const page = async () => {
//   const res = await fetch('http://localhost:3000/api/getorders', { cache: 'no-store' });
//   const data = await res.json();

//   const orders = data.orders || [];

//   return (
//     <div className="relative overflow-x-scroll shadow-md sm:rounded-lg p-4">
//       <div className="mb-4 p-4 bg-blue-50 border border-blue-300 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
//         📩 Please contact the <span className="font-semibold ">email connected to the orders</span> 
//       </div>

//       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th className="px-6 py-3">#</th>
//             <th className="px-6 py-3">Product ID</th>
//             <th className="px-6 py-3">Email</th>
//             <th className="px-6 py-3">Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order, index) => (
//             <tr
//               key={order._id}
//               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//             >
//               <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                 {index + 1}
//               </td>
//               <td className="px-6 py-4 break-all">
//                 {order.product_id || <span className="italic text-gray-400">N/A</span>}
//               </td>
//               <td className="px-6 py-4 break-all">
//                 {(order.email || '').replace('%40', '@')}
//               </td>
//               <td className="px-6 py-4">
//                 {order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A'}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default page;



import { cookies } from 'next/headers'
import dotenv from 'dotenv'
dotenv.config()

const page = async () => {
  const cookieStore = cookies()
  const encodedEmail = cookieStore.get('email')?.value
  const email = decodeURIComponent(encodedEmail || '')

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getorders`, {
    cache: 'no-store'
  })
  const data = await res.json()

  // Filter only orders that match the decoded email
  const orders = (data.orders || []).filter(order => order.product_id.split('/')[0] === email)

  return (
    <div className="relative overflow-x-scroll shadow-md sm:rounded-lg p-4">
      <div className="mb-4 p-4 bg-blue-50 border border-blue-300 text-blue-800 rounded-md dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
        📩 Showing orders for: <span className="font-semibold ">{email}</span>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Product ID</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={order._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 break-all">
                {order.product_id || <span className="italic text-gray-400">N/A</span>}
              </td>
              <td className="px-6 py-4 break-all">
                {(order.email || '').replace('%40', '@')}
              </td>
              <td className="px-6 py-4">
                {order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default page