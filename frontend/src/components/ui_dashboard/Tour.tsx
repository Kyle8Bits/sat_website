type TourProps = {
  onItemClick?: (item: string) => void;
  school?: string;
  date?: string;
  headcount?: string;
  lunch?: boolean;
  group?: string;
  status?: 'stand-by' | 'sharing' | 'campus-tour' | 'lunch' | 'farewell' | 'dont' | 'idle';
}

function Tour({ school, date, headcount, lunch, group, status }: TourProps) {
  return (
    <div className='flex flex-col h-fit min-w-full items-start justify-center h-fit bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      <h1>{school}</h1>
      <h2 className='text-[20px]'>Date: {date}</h2>
      <h2 className='text-[20px]'>Headcount: {headcount}</h2>
      <h2 className='text-[20px]'>Lunch: {lunch ? "Lunch provided" : "No Lunch"}</h2>
      <h2 className='text-[20px]'>Group: {group}</h2>
      <h2 className='text-[20px]'>Status: {status}</h2>
    </div>
  )
}

export default Tour
