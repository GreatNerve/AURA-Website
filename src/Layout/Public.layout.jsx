import { Suspense, useState, useEffect } from "react";
import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import Loading from "@/components/includes/Loading";
import { Outlet } from "react-router";

export const PublicLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#0f1b34]">
            <Loading />
        </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0f1b34] text-white">
      <Header />
      <main className="flex-1 flex w-full items-center justify-center px-4">
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

