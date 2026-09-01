import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-distaky-dark-gray border-t border-distaky-orange/20 py-10 px-6 mt-16 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sobre a Loja */}
        <div>
          <h4 className="text-lg font-bold text-distaky-orange mb-3">
            DISTAKY <span className="text-white">SPORTS</span>
          </h4>
          <p className="leading-relaxed">
            Especializada em tênis de alta performance e moda fitness. Qualidade, estilo e atendimento direto via WhatsApp.
          </p>
        </div>

        {/* Links Rápidos */}
        <div>
          <h5 className="text-white font-bold mb-3">Navegação</h5>
          <ul className="space-y-2">
            <li>
              <Link href="#produtos" className="hover:text-distaky-orange transition">
                Catálogo de Produtos
              </Link>
            </li>
            <li>
              <a 
                href="https://chat.whatsapp.com/IKDK6YFB3zeEZ8vb2Hz..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-distaky-orange transition"
              >
                Grupo VIP no WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Informações de Atendimento */}
        <div>
          <h5 className="text-white font-bold mb-3">Atendimento</h5>
          <p className="mb-2">Envios para todo o Brasil 🇧🇷</p>
          <p className="text-xs text-gray-500">
            Dúvidas sobre tamanhos e modelos? Fale direto no nosso WhatsApp oficial.
          </p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Distaky Sports. Todos os direitos reservados.
      </div>
    </footer>
  );
}