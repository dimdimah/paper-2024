"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import debounce from "lodash.debounce";
import Loading from "./loading";
import { fetchProducts, Product } from "@/lib/api/products_api";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Data fetching error");
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
      }, 300),
    []
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  if (loading) return <Loading />;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <SearchIcon className="text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            className="flex-grow"
          />
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-md p-2">
                <Image
                  src={`${
                    process.env.NEXT_PUBLIC_API_BASE_URL
                  }${product.image.replace("public/", "")}`}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="rounded-md object-cover"
                />
                <p className="font-bold text-lg mt-2">{product.name}</p>
                <p>Type: {product.type}</p>
                <p>Stock: {product.stock}</p>
                <p>Color: {product.color}</p>
                <p>Size: {product.size}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">Data Produk Kosong</div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductList;
