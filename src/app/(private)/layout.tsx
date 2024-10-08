import { AvatarDropdown } from "@/components/layout/avatar-dropdown";
import { Sidebar } from "@/components/layout/sidebar";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" fixed flex-col w-full">
      <div className="fixed h-16 w-full border-b flex items-center justify-between px-10 bg-white">
        <div className="w-10">
          <Image src="/images/logo.png" width={500} height={500} alt="logo" />
        </div>
        <AvatarDropdown />
      </div>
      <div className="flex flex-row h-screen pt-16 items-start">
        <Sidebar />
        <main className="w-full max-w-[calc(100vw-200px)]"> {children}</main>
      </div>
    </div>
  );
}
