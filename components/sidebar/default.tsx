interface props {
  isSidebarOpen: boolean
  closeSidebar: Function
}
const Sidebar = ({ isSidebarOpen }: props): React.ReactNode => {
  return (
    <>
      {isSidebarOpen && (
        <div className="absolute inset-0 bg-slate-600 opacity-20 overflow-hidden">
          <div className="absolute right-0 md:max-w-md w-full h-screen bg-blue-500"></div>
        </div>
      )}
    </>
  )
}

export default Sidebar
