import { Item } from "../App";
import { DatePicker } from "./DatePicker";
import { Menu } from "./Menu";

interface AsideProps {
  onDateChange: (date: string) => void;
  onItemSelected: (item: Item) => void;
  items: Item[];
  selectedItem: Item | null;
}

export function Aside({
  items,
  onDateChange,
  selectedItem,
  onItemSelected,
}: AsideProps) {
  return (
    <div className="w-48 bg-gray-800 text-white p-4 flex flex-col">
      <DatePicker onChange={onDateChange} />
      <div className="flex-grow overflow-auto h-[calc(100vh-200px)] mt-2">
        <Menu
          items={items}
          selectedItem={selectedItem}
          onItemSelected={onItemSelected}
        />
      </div>
    </div>
  );
}
