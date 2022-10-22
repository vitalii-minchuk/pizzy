export const Footer = () => {
  return (
    <footer className="bg-gray-900 p-12">
      <div>
        <div className="mb-4">
          <span className="uppercase font-semibold text-gray-400">
            Contacts
          </span>
        </div>
        <ul className="text-gray-300 text-sm">
          <li className="transition hover:text-gray-50">
            <a href="tel:7777777777">777 - 777 - 7777</a>
          </li>
          <li className="transition hover:text-gray-50">
            <a href="mailto:info@pizzy.com">info@pizzy.com</a>
          </li>
        </ul>
        <div className="w-full h-[1px] mx-[-10px] my-4 bg-gray-300" />
        <p className="uppercase font-semibold text-gray-200">🍕 pizzy</p>
      </div>
    </footer>
  );
};
