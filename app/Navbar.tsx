import { useState } from "react";
import { Link } from "react-scroll";
import { Home, BookOpen, ClipboardList, FileCheck2, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-700 text-white shadow-md z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Computer Course</h1>

        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <MenuItems closeMenu={closeMenu} />
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-6 pb-4 pt-2">
          <ul className="space-y-3 text-sm font-medium">
            <MenuItems closeMenu={closeMenu} isMobile />
          </ul>
        </div>
      )}
    </nav>
  );
};

// Extracted Menu Items
const MenuItems = ({
  closeMenu,
  isMobile = false,
}: {
  closeMenu: () => void;
  isMobile?: boolean;
}) => {
  const linkClasses =
    "flex items-center gap-2 cursor-pointer hover:text-blue-200 transition";

  const items = [
    { to: "course-overview", icon: <Home className="w-4 h-4" />, label: "Home" },
    { to: "course-topics", icon: <BookOpen className="w-4 h-4" />, label: "Topics" },
    { to: "progress", icon: <ClipboardList className="w-4 h-4" />, label: "Progress" },
    { to: "certificate", icon: <FileCheck2 className="w-4 h-4" />, label: "Certificate" },
    { to: "quiz", icon: <span>📝</span>, label: "Quiz" },
  ];

  return (
    <>
      {items.map(({ to, icon, label }) => (
        <li key={to}>
          <Link
            to={to}
            smooth
            duration={500}
            onClick={isMobile ? closeMenu : undefined}
            className={linkClasses}
          >
            {icon} {label}
          </Link>
        </li>
      ))}
    </>
  );
};
