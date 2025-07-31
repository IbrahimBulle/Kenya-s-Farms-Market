import AdminNavbar from "@/components/ui/Navbar"
const layout = ({children}) => { 
  return (
    <>
    <AdminNavbar/>
     {children}
    </>
   
  )
}

export default layout