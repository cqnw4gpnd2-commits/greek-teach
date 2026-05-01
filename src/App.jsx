import { useState } from "react";
import GreekVocabTrainer from "./apps/greek-vocab-trainer";
import GreekVerbsTrainer from "./apps/greek-verbs-trainer-v2";
import GreekPronounsTrainer from "./apps/greek-pronouns-trainer-v3";
const APPS = [
  { id: "vocab", label: "📚 Словарь KLIK A2", component: GreekVocabTrainer },
  { id: "verbs", label: "🔤 Глаголы", component: GreekVerbsTrainer },
  { id: "pronouns", label: "👤 Местоимения", component: GreekPronounsTrainer },
];
export default function App() {
  const [active, setActive] = useState(null);
  if (active) {
    const { component: Current } = APPS.find(a => a.id === active);
    return (
      <div>
        <div style={{ padding: "8px 16px", borderBottom: "1px solid #e5e7eb", background: "white", position: "sticky", top: 0, zIndex: 10 }}>
          <button onClick={() => setActive(null)} style={{ padding: "6px 14px", cursor: "pointer", borderRadius: 8, border: "1px solid #d1d5db", background: "white", fontSize: 14 }}>← Назад</button>
        </div>
        <Current />
      </div>
    );
  }
  return (
    <div style={{ padding: "48px 24px", fontFamily: "system-ui, sans-serif", maxWidth: 480, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>🇬🇷 Греческий язык</h1>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 36 }}>A2 · Тренажёры</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {APPS.map(app => (
          <button key={app.id} onClick={() => setActive(app.id)} style={{ padding: "18px 20px", fontSize: 16, cursor: "pointer", borderRadius: 14, border: "1px solid #e5e7eb", background: "white", textAlign: "left" }}>{app.label}</button>
        ))}
      </div>
    </div>
  );
}