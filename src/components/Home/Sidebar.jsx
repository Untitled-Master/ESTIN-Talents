import { useState } from 'react';
import { ChevronDown, User, LayoutDashboard, Users, BookOpen, GraduationCap, Briefcase, FileText } from 'lucide-react';

const MenuItem = ({ icon: Icon, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-[#FAFAFA] hover:bg-zinc-800/70 rounded-lg transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="mt-1 ml-4 pl-4 border-l border-zinc-700">
          {children}
        </div>
      )}
    </div>
  );
};

const SubMenuItem = ({ label }) => (
  <button className="w-full text-left px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-200">
    {label}
  </button>
);

const Sidebar = () => {
  return (
    <div className="w-1/6 min-h-screen bg-[#09090B] border-r border-zinc-800">
      {/* User Welcome */}
      <div className="px-6 py-6 border-b border-zinc-800">
        <div className="text-[#FAFAFA] font-semibold">Bienvenue</div>
        <div className="text-xl font-bold text-[#FAFAFA]">AHMED</div>
      </div>

      {/* Menu Items */}
      <div className="px-3 py-4 space-y-1">
        <MenuItem icon={User} label="Mon espace Étudiant">
          <a href="/account"><SubMenuItem label="Profile" /></a>
          <a href="/modules"><SubMenuItem label="Modules" /></a>
          <a href="/calendar"><SubMenuItem label="Calendrier" /></a>
        </MenuItem>

        <MenuItem icon={LayoutDashboard} label="Dashboards">
          <SubMenuItem label="Vue générale" />
          <SubMenuItem label="Statistiques" />
          <SubMenuItem label="Rapports" />
        </MenuItem>

        <MenuItem icon={Users} label="Enseignants">
          <SubMenuItem label="Liste des enseignants" />
          <SubMenuItem label="Emploi du temps" />
          <SubMenuItem label="Contacts" />
        </MenuItem>

        <MenuItem icon={GraduationCap} label="Étudiants">
          <SubMenuItem label="Liste des étudiants" />
          <SubMenuItem label="Classes" />
          <SubMenuItem label="Résultats" />
        </MenuItem>

        <MenuItem icon={BookOpen} label="Pédagogie">
          <SubMenuItem label="Programmes" />
          <SubMenuItem label="Cours" />
          <SubMenuItem label="Examens" />
        </MenuItem>

        <MenuItem icon={Briefcase} label="Stages de fin d'études">
          <SubMenuItem label="Offres de stage" />
          <SubMenuItem label="Candidatures" />
          <SubMenuItem label="Conventions" />
        </MenuItem>

        <MenuItem icon={FileText} label="Offres (thèses, emplois, ..)">
          <SubMenuItem label="Offres d'emploi" />
          <SubMenuItem label="Thèses" />
          <SubMenuItem label="Opportunités" />
        </MenuItem>
      </div>
    </div>
  );
};

export default Sidebar;