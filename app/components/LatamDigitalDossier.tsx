"use client";

import { useState, useRef, useCallback, lazy, Suspense, type ReactElement } from "react";
import { SECTIONS } from "./sections/constants";
import type { SectionType } from "./sections/types";
import Navigation from "./Navigation";
import SectionLoader from "./SectionLoader";

// Lazy load all section components for optimal code splitting
const Portada = lazy(() => import("./sections/Portada"));
const QuienesSomos = lazy(() => import("./sections/QuienesSomos"));
const MensajeDirector = lazy(() => import("./sections/MensajeDirector"));
const Historia = lazy(() => import("./sections/Historia"));
const Servicios = lazy(() => import("./sections/Servicios"));
const Equipo = lazy(() => import("./sections/Equipo"));
const Impacto = lazy(() => import("./sections/Impacto"));
const Reconocimientos = lazy(() => import("./sections/Reconocimientos"));
const Diferenciadores = lazy(() => import("./sections/Diferenciadores"));

const LatamDigitalDossier = () => {
  const [activeSection, setActiveSection] = useState<SectionType>("portada");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = useCallback((section: SectionType) => {
    setActiveSection(section);
    // Scroll to top of content area smoothly
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const renderContent = useCallback(() => {
    const sectionMap: Record<SectionType, ReactElement> = {
      portada: <Portada />,
      nosotros: <QuienesSomos />,
      mensaje: <MensajeDirector />,
      historia: <Historia />,
      servicios: <Servicios />,
      equipo: <Equipo />,
      impacto: <Impacto />,
      reconocimientos: <Reconocimientos />,
      diferenciadores: <Diferenciadores />,
    };

    return sectionMap[activeSection] || sectionMap.portada;
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        sections={SECTIONS}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main ref={contentRef}>
        <Suspense fallback={<SectionLoader />}>{renderContent()}</Suspense>
      </main>
    </div>
  );
};

export default LatamDigitalDossier;
