import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import categoriesData from "@/data/categories.json";

const Categories = () => {
  return (
    <section className="bg-white pb-8 pt-16 dark:bg-dark md:pb-10 md:pt-20 lg:pb-5 lg:pt-28">

      <div className="container">
        <SectionTitle
          title="Shop by Category"
          paragraph="Browse our wide range of product categories"
          center
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {categoriesData.categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group overflow-hidden rounded-sm bg-white shadow-one transition-all duration-500 hover:scale-104 hover:shadow-two hover:bg-primary/5 dark:bg-dark dark:hover:shadow-gray-dark dark:hover:bg-primary/10 hover:z-10"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
