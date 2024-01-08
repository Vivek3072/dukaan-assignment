import Header from "../header/Header";
import Overview from "../overview/Overview";
import Transactions from "../transactions/Transactions";

export default function Hero() {
  return (
    <>
      <Header />
      <div className="px-10">
        <Overview />
        <Transactions />
      </div>
    </>
  );
}
