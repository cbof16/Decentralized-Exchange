import Image from "next/image";
import Heading from "./components/Heading";
import Herosection from "./components/Herosection";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
    <div className="flex flex-col bg-slate-50 p-10" >
      <div className=""> 
        <Herosection/>
      </div>
    </div>
    <div className="" >
      <div className=""> 
        <Features/>
      </div>
    </div>
    </>
  );
}
