'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const list=[
     {name:'Add Products',path:'add-products'},
     { name:'My products',path:'/my-products'},
    { name:'products',path:'/products'},
    { name:'Prices',path:'prices'},
  { name:'Orders',path:'orders'}]
  const pathname = usePathname()
  return (
    <div className="w-[100%] bg-green-900 h-[100vh]  overflow-hidden py-5 rounded-2xl">
      <ul>
     {list.map( (item,index)=>{
      const active = pathname===`/dashboard/${item.path}`
     return <li key={item.path} className={`hover:bg-green-300    active:bg-blue-600 transition-all duration-200 w-full h-full rounded-2xl`}><Link className={`text-shadow-black block w-full h-full p-4 ${active?'bg-green-300 font-bold rounded-2xl':'hover:bg-green-600  rounded-2xl'}`} prefetch href={'/dashboard/'+list[index].path}>{item.name}</Link></li>
     })}
      </ul>
    </div>
  )
}

export default Sidebar