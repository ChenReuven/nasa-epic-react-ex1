export function Menu() {
  return (
    <div className="text-white pt-4 h-full">
      <ul className="flex flex-col gap-2">
        <li className="bg-red-800 p-2 cursor-pointer hover:bg-red-600">07:45</li>
        <li className="bg-red-600 p-2 cursor-pointer hover:bg-red-600">09:33</li>
        <li className="bg-red-800 p-2 cursor-pointer hover:bg-red-600">12:22</li>
      </ul>
    </div>
  );
}
