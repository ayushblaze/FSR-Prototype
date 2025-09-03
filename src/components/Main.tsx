import ReportTypeMenu from "./Report-Type";
import ReportForm from "./ReportForm";
import { useState } from "react";

export default function Main() {
  const [selectedType, setSelectedType] = useState("Property Damage Survey 🏠");

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <ReportTypeMenu
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ReportForm selectedType={selectedType} />
    </main>
  );
}
