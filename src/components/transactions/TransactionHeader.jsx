import { FiSearch, FiDownload } from "react-icons/fi";
import { BiTransfer } from "react-icons/bi";

export default function TransactionHeader() {
  return (
    <div className="flex flex-row justify-between items-center my-3">
      <div className="col-span-1 flex flex-row items-center px-[16px] py-[10px]  border border-black/85 rounded text-black/60">
        <FiSearch />
        <input
          type="text"
          placeholder="Search by order ID..."
          className="w-full h-[14px] focus:outline-none ml-2 p-1"
        />
      </div>
      <div className="flex flex-row items-center space-x-2 text-[16px] text-black/30">
        <div className="border rounded h-fit px-[12px] py-[6px] flex flex-row items-center">
          Sort
          <BiTransfer className="rotate-90 ml-1" />
        </div>
        <div className="border h-fit text-center rounded px-[10px] py-[8px] text-[20px]">
          <FiDownload />
        </div>
      </div>
    </div>
  );
}
