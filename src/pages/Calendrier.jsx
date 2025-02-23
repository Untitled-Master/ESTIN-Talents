import { Calendar, Clock, MapPin, Users, BookOpen } from 'lucide-react';

const schedule = {
  "Sunday": [
    {"time": "08:30-10:00", "event": "Lecture Algebra II Amphi 10 Benslimane"},
    {"time": "10:10-11:40", "event": "Lecture Mecanics Amphi 10 Khtaoui"},
    {"time": "11:45-13:15", "event": "FREE"},
    {"time": "13:20-14:50", "event": "Tuto ASDD Belmahdi S9"},
  ],
  "Monday": [
    {"time": "08:30-10:00", "event": "Lecture ASDD Amphi 10 Cheklat"},
    {"time": "10:10-11:40", "event": "Lecture Analysis II Amphi Djabri"},
    {"time": "11:45-13:15", "event": "FREE"},
    {"time": "13:20-14:50", "event": "Tuto Mecanics Khtaoui S9"},
    {"time": "15:00-16:30", "event": "Tuto Analysis II DJabri S16"},
  ],
  "Tuesday": [
    {"time": "08:30-10:00", "event": "Lecture ASDD Amphi 10 Cheklat"},
    {"time": "10:10-11:40", "event": "Lecture Analysis II Amphi Djabri"},
    {"time": "11:45-13:15", "event": "FREE"},
    {"time": "13:20-14:50", "event": "Tuto ASDD Belmahdi S9"},
  ],
  
  // ... other days
};

const DaySchedule = ({ events, day }) => (
  <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-zinc-800">
    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
      <Calendar className="w-5 h-5" />
      {day}
    </h2>
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={index} className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-purple-500/10 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{event.time}</h3>
                <div className="space-y-2 mt-2">
                  {parseEventDetails(event.event).map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-400">
                      {getEventIcon(detail.type)}
                      <span>{detail.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 ${getEventTypeStyles(event.event)} rounded-full text-sm font-medium`}>
              {getEventType(event.event)}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function parseEventDetails(event) {
  const parts = event.split(', ');
  return parts.map(part => {
    if (part.includes('Lecture')) {
      return { type: 'lecture', text: part };
    } else if (part.includes('Tuto')) {
      return { type: 'tutorial', text: part };
    } else if (part.includes('PW')) {
      return { type: 'practical', text: part };
    }else if (part.includes('FREE')) {
        return { type: 'free', text: part };
      }
    return { type: 'other', text: part };
  });
}

function getEventIcon(type) {
  switch (type) {
    case 'lecture':
      return <BookOpen className="w-4 h-4" />;
    case 'tutorial':
      return <Users className="w-4 h-4" />;
    case 'practical':
      return <MapPin className="w-4 h-4" />;
    case 'free':
      return <Calendar className="w-4 h-4 text-green-400" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
}

function getEventType(event) {
  if (event.includes('Lecture')) return 'Lecture';
  if (event.includes('Tuto')) return 'Tutorial';
  if (event.includes('PW')) return 'Practical Work';
  if (event.includes('FREE')) return (
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4 text-green-400" />
      <span>Free Time</span>
    </div>
  );
  return 'Other';
}

function getEventTypeStyles(event) {
  if (event.includes('Lecture')) return 'bg-blue-500/10 text-blue-400';
  if (event.includes('Tuto')) return 'bg-purple-500/10 text-purple-400';
  if (event.includes('PW')) return 'bg-green-500/10 text-green-400';
  return 'bg-zinc-500/10 text-zinc-400';
}

export default function Calendrier() {
  return (
    <div className="min-h-screen bg-[#09090B] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-8 border border-zinc-800">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-white">Mon Emploi du Temps</h1>
            <p className="text-zinc-400">Consultez votre emploi du temps hebdomadaire</p>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-8">
          {Object.entries(schedule).map(([day, events]) => (
            <DaySchedule key={day} day={day} events={events} />
          ))}
        </div>
      </div>
    </div>
  );
}
