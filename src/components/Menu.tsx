import { Item } from "../App";

export interface MenuProps {
  items: Item[];
  selectedItem: Item | null;
  onItemSelected: (item: Item) => void;
}

export function Menu({ items, selectedItem, onItemSelected }: MenuProps) {
  
  return (
    <div className="text-white pt-4 h-full">
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.time}
            className={`p-2 cursor-pointer hover:bg-red-600 ${
              selectedItem?.time === item.time ? "bg-red-600" : "bg-red-800"
            }`}
            onClick={() => onItemSelected(item)}
          >
            {item.time.split(" ")[1]}
          </li>
        ))}
      </ul>
    </div>
  );
}
