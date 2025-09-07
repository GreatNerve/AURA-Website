import About from "@/components/Sections/Home/About";
import HeroBanner from "@/components/Sections/Home/Hero.banner";
import PhotoGallery from "@/components/Sections/Home/PhotoGallery";
import { Fragment } from "react";


export default function HomePage() {
  return (
    <Fragment>
      <HeroBanner />
      <About />
      <PhotoGallery />
    </Fragment>
  );
}
