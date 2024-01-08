export default function Overview() {
  const overview = [
    { title: "Online orders", data: "231" },
    { title: "Amount received", data: "₹ 23,92,312.19" },
  ];
  return (
    <>
      <div className="text-[20px] my-5 font-medium">Overview</div>
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
