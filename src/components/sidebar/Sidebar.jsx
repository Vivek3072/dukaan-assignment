import { GoHome, GoPeople } from "react-icons/go";
import { MdPayments } from "react-icons/md";
import {
  AiOutlineShopping,
  AiOutlineSound,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import Nishyan from "../../assets/Nishyan.svg";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbDiscount2, TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";

export default function Sidebar() {
  const items = [
    { icon: <GoHome />, title: "Home" },
    { icon: <LuClipboardList />, title: "Orders" },
    { icon: <AiOutlineShopping />, title: "Products" },
    { icon: <CiDeliveryTruck />, title: "Delivery" },
    { icon: <AiOutlineSound />, title: "Marketing" },
    { icon: <TbBrandGoogleAnalytics />, title: "Analytics" },
    { icon: <MdPayments />, title: "Payments" },
    { icon: <BsTools />, title: "Tools" },
    { icon: <TbDiscount2 />, title: "Discounts" },
    { icon: <GoPeople />, title: "Audience" },
    { icon: <IoColorPaletteOutline />, title: "Appearance" },
    { icon: <AiOutlineThunderbolt />, title: "Plugins" },
  ];

  return (
    <div className="bg-secondary h-screen px-1 py-2 gap-[24px]">
      <div className="flex flex-row justify-between items-center px-[12px] py-1 mb-[24px]">
        <div className="flex flex-row items-center gap-[12px]">
          <img src={Nishyan} alt="Nishyan" className="w-[40px] h-[40px]" />
          <div className=" text-white">
            <div className="text-[15px]">Nishyan</div>
            <a
              href="/"
              className="m-0 p-0 text-[13px] text-gray-200 text-opacity-[80%] underline"
            >
              Visit Store
            </a>
          </div>
        </div>
        <div>
          <IoIosArrowDown color="white" size={20} />
        </div>
      </div>
      {/* ________ */}
      <ul className="flex flex-col">
        {items?.map((item, idx) => (
          <li
            key={idx}
            className={`${
              item.title === "Payments"
                ? "bg-white bg-opacity-10 text-white"
                : "text-[#D2D4D9]"
            } flex flex-row items-center my-1 px-[16px] py-[8px] hover:bg-white hover:bg-opacity-20 rounded`}
          >
            <div className="mr-1 text-[20px]">{item.icon}</div>
            <div className="text-[14px]">{item.title}</div>
          </li>
        ))}
      </ul>

      <div className="bg-[#353C53] mx-2 rounded p-2 flex flex-row items-center absolute bottom-2 left-1">
        <div className="h-full rounded bg-white bg-opacity-10 p-1 mr-1">
          <CiWallet className="text-[30px] font-medium" color="white" />
        </div>
        <div>
          <div className="text-sm text-gray-100">Available Credits</div>
          <div className="text-white font-medium">222.10</div>
        </div>
      </div>
    </div>
  );
}
