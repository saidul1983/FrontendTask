import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleProduct from "@/components/FeaturedProducts/SingleProduct";
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";

export async function generateStaticParams() {
  const params = [];
  
  categoriesData.categories.forEach((category) => {
    params.push({ slug: category.slug });
    
    category.subcategories.forEach((sub) => {
      params.push({ slug: sub.slug });
    });
  });
  
  return params;
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  let category = categoriesData.categories.find((c) => c.slug === slug);
  let isSubcategory = false;
  let subcategoryId = null;

  if (!category) {
    for (const cat of categoriesData.categories) {
      const sub = cat.subcategories.find((s) => s.slug === slug);
      if (sub) {
        category = cat;
        isSubcategory = true;
        subcategoryId = sub.id;
        break;
      }
    }
  }

  if (!category) {
    notFound();
  }

  const displayCategory = isSubcategory 
    ? category.subcategories.find((s) => s.id === subcategoryId)
    : category;

  const categoryProducts = productsData.products.filter(
    (product) => product.categoryId === (isSubcategory ? subcategoryId : category.id)
  );

  return (
    <>
      <Breadcrumb
        pageName={displayCategory.name}
        description={category.description}
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          {!isSubcategory && category.subcategories.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                Subcategories
              </h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/categories/${sub.slug}`}
                    className="group overflow-hidden rounded-sm bg-white shadow-one transition-all duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
                  >
                    <div className="relative aspect-video w-full">
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-base font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                        {sub.name}
                      </h3>
                    </div>
                  </Link>
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
