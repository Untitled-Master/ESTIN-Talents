import { Bell, Home, User, LogOut } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#09090B] border-b border-zinc-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Left section */}
          <div className="flex items-center gap-8">
            {/* Brand */}
            <div className="relative group cursor-pointer">
              <span className="text-[#FAFAFA] text-xl font-bold">
                <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  ESTIN
                </span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
            </div>

            {/* Home */}
            <button className="flex items-center gap-2 text-[#FAFAFA] hover:bg-zinc-800/70 px-4 py-2 rounded-lg transition-all duration-200">
              <Home className="w-5 h-5" />
              <span><a href="/">Home</a></span>
            </button>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <button className="relative flex items-center gap-2 text-[#FAFAFA] hover:bg-zinc-800/70 px-4 py-2 rounded-lg transition-all duration-200">
              <div className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <span className="hidden sm:inline"><a href="/notifications">Notifications</a></span>
            </button>

            {/* Account */}
            <button className="flex items-center gap-2 text-[#FAFAFA] hover:bg-zinc-800/70 px-4 py-2 rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Account</span>
            </button>

            {/* Logout */}
            <button className="flex items-center gap-2 text-[#FAFAFA] hover:bg-red-950/60 px-4 py-2 rounded-lg transition-all duration-200 ml-2">
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;