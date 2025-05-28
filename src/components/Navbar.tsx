import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/projects', label: 'Projets' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-cyan-400">
          Aristote<span className="text-white">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `hover:text-cyan-400 transition ${
                    isActive ? 'text-cyan-500 font-semibold' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-300" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 text-slate-300">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-2 py-1 rounded hover:bg-slate-800 ${
                      isActive ? 'text-cyan-500 font-semibold' : ''
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
