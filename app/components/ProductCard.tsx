import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto: ${product.name} (R$ ${product.price.toFixed(2)})`
  );

  return (
    <div className="bg-distaky-dark-gray p-4 rounded-xl border border-gray-800 hover:border-distaky-orange/50 transition flex flex-col justify-between">
      <div>
        <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-500 font-bold">
          {product.brand}
        </div>
        <span className="text-xs font-semibold text-distaky-orange uppercase tracking-wider">
          {product.brand}
        </span>
        <h4 className="font-bold text-lg text-white mt-1">{product.name}</h4>
      </div>

      <div className="mt-4">
        <p className="text-distaky-orange font-bold text-xl">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>
        <a
          href={`https://wa.me/5581999999999?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center mt-3 bg-distaky-orange text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Comprar via WhatsApp
        </a>
      </div>
    </div>
  );
}