import React from 'react';
import { Home, RotateCcw, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Animated 404 Number */}
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-bold text-white opacity-5 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text animate-pulse">
                404
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Oops! Page non trouvée
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              La page que vous recherchez semble avoir disparu dans le cyberespace. 
              Pas d'inquiétude, vous pouvez toujours...
            </p>
          </div>

          {/* Interactive Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            {/* Home Button */}
            <button className="group bg-zinc-900 hover:bg-zinc-800 text-white p-4 rounded-xl transition-all duration-200 hover:scale-105">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg">
                  <Home className="w-6 h-6" />
                </div>
                <span>Retour à l'accueil</span>
              </div>
            </button>

            {/* Search Button */}
            <button className="group bg-zinc-900 hover:bg-zinc-800 text-white p-4 rounded-xl transition-all duration-200 hover:scale-105">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg">
                  <Search className="w-6 h-6" />
                </div>
                <span>Rechercher</span>
              </div>
            </button>

            {/* Refresh Button */}
            <button className="group bg-zinc-900 hover:bg-zinc-800 text-white p-4 rounded-xl transition-all duration-200 hover:scale-105">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <span>Rafraîchir la page</span>
              </div>
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm">
              Si le problème persiste, veuillez contacter le{' '}
              <button className="text-violet-400 hover:text-violet-300 transition-colors">
                support technique
              </button>
            </p>
          </div>
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -inset-[100px] bg-gradient-to-tr from-violet-500/20 to-fuchsia-500/20 opacity-50 blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;