import Link from "next/link";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-distaky-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-5 bg-distaky-dark-gray border-b border-distaky-orange/20">
        <h1 className="text-2xl font-bold text-distaky-orange tracking-wider">
          DISTAKY <span className="text-white">SPORTS</span>
        </h1>
        <nav className="space-x-4 text-sm font-medium">
          <Link href="#tenis" className="hover:text-distaky-orange transition">Tênis</Link>
          <Link href="#fitness" className="hover:text-distaky-orange transition">Moda Fitness</Link>
        </nav>
      </header>

      {/* Grid de Produtos Dinâmico */}
      <section id="produtos" className="py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-l-4 border-distaky-orange pl-3">
          Catálogo em Destaque
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}