"use client";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Footer from "@/components/layout/Footer";
import WorkspaceRouter from "@/components/workspace/WorkspaceRouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 flex flex-col">
          <Topbar />
          <div className="flex-1 p-6">
            <WorkspaceRouter />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}