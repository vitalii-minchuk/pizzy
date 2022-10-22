import { FC } from "react";

interface MenuItemProps {
  id: number;
  imagePath: string;
  price: number;
  description: string;
  weight: number;
  title: string;
}

export const MenuItem: FC<MenuItemProps> = ({
  id,
  price,
  imagePath,
  title,
  description,
  weight,
}) => {
  return (
    <div className="w-[310px] shadow-xl overflow-hidden rounded-2xl">
      <div className="relative overflow-hidden  mb-4">
        <img
          className="object-cover h-[200px] w-full"
          src={imagePath}
          alt={title}
        />
        <span className="absolute text-sm text-gray-200 bottom-2 right-2 rounded-full py-1 px-4 bg-slate-700/40">
          {weight} g
        </span>
      </div>
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <span className="text-xl font-semibold">{price} uah</span>
      </div>
    </div>
  );
};
