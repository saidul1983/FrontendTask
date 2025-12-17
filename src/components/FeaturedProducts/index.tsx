import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "@/data/products.json";

const FeaturedProducts = () => {
  const featuredProducts = productsData.products.filter(product => product.featured);

  return (
    <section
      id="featured-products"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Featured Products"
          paragraph="Discover our handpicked selection of premium products. Quality and style combined."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="w-full">
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
