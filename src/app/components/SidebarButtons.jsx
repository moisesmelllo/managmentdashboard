import { LayoutDashboard } from 'lucide-react';

const SidebarButtons = () => {
  return (
    <div className='space-y-4 mt-16 p-4 ml-6'> 
      <button className='flex space-x-3 bg-purple py-3 pl-4 pr-10 rounded-xl text-left text-white'>
        <LayoutDashboard />
        <span>Dashboard</span>
      </button>
      <p className='cursor-pointer'>Projects</p>
      <p className='cursor-pointer'>Transaction</p>
      <p className='cursor-pointer'>My Team</p>
      <p className='cursor-pointer'>Research Data</p>
      <p className='cursor-pointer'>Reports</p>
      <hr className="border-t-2 border-gray-300 my-4" />
      <p className='cursor-pointer'>Settings</p>
      <p className='cursor-pointer'>Help</p>
    </div>
  )
}

export default SidebarButtons
