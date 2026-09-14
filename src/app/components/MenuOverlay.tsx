import React from "react";
import NavLink from "./NavLink";

interface NavLinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: NavLinkItem[];
  active?: string;
  onNavigate?: () => void;
}

const MenuOverlay = ({ links, active, onNavigate }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center gap-2">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink
            href={link.path}
            title={link.title}
            active={active === link.path}
            onClick={onNavigate}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
