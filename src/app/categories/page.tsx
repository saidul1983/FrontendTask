import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import categoriesData from "@/data/categories.json";

export default function CategoriesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Categories"
        description="Browse our product categories"
      />

      <section className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categoriesData.categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="mb-4 text-sm text-body-color dark:text-body-color-dark">
                    {category.description}
                  </p>
                  {category.subcategories.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <span
                          key={sub.id}
                          className="rounded-full bg-gray-light px-3 py-1 text-xs text-body-color dark:bg-dark-2 dark:text-body-color-dark"
                        >
                          {sub.name}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="rounded-full bg-gray-light px-3 py-1 text-xs text-body-color dark:bg-dark-2 dark:text-body-color-dark">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
