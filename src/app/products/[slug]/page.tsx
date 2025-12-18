import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import productsData from "@/data/products.json";
import Breadcrumb from "@/components/Common/Breadcrumb";

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailsPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const product = productsData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        pageName={product.name}
        description=""
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="mb-8">
                <div className="relative mb-4 overflow-hidden rounded-sm bg-white p-1 shadow-one dark:bg-dark">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {product.oldPrice && (
                    <span className="absolute right-6 top-6 inline-flex items-center justify-center rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white">
                      Sale
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="absolute left-6 top-6 inline-flex items-center justify-center rounded-full bg-gray-500 px-3 py-1.5 text-xs font-semibold text-white">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-7/12">
              <div className="mb-8">
                <h1 className="mb-3 text-2xl font-bold text-black dark:text-white md:text-3xl">
                  {product.name}
                </h1>

                <div className="mb-4 flex items-center gap-3 border-b border-body-color/10 pb-4 dark:border-white/10">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-4 w-4 ${index < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                          }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {product.reviews > 0 && (
                    <span className="text-sm text-body-color dark:text-body-color-dark">
                      {product.reviews} {product.reviews === 1 ? "review" : "reviews"}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="mb-6 rounded-sm bg-gray p-6 dark:bg-dark-2">
                  <div className="mb-4 flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-black dark:text-white">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-lg text-body-color line-through dark:text-body-color-dark">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="mb-6 flex items-center gap-2 text-sm">
                    <span className="font-medium text-black dark:text-white">
                      Availability:
                    </span>
                    <span className={`font-semibold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                      {product.inStock ? "In stock" : "Out of stock"}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      disabled={!product.inStock}
                      className="flex-1 rounded-sm bg-primary px-6 py-3 text-base font-medium text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      ADD TO CART
                    </button>
                    <button className="rounded-sm border border-stroke bg-white px-4 py-3 text-body-color transition hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark dark:text-body-color-dark dark:hover:border-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <span className="font-medium text-black dark:text-white">SKU:</span>
                    <span className="text-body-color dark:text-body-color-dark">PROD-{product.id}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-black dark:text-white">Categories:</span>
                    <span className="text-body-color dark:text-body-color-dark">Category {product.categoryId}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="rounded-sm bg-white shadow-one dark:bg-dark">
              <div className="border-b border-body-color/10 px-8 py-4 dark:border-white/10">
                <h2 className="text-xl font-bold text-black dark:text-white">
                  Description
                </h2>
              </div>
              <div className="p-8">
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-medium text-primary hover:underline"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
