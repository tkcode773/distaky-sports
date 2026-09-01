export interface Product {
  id: string;
  name: string;
  category: "tenis" | "fitness";
  price: number;
  image: string;
  brand: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Tênis Adidas Ultraboost",
    category: "tenis",
    price: 200.0,
    image: "/images/tenis-1.jpg",
    brand: "Adidas",
  },
  {
    id: "2",
    name: "Conjunto Fitness Nike Top + Short",
    category: "fitness",
    price: 150.0,
    image: "/images/fitness-1.jpg",
    brand: "Nike",
  },
  {
    id: "3",
    name: "Camisa Dry Fit Masculina",
    category: "fitness",
    price: 27.9,
    image: "/images/fitness-2.jpg",
    brand: "Distaky",
  },
];