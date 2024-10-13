"use client";
import Layout from "../base";
import AddProduct from "../product/addProduct";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/app/loading";
import debounce from "lodash.debounce";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import React, { useEffect, useState, useMemo } from "react";
import { fetchProducts, Product } from "@/lib/api/products_api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <Layout>
      <Card className="bg-gray-50 border-none w-full">
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4 justify-between">
            <AddProduct />
            <div className="flex items-center space-x-2">
              <Input
                type="text"
                placeholder="Search products..."
                onChange={handleSearch}
                className="flex-grow"
              />
              <SearchIcon className="text-gray-400" />
            </div>
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
                    width={350}
                    height={350}
                    className="object-cover w-full max-h-64"
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
    </Layout>
  );
};

export default ProductList;
