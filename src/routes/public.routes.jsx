
import { PublicLayout } from "@/Layout/Public.layout.jsx";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../Pages/Home.page.jsx"));
const VenuePage = lazy(() => import("../Pages/Venue.page.jsx"));
const ContactPage = lazy(() => import("../Pages/Contact.page.jsx"));

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="venue" element={<VenuePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
