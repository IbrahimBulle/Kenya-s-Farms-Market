import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"

const layout = ({children}) => { 
  return (
    <>
    <Navbar/>
     {children}
    </>
   
  )
}

export default layout