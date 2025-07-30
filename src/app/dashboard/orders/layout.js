import Navbar from "@/components/ui/Navbar"
const layout = ({children}) => { 
  return (
    <>
    <Navbar/>
     {children}
    </>
   
  )
}

export default layout