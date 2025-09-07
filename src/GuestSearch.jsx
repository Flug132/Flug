// ملف: src/App.jsx
import GuestSearch from "./GuestSearch";

export default function App() {
  return <GuestSearch />;
}


// ملف: src/GuestSearch.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const guests = [
  { name: "مازن", table: 1 },
  { name: "انور", table: 1 },
  { name: "عبدو", table: 1 },
  { name: "محمد", table: 2 },
  { name: "حسن", table: 2 },
  { name: "عيسى", table: 3 },
  { name: "حسام", table: 3 },
  { name: "الجص", table: 3 },
];

export default function GuestSearch() {
  const [query, setQuery] = useState("");

  const results = guests.filter((g) => g.name.includes(query));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🔎 البحث عن المعازيم</h1>
      <Input
        type="text"
        placeholder="اكتب الاسم هنا..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-md mb-6 text-right"
      />

      {query && (
        <div className="w-full max-w-md space-y-4">
          {results.length > 0 ? (
            results.map((guest, i) => (
              <Card key={i} className="shadow-md">
                <CardContent className="p-4 text-right">
                  <p className="text-lg font-semibold">{guest.name}</p>
                  <p className="text-gray-600">الطاولة رقم {guest.table}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">لا يوجد نتائج</p>
          )}
        </div>
      )}
    </div>
  );
}
