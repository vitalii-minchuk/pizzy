import { Header } from "@app/common/components/header/header.component";
import { Footer } from "@app/common/components/footer/footer.component";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import menuItems from "@app/mocks/pizza.json";

export const App = () => {
  return (
    <>
      <Header />
      <div className="px-2 mb-24">
        <MenuList items={menuItems} />
      </div>
      <Footer />
    </>
  );
};
