"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  const [category, setCategory] = useState<"todos" | "tenis" | "fitness">("todos");

  const filteredProducts =
    category === "todos"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <main className="min-h-screen bg-distaky-black text-white font-sans flex flex-col justify-between">
      <div>
        {/* Header / Navbar */}
        <header className="flex justify-between items-center p-5 bg-distaky-dark-gray border-b border-distaky-orange/20">
          <h1 className="text-2xl font-bold text-distaky-orange tracking-wider">
            DISTAKY <span className="text-white">SPORTS</span>
          </h1>
          <nav className="space-x-4 text-sm font-medium">
            <Link href="#produtos" className="hover:text-distaky-orange transition">
              Produtos
            </Link>
          </nav>
        </header>

        {/* Hero Banner */}
        <section className="py-12 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            O melhor do estilo esportivo com a{" "}
            <span className="text-distaky-orange">Qualidade que Destaca</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Tênis de alta performance e vestuário fitness entregues em todo o Brasil.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#produtos"
              className="bg-distaky-orange text-black font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Ver Catálogo
            </a>
            <a
              href="https://chat.whatsapp.com/IKDK6YFB3zeEZ8vb2Hz..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Grupo VIP WhatsApp
            </a>
          </div>
        </section>

        {/* Seção Catálogo com Filtros */}
        <section id="produtos" className="py-8 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-2xl font-bold border-l-4 border-distaky-orange pl-3">
              Catálogo
            </h3>

            {/* Botões de Filtro */}
            <div className="flex gap-2">
              <button
                onClick={() => setCategory("todos")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                  category === "todos"
                    ? "bg-distaky-orange text-black font-bold"
                    : "bg-distaky-dark-gray text-gray-300 hover:text-white"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setCategory("tenis")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                  category === "tenis"
                    ? "bg-distaky-orange text-black font-bold"
                    : "bg-distaky-dark-gray text-gray-300 hover:text-white"
                }`}
              >
                Tênis
              </button>
              <button
                onClick={() => setCategory("fitness")}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                  category === "fitness"
                    ? "bg-distaky-orange text-black font-bold"
                    : "bg-distaky-dark-gray text-gray-300 hover:text-white"
                }`}
              >
                Moda Fitness
              </button>
            </div>
          </div>

          {/* Grid Renderizado conforme Filtro */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Footer da Loja */}
      <Footer />
    </main>
  );
}