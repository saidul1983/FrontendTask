import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NopStation",
  description: "Learning purpose!"
};

export default function Home() {
  return (
    <>
      <Blog />
    </>
  );
}
