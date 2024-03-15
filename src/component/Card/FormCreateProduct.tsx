import { Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";


export type AddProduct = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ErrorType = {
  title?: string;
  price?: string;
};

type CreateProductFromProps = {
  getDataForm : (Product:AddProduct)=> void;
};

const FormCreateProduct: React.FC<CreateProductFromProps> = ({getDataForm})=> {
  const [product, setProduct] = useState<AddProduct>({
    title: "",
    price: 0,
    description: "",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });

  useEffect(()=>{
    getDataForm(product)
  },[product,getDataForm])

  const [error, setError] = useState<ErrorType>({});

  useEffect(() => {
    const newError: ErrorType = {};
    if (product.title.length && product.title.length < 3) {
      newError.title = "Title must be at least 3 characters";
    }
    if (product.price && Number(product.price) <= 0) {
      newError.price = "Price must be greater than 0";
    }
    setError(newError);
  }, [product.title, product.price]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target);
    const { id, value } = e.target;
    setProduct((pravProduct) => ({
      ...pravProduct,
      [id]: value,
    }));
  };

  return (
    <div>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Your Title" />
          </div>
          <TextInput
            id="title"
            type="text"
            placeholder="T-Shirt"
            value={product.title}
            onChange={handleChange}
            required
          />
          {error.title && <p className="text-red-500 text-xs">{error.title}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Your Price" />
          </div>
          <TextInput
            id="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            required
          />
          {error.price && <p className="text-red-500 text-xs">{error.price}</p>}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <textarea
            className="w-full"
            id="description"
            value={product.description}
            placeholder="Product Description"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}
export default FormCreateProduct