import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: Lista todos os produtos cadastrados no banco
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar produtos" },
      { status: 500 }
    );
  }
}

// POST: Cadastra um novo produto (usado pelo Painel ADM)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, category, brand, images, sizes, stock } = body;

    // Validação básica dos campos obrigatórios
    if (!name || !price || !category || !brand) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios" },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description: description || "",
        price: parseFloat(price),
        category, // "TENIS" | "FITNESS"
        brand,
        images: images || [],
        sizes: sizes || [],
        stock: parseInt(stock) || 0,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao cadastrar produto" },
      { status: 500 }
    );
  }
}