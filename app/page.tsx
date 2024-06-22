import Featured from "@components/Featured";
import CardContainer from "@components/ui/CardContainer";
import Hero from "@components/ui/Hero";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden items-center justify-center bg-[#fbfbfb] text-black">
      <Hero />
      <CardContainer />
      <Featured />
    </main>
  );
}
