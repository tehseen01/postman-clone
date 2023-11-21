import { Inter } from "next/font/google";
import { Layout } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Layout.Sidebar />
      <main>hello</main>
    </div>
  );
}
