


const ProjectCard = ({title, price, text, icon}) => {
  return (
    <div 
      className='flex bg-white dark:bg-gray-300 hover:bg-purple text-black  mt-8 first:ml-8 mx-4 p-6  w-96 rounded-2xl hover:text-white cursor-pointer
    '
    >
      <div>
        {icon }
      </div>
      <div className='ml-4 mr-6'>
        <h1 className='font-bold text-lg mb-3'>{title}</h1>
        <p className='text-3xl font-bold font-sans'>{price}</p>
        <p className='text-xs mt-2'>{text}</p>
      </div>
    </div>
  )
}

export default ProjectCard;
