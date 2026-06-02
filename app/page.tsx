//app/page.tsx

import Hero from "./components/hero/Hero";
import ResultsTable from "./components/result/ResultsTable";

export default function Home() {
  return (
    <main>
      <Hero />
      <ResultsTable />
    </main>
  );
}
