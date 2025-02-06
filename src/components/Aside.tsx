import { DatePicker } from "./DatePicker";
import { Menu } from "./Menu";

export function Aside() {
  return (
    <div className="w-48 bg-gray-800 text-white p-4 flex flex-col">
      <DatePicker />
      <div className="flex-grow overflow-auto h-[calc(100vh-200px)] mt-2">
        <Menu />
      </div>
    </div>
  );
}
