"use client";

import { Card } from "flowbite-react";
import { Products } from "../HomePage/HomePageComponent";

function CardProductComponent({ title, description, image }: Products) {
  return (
    <div>
      <Card
        className="max-w-sm "
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      >
        <img className="h-56  " src={image} alt="" />
        <div className="h-72">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex items-center justify-between h-200px">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              {description}
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CardProductComponent;
