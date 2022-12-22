import FoodItem from "./FoodItem";

const Menu = ({ menuItems }) => {
  console.log(menuItems);
  if (!menuItems) return null;

  return (
    <>
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {Object.values(menuItems).map((item) => (
              <FoodItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
