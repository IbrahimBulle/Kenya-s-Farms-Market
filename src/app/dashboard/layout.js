import Navbar from "@/components/ui/Navbar"
import Sidebar from "@/components/ui/Sidebar"

const layout = ({children}) => { 
  return (
    <>
    <Navbar/>
     <div className="flex overflow-y-scroll h-[100vh]">
        <div className="w-1/7 h-[100vh] md:w-1/4 ">
        <Sidebar />
      </div>
        <div className="w-6/7 p-4 overflow-y-scroll">
        {children}
        </div>
        
        </div>
    </>
   
  )
}

export default layout