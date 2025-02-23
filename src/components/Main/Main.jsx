import { ChevronDown } from 'lucide-react';

const Main = () => {
  return (
    <div className="min-h-screen bg-[#09090B]">
      {/* Hero Section with Banner */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Darker overlay */}
        <img 
          src="https://talents.estin.dz/media/admin/banniere_estin.png"
          alt="ESTIN Banner" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-[#09090B] to-transparent z-20"> {/* Adjusted padding and gradient */}
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"> {/* Larger text */}
              Bienvenue à ESTIN
            </h1>
            <p className="text-zinc-100 text-xl max-w-2xl"> {/* Lighter text and larger size */}
              École Supérieure en Technologies de l'Information et du Numérique
            </p>
          </div>
        </div>
      </div>

      {/* Architecture des études Section */}
      <div className="max-w-7xl mx-auto px-4 py-24"> {/* Increased padding */}
        <div className="text-center mb-16"> {/* Increased margin */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"> {/* Larger text and adjusted spacing */}
            Architecture des études
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div> {/* Wider line and adjusted color */}
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto"> {/* Lighter text, larger size, and wider max-width */}
            Découvrez notre programme d'études structuré et nos parcours de formation adaptés aux besoins du secteur numérique.
          </p>
        </div>

        {/* Architecture Image */}
        <div className="relative group rounded-3xl overflow-hidden">
          <img 
            src="https://talents.estin.dz/media/admin/etudes_estin.png"
            alt="Architecture des études" 
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;