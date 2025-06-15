type TourProps = {
  onItemClick?: (item: string) => void;
  school?: string;
  date?: string;
  headcount?: string;
  lunch?: boolean;
  group?: string;
  status?: 'stand-by' | 'sharing' | 'campus-tour' | 'lunch' | 'farewell' | 'dont' | 'idle';
  type?: 'HST' | 'PID' | 'AD' | "ED";
}

function Tour({ school, date, headcount, lunch, group, status, type }: TourProps) {
  const style = {
    backgroundColor: status === "idle" ? 'bg-yellow-100' : "bg-green-100"
  };

  return (
    <div
      className={`flex flex-col w-full sm:w-[300px] lg:w-[280px] h-fit items-start justify-start 
                  ${style.backgroundColor} p-4 rounded-lg shadow-md hover:shadow-lg 
                  transition-shadow duration-300`}
    >
      <h1
        className="text-xl font-semibold truncate overflow-hidden whitespace-nowrap w-full"
        title={school}
      >
        {school}
      </h1>
      <h2 className="text-[16px] sm:text-[18px]">Date: {date}</h2>
      <h2 className="text-[16px] sm:text-[18px]">Headcount: {headcount}</h2>
      <h2 className="text-[16px] sm:text-[18px]">
        Lunch: {lunch ? "Lunch provided" : "No Lunch"}
      </h2>
      <h2 className="text-[16px] sm:text-[18px]">Group: {group}</h2>
      <h2 className="text-[16px] sm:text-[18px]">Status: {status}</h2>
      <h2 className="text-[16px] sm:text-[18px]">Type: {type}</h2>
    </div>
  );
}

export default Tour
