import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="z-[50] bg-[#FBFDFF] py-2 px-5  shadow-sm border-b border-b-gray-300 flex flex-row justify-between items-center sticky top-0 
    "
    >
      <span className="text-blue-700 font-bold text-2xl font-sans tracking-wider">
        JobPrep
      </span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className="flex flex-row items-center gap-2 py-6"
          >
            <span className="rounded-full border border-gray-300 p-2 text-sm">
              AK
            </span>
            Anshul Kahar
            <ChevronDown className="size-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="mx-5 flex flex-col w-48 px-2">
          <div className="w-full text-left py-2 px-2 hover:bg-blue-50 rounded-md">
            Edit Profile
          </div>
          <div className="w-full text-left py-2 px-2 hover:bg-blue-50 rounded-md">
            Settings
          </div>
          <div className="w-full text-left py-2 px-2 hover:bg-blue-50 rounded-md">
            Logout
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export default Header;
