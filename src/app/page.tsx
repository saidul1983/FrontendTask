import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NopStation",
  description: "Learning purpose!"
};

export default function Home() {
  return (
    <>
      <Categories />
      <FeaturedProducts />
    </>
  );
}
