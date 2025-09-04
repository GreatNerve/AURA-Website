import { useState, useEffect } from "react";
import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import Loading from "@/components/includes/Loading";
import { Outlet } from "react-router";

export const PublicLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};
