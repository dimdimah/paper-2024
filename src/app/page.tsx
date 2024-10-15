import ProductCard from "@/components/ProductCard";
import HoverCard from "@/components/bentoGrid";
import Image from "next/image";
import CarouselCard from "@/components/carousel";
import { products, listProducts, items } from "@/lib/constant/datasProduct";
import ListProduct from "@/components/catalogImage";
import Layout from "./user/base";

export default function Page() {
  return (
    <Layout>
      <div className="mt-14">
        <div className="flex lg:flex-row p-4 flex-col-reverse h-[100vh]">
          <div className="w-1/2 flex items-center justify-center">
            <h1 className="text-center">hello ini test</h1>
          </div>
          <div>
            <Image
              src="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/6199748084930557672.jpg"
              alt="Product"
              width={550}
              height={650}
              className="h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <HoverCard
            imageA="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/6199748084930557672.jpg"
            imageB="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/6199748084930557674.jpg"
            title="Awesome Chair"
            description="This is an awesome chair!"
          />
          <HoverCard
            imageA="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/6199748084930557675.jpg"
            imageB="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/6199748084930557682.jpg"
            title="Stylish Sofa"
            description="A stylish and comfortable sofa."
          />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              designer={product.designer}
              price={product.price}
            />
          ))}
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
          {listProducts.map((listProduct, index) => (
            <ListProduct
              key={index}
              productName={listProduct.productName}
              price={listProduct.price}
              imageUrl={listProduct.imageUrl}
              colors={listProduct.colors}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
