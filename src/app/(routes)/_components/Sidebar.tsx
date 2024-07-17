"use client";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  LayoutDashboard,
  LucideIcon,
  NotepadText,
  ScrollText,
  UserPen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/profile",
    icon: UserPen,
    label: "Profile",
  },
  {
    href: "/prepare",
    icon: NotepadText,
    label: "Prepare",
  },
  {
    href: "/jobs",
    icon: BriefcaseBusiness,
    label: "Jobs",
  },
  {
    href: "/applied",
    icon: ScrollText,
    label: "Applied",
  },
];

const Sidebar = () => {
  return (
    <div className="shadow-sm border-r border-r-gray-300 py-4 px-4 flex-1 flex flex-col bg-[#FBFDFF]">
      {navLinks.map((item) => (
        <NavItem href={item.href} key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

function NavItem({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "py-3 text-base font-medium px-2 rounded-md flex flex-row gap-3 items-center text-[#0F1419]",
        pathname.includes(href) &&
          "bg-[#EFF8FF] text-[#016AFE] shadow-sm shadow-blue-50"
      )}
    >
      <Icon className=" size-5" />
      {label}
    </Link>
  );
}

export default Sidebar;
