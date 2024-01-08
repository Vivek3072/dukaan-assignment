import TransactionHeader from "./TransactionHeader";
import TransactionTable from "./TransactionTable";

export default function Transactions() {
  return (
    <>
      <div className="text-[20px] font-medium my-5">Transactions | This Month</div>
      <div className="bg-white rounded-lg px-[24px] py-[12px] my-[]">
        <TransactionHeader />
        <TransactionTable />
      </div>
    </>
  );
}
