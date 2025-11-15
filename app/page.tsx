
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DantesInfernoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero title animation
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(1.7)",
      });

      // Parallax scroll effects
      gsap.to(".hero-bg", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        opacity: 0.3,
      });

      // Strain cards animation
      gsap.from(".strain-card", {
        scrollTrigger: {
          trigger: ".strain-details",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });

      // Effects timeline
      gsap.from(".effect-item", {
        scrollTrigger: {
          trigger: ".effects-section",
          start: "top 75%",
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.7,
      });

      // Terpene bars animation
      gsap.from(".terpene-bar", {
        scrollTrigger: {
          trigger: ".terpene-section",
          start: "top 70%",
        },
        scaleX: 0,
        transformOrigin: "left",
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-inferno-darker min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="hero-bg absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://pub-b70cb36a6853407fa468c5d6dec16633.r2.dev/175774/gemini/generate_image/response/73bcf64597891a25b5b8a33ee5d2eaa1')`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-inferno-dark/50 to-inferno-darker" />

        <div className="relative z-10 text-center px-6 max-w-6xl">
          <h1
            ref={titleRef}
            className="font-display text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-inferno-orange via-inferno-red to-inferno-purple bg-clip-text text-transparent"
          >
            DANTE'S INFERNO
          </h1>
          <p className="hero-subtitle text-2xl md:text-3xl mb-4 text-gray-300 font-light">
            BY MAD TIKI
          </p>
          <p className="hero-subtitle text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Descend into pure euphoria with this legendary hybrid strain
          </p>
          <button className="hero-cta bg-gradient-to-r from-inferno-orange to-inferno-red hover:from-inferno-red hover:to-inferno-purple px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl hover:scale-105 hover:shadow-inferno-orange/50">
            Shop at CULTIMED
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-inferno-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Strain Details */}
      <section className="strain-details py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="strain-card bg-gradient-to-br from-inferno-dark to-inferno-purple/20 rounded-3xl p-8 border border-inferno-purple/30 backdrop-blur-sm">
            <div className="text-inferno-orange text-5xl mb-4">🔥</div>
            <h3 className="text-3xl font-bold mb-2">28% THC</h3>
            <p className="text-gray-400">Potencia Superior</p>
          </div>

          <div className="strain-card bg-gradient-to-br from-inferno-dark to-leafly-darkGreen/20 rounded-3xl p-8 border border-leafly-green/30 backdrop-blur-sm">
            <div className="text-leafly-green text-5xl mb-4">🌿</div>
            <h3 className="text-3xl font-bold mb-2">&lt;1% CBD</h3>
            <p className="text-gray-400">Híbrido Balanceado</p>
          </div>

          <div className="strain-card bg-gradient-to-br from-inferno-dark to-inferno-red/20 rounded-3xl p-8 border border-inferno-red/30 backdrop-blur-sm">
            <div className="text-inferno-red text-5xl mb-4">⚡</div>
            <h3 className="text-3xl font-bold mb-2">Premium</h3>
            <p className="text-gray-400">Genética MAD TIKI</p>
          </div>
        </div>
      </section>

      {/* Effects Section */}
      <section className="effects-section py-20 px-6 bg-gradient-to-b from-inferno-darker to-inferno-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-display font-bold mb-12 text-center">
            Efectos y Sensaciones
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["Eufórico", "Creativo", "Relajado", "Energético", "Feliz", "Concentrado"].map((effect, idx) => (
              <div
                key={idx}
                className="effect-item flex items-center gap-4 bg-inferno-dark/50 backdrop-blur p-6 rounded-2xl border border-inferno-orange/20"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-inferno-orange to-inferno-red flex items-center justify-center text-2xl">
                  ✓
                </div>
                <span className="text-xl font-semibold">{effect}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terpene Profile */}
      <section className="terpene-section py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-display font-bold mb-12 text-center">
          Perfil de Terpenos
        </h2>
        <div className="space-y-6">
          {[
            { name: "Caryophyllene", percentage: 85, color: "bg-inferno-orange" },
            { name: "Limonene", percentage: 70, color: "bg-yellow-400" },
            { name: "Myrcene", percentage: 65, color: "bg-inferno-purple" },
            { name: "Pinene", percentage: 50, color: "bg-leafly-green" },
          ].map((terpene, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">{terpene.name}</span>
                <span className="text-gray-400">{terpene.percentage}%</span>
              </div>
              <div className="h-4 bg-inferno-dark rounded-full overflow-hidden">
                <div
                  className={`terpene-bar h-full ${terpene.color} rounded-full`}
                  style={{ width: `${terpene.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flavors */}
      <section className="py-20 px-6 bg-gradient-to-b from-inferno-dark to-inferno-darker">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold mb-12">Sabores</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Picante", "Terroso", "Cítrico", "Dulce", "Herbal", "Pino"].map((flavor, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-inferno-dark border-2 border-inferno-orange rounded-full text-lg font-medium hover:bg-inferno-orange hover:scale-105 transition-all duration-300 cursor-default"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-inferno-orange via-inferno-red to-inferno-purple rounded-3xl p-16 shadow-2xl">
          <h2 className="text-5xl font-display font-bold mb-6">
            Experimenta el Infierno
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Disponible ahora en CULTIMED Dispensary
          </p>
          <button className="bg-white text-inferno-red px-12 py-5 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
            Visitar CULTIMED
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-inferno-purple/30">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p className="text-sm">
            © 2025 CULTIMED Dispensary | MAD TIKI | Para uso medicinal y recreacional autorizado.
          </p>
          <p className="text-xs mt-2">
            Consumo responsable. Prohibida su venta a menores de edad.
          </p>
        </div>
      </footer>
    </div>
  );
}
