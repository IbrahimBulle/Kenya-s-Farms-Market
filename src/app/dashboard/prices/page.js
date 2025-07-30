// 'use client'

// import { useEffect, useState } from 'react'

// const Page = () => {
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch('/api/getprices')
//       .then((res) => res.json())
//       .then(setData)
//       .catch(console.error)
//   }, [])

//   return (
//     <div className="relative overflow-x-scroll shadow-md sm:rounded-lg p-4">
//       <h2 className="text-xl font-semibold mb-4">Farm Price Table</h2>
//       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-300">
//           <tr>
//             <th className="px-6 py-3">Product Name</th>
//             <th className="px-6 py-3">Category</th>
//             {[...Array(7)].map((_, i) => (
//               <th key={i} className="px-4 py-3">Day {i + 1}</th>
//             ))}
//             <th className="px-6 py-3">Average</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr
//               key={item._id}
//               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//             >
//               <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.name}</td>
//               <td className="px-6 py-4">{item.category}</td>
//               {item.daily.map((price, idx) => (
//                 <td key={idx} className="px-4 py-4">${price}</td>
//               ))}
//               <td className="px-6 py-4 font-semibold text-green-700">${item.average.toFixed(2)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Page

'use client'

import { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/getprices')
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  return (
    <div className="relative overflow-x-scroll shadow-md sm:rounded-lg p-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price 1</th>
            <th className="px-6 py-3">Price 2</th>
            <th className="px-6 py-3">Price 3</th>
            <th className="px-6 py-3">Price 4</th>
            <th className="px-6 py-3">Price 5</th>
          </tr>
        </thead>
        <tbody>
          {data.map((price, index) => (
            <tr key={price._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
              <td className="px-6 py-4 break-all">{price.product || <span className="italic text-gray-400">N/A</span>}</td>
              <td className="px-6 py-4 break-all">{(price.category || '').replace('%40', '@')}</td>
              {Array.from({ length: 5 }).map((_, i) => (
                <td key={i} className="px-6 py-4 break-all">
                  {price.prices?.[i] || <span className="italic text-gray-400">N/A</span>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Page
