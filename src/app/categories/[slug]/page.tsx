import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleProduct from "@/components/FeaturedProducts/SingleProduct";
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";

export async function generateStaticParams() {
  return categoriesData.categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const category = categoriesData.categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = productsData.products.filter(
    (product) => product.categoryId === category.id
  );

  return (
    <>
      <Breadcrumb
        pageName={category.name}
        description={category.description}
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          {category.subcategories.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Subcategories
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {category.subcategories.map((sub) => (
                  <div
                    key={sub.id}
                    className="overflow-hidden rounded-sm bg-white shadow-one dark:bg-dark"
                  >
                    <div className="relative aspect-video w-full">
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-base font-semibold text-black dark:text-white">
                        {sub.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Products ({categoryProducts.length})
            </h2>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              {categoryProducts.map((product) => (
                <div key={product.id} className="w-full">
                  <SingleProduct product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-sm bg-white p-12 text-center shadow-one dark:bg-dark">
              <p className="text-base text-body-color dark:text-body-color-dark">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
