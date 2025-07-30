// components/ui/CardWithDelete.jsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function CardWithDelete({ imageurl, public_id }) {
  const [isDeleted, setIsDeleted] = useState(false)

  // Handle delete logic
  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/delete-image', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_id }), // Pass public_id to backend
      })

      if (res.ok) {
        setIsDeleted(true) // Remove image from UI immediately
      } else {
        console.error('Delete failed')
      }
    } catch (err) {
      console.error('Error deleting image:', err)
    }
  }

  // If the image is deleted, do not render it
  if (isDeleted) return null

  return (
    <div className="flex flex-col items-center gap-2">
      {/* The Card component for displaying the image */}
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
              {/* Dynamic image rendering */}
              <td className="p-4">
                <Image
                  src={imageurl} // Use the dynamic image URL
                  alt="Product Image"
                  className="w-16 md:w-32 max-w-full max-h-full"
                  width={128} // Set image width
                  height={128} // Set image height
                />
              </td>
             
             
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  onClick={handleDelete} // On click delete image
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
