import React from "react";
import Herotop from "../../components/elements/marketing/Herotop";
import FeatureSection from "../../components/elements/marketing/FeatureSection";
import CtaSection from "../../components/elements/marketing/CtaSection";
import DownloadApp from "../../components/elements/marketing/DownloadApp";
import FooterHome from "../../components/elements/marketing/FooterHome";

export default function HomePage() {
  return (
    <div>
      <div className="bg-bg_page_acceuil">
        <div className="max-w-6xl h-full m-auto">
          <Herotop />
        </div>
      </div>

      <div className="max-w-6xl h-full m-auto">
        <FeatureSection />
        <CtaSection />
        <DownloadApp />
      </div>
      <FooterHome />
    </div>
  );
}
