import Image from "next/image";
import Link from "next/link";
import logo from '../components/logo.png'
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";


export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="h-screen flex">
        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[16%] p-4">
          <Link href="/" className="flex items-center lg:justify-start justify-center gap-2">
            <Image src={logo} alt="logo" width={32} height={32}/>
            <span className="hidden lg:block text-black-500 font-bold">Qschool</span>
          </Link>
          <Menu />
        </div>
        <div className="w-[84%] md:w-[92%] lg:w-[84%] xl:w-[84%] bg-[#f7f8fa] overflow-scroll flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    );
  }