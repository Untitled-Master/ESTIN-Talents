import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ModulesPage() {
  const [period, setPeriod] = useState("all");
  const [activityType, setActivityType] = useState("all");
  const [subject, setSubject] = useState("all");

  const activities = [
    { type: "Cours", module: "ALSDS", hours: 1.50, teacher: "CHEKLAT Lamia" },
    { type: "Travail Dirigé", module: "ALG1", hours: 0.75, teacher: "SABA Abdelaziz" },
    // ... add all other activities
  ];

  return (
    <div className="min-h-screen bg-[#09090B] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 mb-8 border border-zinc-800">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-white">Mon Activité Pédagogique</h1>
            <p className="text-zinc-400">Gérez et suivez vos activités pédagogiques</p>
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Period Filter */}
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-4">Période</h2>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-white">
                <SelectValue placeholder="Sélectionner une période" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">Toutes les périodes</SelectItem>
                <SelectItem value="s1">Semestre 1</SelectItem>
                <SelectItem value="s2">Semestre 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Activity Type Filter - similar structure to Period */}
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-4">Type d'activité</h2>
            <Select value={activityType} onValueChange={setActivityType}>
              <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-white">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">Tous les types</SelectItem>
                <SelectItem value="cours">Cours</SelectItem>
                <SelectItem value="td">Travail Dirigé</SelectItem>
                <SelectItem value="tp">Travail Pratique</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject Filter - similar structure to Period */}
          <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold text-white mb-4">Matière</h2>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger className="w-full bg-zinc-800/50 border-zinc-700 text-white">
                <SelectValue placeholder="Sélectionner une matière" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">Toutes les matières</SelectItem>
                <SelectItem value="alsds">ALSDS</SelectItem>
                <SelectItem value="alg1">ALG1</SelectItem>
                {/* Add other subjects */}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Activities Table */}
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-zinc-800">
          <h2 className="text-xl font-semibold text-white mb-6">Mes activités</h2>
          <div className="rounded-xl border border-zinc-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-zinc-800/50 border-zinc-700">
                  <TableHead className="text-zinc-300">Type</TableHead>
                  <TableHead className="text-zinc-300">Module</TableHead>
                  <TableHead className="text-zinc-300">Volume horaire</TableHead>
                  <TableHead className="text-zinc-300">Assuré par</TableHead>
                  <TableHead className="text-zinc-300 text-right">Détail</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity, index) => (
                  <TableRow key={index} className="hover:bg-zinc-800/50 border-zinc-700">
                    <TableCell className="font-medium text-zinc-300">{activity.type}</TableCell>
                    <TableCell className="text-purple-400">{activity.module}</TableCell>
                    <TableCell className="text-zinc-400">{activity.hours}h</TableCell>
                    <TableCell className="text-zinc-400">{activity.teacher}</TableCell>
                    <TableCell className="text-right">
                      <button className="px-4 py-2 text-sm bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors">
                        Voir plus
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
