import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FormCreateProduct, { AddProduct } from "./FormCreateProduct";

export default function ButonCreateProduct() {
  const [openModal, setOpenModal] = useState(false);

  function getDataForm(product: AddProduct) {
    console.log(product);
  }

  async function CreateProduct() {
    try {
      const postPorduct = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ getDataForm }),
      });
      const res = await postPorduct.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenModal(false);
    }
  }

  return (
    <>
      <div className="flex justify-center m-5 p-5">
        <Button
          onClick={() => {
            setOpenModal(true)
          }}
          color="blue"
        >
          Create Product{" "}
        </Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Product</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FormCreateProduct getDataForm={getDataForm} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={CreateProduct}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
