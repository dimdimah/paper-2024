import BentoGrid from "@/components/bentoGrid";
import Layout from "./user/base";

export default function Page() {
  return (
    <Layout>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 justify-center mx-auto">
        <BentoGrid
          imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
          title="Hangouts"
          description="Stylish & Youth Style"
        />
        <BentoGrid
          imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
          title="Hangouts"
          description="Tampil percaya diri dengan Numan Collection"
        />
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="grid grid-cols-2 gap-2 justify-center mx-auto h-screen my-2">
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 justify-center mx-auto h-screen my-2">
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
          <BentoGrid
            imageSrc="https://snhjwljuupgicvbwdhvz.supabase.co/storage/v1/object/public/images/public/1728651957284.jpg"
            title="Hangouts"
            description="Tampil percaya diri dengan Numan Collection"
            width="50vw"
            height="50vh"
          />
        </div>
      </div>
    </Layout>
  );
}
