import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"

const layout = ({children}) => { 
  return (
    <>
    <Navbar/>
     <div className="flex overflow-y-hidden">
        <div className="w-1/4 ">
        <Sidebar />
      </div>
        <div className="w-3/4 p-4 overflow-y-hidden">
        {children}
        </div>
        
        </div>
    </>
   
  )
}

export default layout