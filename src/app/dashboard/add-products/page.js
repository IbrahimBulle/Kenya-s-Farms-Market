'use client'
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const AddProductPage = () => {
  const [form, setForm] = useState({
    name: '',
    category: '',
    quantity:'',
    price: '',
    description: '',
    email:'',
    image: null,
  })

  const categories = ['Maize', 'Beans', 'Tomatoes', 'Mangoes']

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setForm({ ...form, [name]: value })
  }
 const [email, setEmail] = useState("")
  useEffect(() => {
    const cookie = document.cookie
    const emailValue = decodeURIComponent(
      cookie
        .split("; ")
        .find((c) => c.startsWith("email="))
        ?.split("=")[1] || ""
    )
    setEmail(emailValue)
  }, [])

console.log(email)
  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('name', form.name)
    data.append('category', form.category)
     data.append('quantity', form.quantity)
    data.append('price', form.price)
    data.append('description', form.description)
    data.append('email', form.email)
    if (form.image) data.append('image', form.image)

    const res = await fetch('/api/add-products', {
      method: 'POST',
      body: data,
    })

    if (res.ok) {
      alert('Product added!')
      setForm({ name: '', category: '',quantity:'', price: '', description: '',email:'', image: null })
    } else {
      alert('Error adding product')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">

      <input required name="name" placeholder="Product Name" className="p-2 border w-full" onChange={handleChange} value={form.name} />

      <select required name="category" className="p-2 border w-full" onChange={handleChange} value={form.category}>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>


      <input required name="quantity" placeholder="Product Quantity in kg " type="number" className="p-2 border w-full" onChange={handleChange} value={form.quantity} />

      <input required name="price" type="number" placeholder="Price" className="p-2 border w-full" onChange={handleChange} value={form.price} />

      <textarea name="description" placeholder="Description" className="p-2 border w-full" onChange={handleChange} value={form.description} />

      <input type="file" required accept="image/*" onChange={handleFileChange} className='bg-gray-400 py-3 px-2 rounded-2xl mr-2' />

      {form.image && (
        <img src={URL.createObjectURL(form.image)} alt="Preview" className="w-32 h-32 object-cover rounded-md" />
      )}

      <Button type="submit">Add Product</Button>
    </form>
  )
}

export default AddProductPage
