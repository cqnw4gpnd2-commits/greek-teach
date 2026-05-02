import { useState } from "react";
import GreekVocabTrainer from "./apps/greek-vocab-trainer";
import GreekVerbsTrainer from "./apps/greek-verbs-trainer-v2";
import GreekPronounsTrainer from "./apps/greek-pronouns-trainer-v3";
const APPS = [
  { id: "vocab", label: "📚 Словарь", sub: "KLIK A2 — 890 слов", component: GreekVocabTrainer, color: "from-teal-500 to-teal-600" },
  { id: "verbs", label: "🔤 Глаголы", sub: "80 глаголов · 3 времени", component: GreekVerbsTrainer, color: "from-emerald-500 to-emerald-600" },
  { id: "pronouns", label: "👤 Местоимения", sub: "Падежи и формы", component: GreekPronounsTrainer, color: "from-cyan-500 to-cyan-600" },
];
export default function App() {
  const [active, setActive] = useState(null);
  if (active) {
    const { component: Current, label } = APPS.find(a => a.id === active);
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-teal-100 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setActive(null)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 text-sm font-medium hover:bg-teal-100 transition-colors">← Назад</button>
          <span className="text-sm font-semibold text-teal-800">{label}</span>
        </div>
        <Current />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4">
      <div className="max-w-lg mx-auto pt-8 pb-16">
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🇬🇷</div>
          <h1 className="text-3xl font-bold text-teal-800 mb-1">Греческий язык</h1>
          <p className="text-teal-600 text-sm">Уровень A2 · Никосия, Кипр 🇨🇾</p>
        </div>
        <div className="space-y-3">
          {APPS.map(app => (
            <button key={app.id} onClick={() => setActive(app.id)} className={"w-full bg-white rounded-2xl shadow-lg p-5 text-left hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center gap-4"}>
              <div className={"w-12 h-12 rounded-xl bg-gradient-to-br " + app.color + " flex items-center justify-center text-2xl shadow-md flex-shrink-0"}>{app.label.split(" ")[0]}</div>
              <div><div className="font-semibold text-gray-800 text-base">{app.label.split(" ").slice(1).join(" ")}</div><div className="text-sm text-gray-500 mt-0.5">{app.sub}</div></div>
              <div className="ml-auto text-gray-300 text-lg">›</div>
            </button>
          ))}
        </div>
        <p className="text-center text-teal-400 text-xs mt-10">Прогресс сохраняется в браузере · Экспорт в настройках</p>
      </div>
    </div>
  );
}