import NavbarComponent from "../Navbar/NavbarComponent";
import CardProductComponent from "../Card/CardProductComponent";
import { useEffect, useState } from "react";
import LoadingComponent from "../Loader/LoadingComponent";
import ButonCreateProduct from "../Card/ButonCreateProduct";

export type Products = {
  readonly id?: number;
  title: string;
  description: string;
  image: string;
};

export default function HomePageComponent() {
  const [getProduct, setProduct] = useState<Products[]>();
  const [getLoading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const fetchproduct = await fetch(
        "https://fakestoreapi.com/products"
      );
      const res = await fetchproduct.json();
      console.log(res);
      setProduct(res);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <ButonCreateProduct/>
      <div className="p-12 h-96 ">
        {getLoading ? (
          <LoadingComponent />
        ) : (
          <div className="flex justify-center gap-8 flex-wrap">
            {getProduct?.map((pro, index) => (
              <CardProductComponent
                key={index}
                title={pro.title}
                description={pro.description}
                image={pro.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
