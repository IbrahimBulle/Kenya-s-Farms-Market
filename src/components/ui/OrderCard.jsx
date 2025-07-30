// components/ui/OrderCard.jsx
'use client'


import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function OrderCard({ imageurl, product_id }) {
    const [email, setEmail] = useState('')
useEffect(() => {
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const rawEmail = getCookie('email');
  const decodedEmail = decodeURIComponent(rawEmail || '');
  console.log('Decoded Email:', decodedEmail); // ✅ Check decoded value here
  setEmail(decodedEmail);
}, []);

  
  const [isOrdered, setOrder] = useState(false)
  const [errorMessage, setErrorMessage] = useState("") // State to handle error messages

  // Handle order logic
const handleOrder = async () => {
  console.log(email,product_id);
  try {
    const res = await fetch("/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include", // ✅ REQUIRED so cookie is sent
  body: JSON.stringify({ product_id, email }),
});


    const data = await res.json();

    if (res.ok && data.success) {
      alert(' Successfully ordered');
    } else {
      alert('Failed to place order: ' + data.message);
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong.');
  }
};

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col justify-center items-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <Image
                  src={imageurl} // Use the dynamic image URL
                  alt="Product Image"
                  className="w-16 md:w-32 max-w-full max-h-full"
                  width={128} // Set image width
                  height={128} // Set image height
                  priority
                />
              </td>
             
              <td className="px-6 py-4">
                <Button
                  onClick={handleOrder} 
                  className="text-red-600 dark:text-red-500"
                >
                  Order
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
    </div>
  )
}
