import React, { useState } from 'react';
import { 
  Bell, 
  Check,
  Clock,
  Calendar,
  MessageSquare,
  AlertCircle,
  Info,
  X,
  Settings,
  GraduationCap,
  MoreVertical
} from 'lucide-react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'grade',
      title: "Modification de note - TEE",
      message: "CF 1CP 2024 TEE 1CP S1: 0.00 → 11.5",
      time: "13 Fév. 2025, 11:05",
      read: false,
      icon: GraduationCap,
      priority: "high"
    },
    {
      id: 2,
      type: 'grade',
      title: "Modification de note - TEE",
      message: "CC 1CP 2024 TEE 1CP S1: 0.00 → 15",
      time: "13 Fév. 2025, 11:05",
      read: false,
      icon: GraduationCap,
      priority: "high"
    },
    {
      id: 3,
      type: 'grade',
      title: "Modification de note - ALSDS",
      message: "CF 1CP 2024 ALSDS 1CP S1: 0.00 → 18.5",
      time: "13 Fév. 2025, 10:15",
      read: false,
      icon: GraduationCap,
      priority: "normal"
    },
    {
      id: 1,
      type: 'deadline',
      title: "Rappel de délai",
      message: "Le rapport de stage doit être soumis avant le 15 juin",
      time: "Il y a 2 heures",
      read: false,
      icon: Calendar,
      priority: "high"
    },
    {
      id: 2,
      type: 'info',
      title: "Nouvelle ressource disponible",
      message: "Le cours de Systèmes Distribués est maintenant disponible sur la plateforme",
      time: "Il y a 3 heures",
      read: true,
      icon: Info,
      priority: "normal"
    },
    {
      id: 3,
      type: 'message',
      title: "Nouveau message",
      message: "Dr. Ahmed a répondu à votre question sur le forum",
      time: "Il y a 5 heures",
      read: false,
      icon: MessageSquare,
      priority: "normal"
    },
    {
      id: 4,
      type: 'alert',
      title: "Alerte importante",
      message: "La session d'examens commence dans une semaine",
      time: "Il y a 1 jour",
      read: false,
      icon: AlertCircle,
      priority: "high"
    },
    {
      id: 5,
      type: 'update',
      title: "Mise à jour de l'emploi du temps",
      message: "Le cours de jeudi est reporté à vendredi",
      time: "Il y a 2 jours",
      read: true,
      icon: Clock,
      priority: "normal"
    },
    {
      id: 17,
      type: 'system',
      title: "Mise à jour du rôle utilisateur",
      message: "Ajout du rôle 'etudiant' à l'utilisateur a_belmehnouf",
      time: "27 Jan. 2025, 11:15",
      read: true,
      icon: Settings,
      priority: "normal"
    }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredNotifications = notifications.filter(notification => {
    switch (activeFilter) {
      case 'unread':
        return !notification.read;
      case 'important':
        return notification.priority === 'high';
      default:
        return true;
    }
  });

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getPriorityStyles = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-purple-500/10 border-l-purple-500';
      default:
        return 'bg-zinc-800/50 border-l-zinc-600';
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-800 rounded-lg">
              <Bell className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">Notifications</h1>
            <span className="bg-violet-500 text-xs px-2 py-1 rounded-full">
              {notifications.filter(n => !n.read).length} nouvelles
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
            >
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Tout marquer comme lu</span>
            </button>
            <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Updated Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeFilter === 'all' ? 'bg-violet-500' : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            Toutes
          </button>
          <button 
            onClick={() => setActiveFilter('unread')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeFilter === 'unread' ? 'bg-violet-500' : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            Non lues
          </button>
          <button 
            onClick={() => setActiveFilter('important')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeFilter === 'important' ? 'bg-violet-500' : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            Importantes
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <div 
                key={notification.id}
                className={`relative flex items-start gap-4 p-4 rounded-xl border-l-4 transition-all duration-200 hover:translate-x-1 ${getPriorityStyles(notification.priority)}`}
              >
                <div className={`p-2 rounded-lg ${notification.read ? 'bg-zinc-800' : 'bg-violet-500'}`}>
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-zinc-400 mt-1">{notification.message}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-zinc-500 whitespace-nowrap">
                        {notification.time}
                      </span>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => deleteNotification(notification.id)}
                          className="p-1 hover:bg-zinc-700 rounded transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-zinc-700 rounded transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {!notification.read && (
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 bg-violet-500 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-zinc-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-zinc-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Aucune notification</h3>
            <p className="text-zinc-400">Vous êtes à jour!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;