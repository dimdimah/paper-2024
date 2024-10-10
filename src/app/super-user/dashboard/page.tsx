"use client";

import React, { useEffect, useState, useMemo } from "react";
import Layout from "../base";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TableSkeleton from "@/components/TabelSkeleton";
import { SearchIcon } from "lucide-react";
import debounce from "lodash.debounce";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

interface Product {
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

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}items`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: ApiResponse = await response.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Data fetching error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
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

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  if (loading) return <div className="text-center my-20">Get Data...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <Layout>
      <Card className="bg-gray-50 border-none w-full">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4 justify-between">
            <Button variant="outline">Category</Button>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Color</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.color}</TableCell>
                    <TableCell>{product.size}</TableCell>
                    <TableCell>{product.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="text-center py-8">Barang tidak ditemukan!</div>
          )}
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ProductList;
