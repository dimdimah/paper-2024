export interface Product {
  id: number;
  name: string;
  type: string;
  stock: number;
  secretCode: string;
  qrCode: string;
  color: string;
  size: string;
  price: string;
  image: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data: Product[];
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}items`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data: ApiResponse = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Data fetching error"
    );
  }
};
