import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-gray-900 via-blue-400 to-orange-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Lovable</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["Features", "Docs", "Projects"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm px-3 py-1.5 rounded-md hover:bg-gray-200 font-semibold transition-colors">
              Sign In
            </button>
            <button className="text-sm px-3 py-1.5 rounded-md bg-orange-300 text-white hover:bg-orange-500 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {["Features", "Docs", "Projects"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <button className="text-sm px-3 py-2 rounded-md hover:bg-gray-200 text-gray-800 transition-colors w-full">
                  Sign In
                </button>
                <button className="text-sm px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
