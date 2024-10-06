"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface NewItem {
  name: string;
  type: string;
  stock: number;
  color: string;
  size: string;
  price: string;
}

const AddItemForm: React.FC = () => {
  const [newItem, setNewItem] = useState<NewItem>({
    name: "",
    type: "",
    stock: 0,
    color: "",
    size: "",
    price: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: name === "stock" ? parseInt(value) || 0 : value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}items`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      const data = await response.json();
      if (data.status === "success") {
        setSuccess(true);
        setNewItem({
          name: "",
          type: "",
          stock: 0,
          color: "",
          size: "",
          price: "",
        });
        setImage(null);
      } else {
        throw new Error(data.message || "Gagal Menambahkan Barang");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error while adding the item"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 ">Tambah Barang Baru</h2>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription className="text-red-500">
            Barang tidak dapat ditambahkan!
          </AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert variant="default" className="mb-4">
          <AlertDescription className="text-lime-500">
            Barang berhasil ditambahkan!
          </AlertDescription>
        </Alert>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Nama</Label>
          <Input
            id="name"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="type">Tipe</Label>
          <Input
            id="type"
            name="type"
            value={newItem.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="stock">Stok</Label>
          <Input
            id="stock"
            name="stock"
            type="number"
            value={newItem.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="color">Warna</Label>
          <Input
            id="color"
            name="color"
            value={newItem.color}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="size">Ukuran</Label>
          <Input
            id="size"
            name="size"
            value={newItem.size}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Harga</Label>
          <Input
            id="price"
            name="price"
            value={newItem.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="image">Foto Barang</Label>
          <Input
            id="image"
            name="image"
            type="file"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Sedang Menambahkan..." : "Tambah Barang"}
        </Button>
      </form>
    </div>
  );
};

export default AddItemForm;
