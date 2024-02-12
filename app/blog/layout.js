import Header from "@/app/ui/blog/Header";
import Sidebar from "../ui/blog/Sidebar";
import { karla } from "@/app/ui/fonts";
import NewsTable from "../ui/blog/NewsTable";

function Layout({ children }) {
  return (
    <>
      <div className="h-screen grid grid-cols-5 grid-rows-5 xl:container xl:mx-auto xl:px-4">
        <Header className="col-span-5 border-2 border-black rounded-xl" />
        <Sidebar className="row-span-4 border-2 flex justify-center items-center text-9xl rounded-md" />
        {/* Posts */}
        {children}
        <NewsTable className="border-2 rounded-md row-span-4" />
        <footer className="col-span-5 h-10 border-2 rounded-md leading-8 pl-10">All right reserved.</footer>
      </div>
    </>
  );
}

export default Layout;
