import { IoIosArrowDown } from "react-icons/io";

export default function Overview() {
  const overview = [
    { title: "Online orders", data: "231" },
    { title: "Amount received", data: "₹ 23,92,312.19" },
  ];
  return (
    <>
      <div className="flex flex-row justify-between items-center my-5 ">
        <div className="text-[20px] font-medium">Overview</div>
        <div className="bg-white text-[16px] text-black/30 border border-[#D9D9D9] h-fit rounded px-3 py-1 flex flex-row items-center">
          Last Month
          <IoIosArrowDown className="ml-1" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        {overview?.map((data, idx) => {
          return (
            <div key={idx} className="bg-white rounded-lg p-[20px] shadow-sm">
              <div className="text-[16px]">{data.title}</div>
              <div className="text-[32px] font-medium">{data.data}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
