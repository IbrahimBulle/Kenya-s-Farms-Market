
const page = () => {
  return (
    <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Daily 1 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Daily 2 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Daily 3 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Daily 4 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Daily 5 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Daily 6 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Daily 7 Price
                </th>
                 <th scope="col" className="px-6 py-3">
                    Average
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple"
                </th>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                 <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
               
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
               
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
                 <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
               
                <td className="px-6 py-4">
                    Accessories
                </td>
                <td className="px-6 py-4">
                    $99
                </td>
                 <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                  <td className="px-6 py-4">
                    $2999
                </td>
                
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default page