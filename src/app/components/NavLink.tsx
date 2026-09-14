import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, title, active, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative block py-2 pl-3 pr-4 sm:text-lg md:p-0 transition-colors ${
        active ? "text-white" : "text-[#ADB7BE] hover:text-white"
      }`}
    >
      {title}
      <span
        className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
};

export default NavLink;
