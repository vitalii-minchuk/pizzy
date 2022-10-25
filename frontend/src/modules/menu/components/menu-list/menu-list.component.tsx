import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";
import { FC } from "react";
import { Pizza } from "@app/modules/menu/types/pizza";

interface MenuListProps {
  items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({ items }) => {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {items.map(({ image, ...pizza }) => (
        <MenuItem
          key={pizza.id}
          imagePath={`/assets/pizza/${image}`}
          {...pizza}
        />
      ))}
    </div>
  );
};
