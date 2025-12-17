import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

const SingleProduct = ({ product }: { product: Product }) => {
  const { name, slug, price, oldPrice, image, rating, reviews, inStock, shortDescription } = product;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <Link href={`/products/${slug}`} className="relative block aspect-square w-full">
        {oldPrice && (
          <span className="absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
            Sale
          </span>
        )}
        {!inStock && (
          <span className="absolute left-4 top-4 z-20 inline-flex items-center justify-center rounded-full bg-gray-500 px-3 py-1 text-sm font-semibold text-white">
            Out of Stock
          </span>
        )}
        <Image src={image} alt={name} fill className="object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3>
          <Link
            href={`/products/${slug}`}
            className="mb-3 block text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
          >
            {name}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm text-body-color dark:text-body-color-dark">
          {shortDescription}
        </p>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 ${
                  index < Math.floor(rating)
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
          {reviews > 0 && (
            <span className="text-xs text-body-color dark:text-body-color-dark">
              ({reviews} {reviews === 1 ? "review" : "reviews"})
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
            {oldPrice && (
              <span className="text-sm text-body-color line-through dark:text-body-color-dark">
                ${oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
