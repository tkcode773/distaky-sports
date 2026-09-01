"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "TENIS",
    price: "",
    description: "",
    stock: "1",
    sizes: "",
    images: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
          sizes: formData.sizes.split(",").map((s) => s.trim()).filter(Boolean),
          images: formData.images.split(",").map((i) => i.trim()).filter(Boolean),
        }),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Produto cadastrado com sucesso!" });
        setFormData({
          name: "",
          brand: "",
          category: "TENIS",
          price: "",
          description: "",
          stock: "1",
          sizes: "",
          images: "",
        });
      } else {
        const data = await response.json();
        setMessage({ type: "error", text: data.error || "Erro ao cadastrar produto." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Erro na conexão com o servidor." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-distaky-black text-white p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-distaky-dark-gray p-8 rounded-xl border border-distaky-orange/30 shadow-2xl">
        <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-distaky-orange">Painel de Gestão</h1>
            <p className="text-sm text-gray-400">Cadastre e gerencie os produtos da Distaky Sports</p>
          </div>
          <Link
            href="/"
            className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold px-4 py-2 rounded-lg transition"
          >
            ← Ir para a Loja
          </Link>
        </div>

        {message && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm font-bold ${
              message.type === "success" ? "bg-green-900/50 text-green-300 border border-green-700" : "bg-red-900/50 text-red-300 border border-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Nome do Produto *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Tênis Ultraboost Light"
                className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Marca *</label>
              <input
                type="text"
                required
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="Ex: Adidas, Nike, Distaky"
                className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Categoria *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
              >
                <option value="TENIS">Tênis</option>
                <option value="FITNESS">Moda Fitness</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Preço (R$) *</label>
              <input
                type="number"
                step="0.01"
                required
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="299.90"
                className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Estoque Inicial</label>
              <input
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">
              Tamanhos Disponíveis (Separados por vírgula)
            </label>
            <input
              type="text"
              value={formData.sizes}
              onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
              placeholder="Ex: 38, 39, 40, 41 ou P, M, G"
              className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">
              URLs das Imagens (Separadas por vírgula)
            </label>
            <input
              type="text"
              value={formData.images}
              onChange={(e) => setFormData({ ...formData, images: e.target.value })}
              placeholder="Ex: https://link-da-imagem1.jpg, https://link-da-imagem2.jpg"
              className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-2">Descrição Detalhada</label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Escreva detalhes do material, tecnologias de amortecimento e diferenciais..."
              className="w-full bg-distaky-black border border-gray-800 rounded-lg p-3 text-sm focus:border-distaky-orange outline-none transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-distaky-orange text-black font-bold py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
          >
            {loading ? "Cadastrando..." : "Cadastrar Produto no Catálogo"}
          </button>
        </form>
      </div>
    </main>
  );
}