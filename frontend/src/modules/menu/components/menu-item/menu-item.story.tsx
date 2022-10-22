import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItem } from "@app/modules/menu/components/menu-item/menu-item.component";

export default {
  title: "Menu/Menu Item",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const View = Template.bind({});
View.args = {
  imagePath: "/assets/pizza/manhattan.jpeg",
  price: 210,
  description: "Italian sausage, pepperoni, fresh basil, shaved parmesan",
  weight: 550,
  title: "manhattan",
};
