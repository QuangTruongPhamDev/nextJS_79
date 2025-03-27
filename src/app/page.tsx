import Image from "next/image";

export const metadata = {
  title: "Shoes App - Trường",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes App",
    url: "https://yourwebsite.com",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export default function Home() {
  return (
    <div className="text-3xl text-red-700">
      Hello BC79
      <Image
        src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg"
        width={500}
        height={500}
        alt="lat mat 48h"
      />
      <Image
        src={"/images/anh1.jpg"}
        width={500}
        height={500}
        alt="hinh anh 1"
      />
    </div>
  );
}
