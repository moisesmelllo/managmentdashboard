import Image from "next/image"

const RevenueCard = () => {
  return (
    <div className="ml-8 mt-8 w-[76rem] bg-white dark:bg-gray-300 dark:text-black p-4 rounded-2xl">
      <div className="flex justify-between m-4">
        <h1 className="text-4xl font-bold">Revenue Chart</h1>
        <button className="px-4 rounded-xl border-2 border-black">This year</button>
      </div>
      <Image 
        src='/grafico1.jpg'
        alt="grafico"
        width={900}
        height={100}
        className="mx-auto"
      />
    </div>
  )
}

export default RevenueCard