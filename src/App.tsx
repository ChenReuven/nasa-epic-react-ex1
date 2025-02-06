import "./App.css";
import { Aside } from "./components/Aside";
import { ImageDisplay } from "./components/ImageDisplay";
import { Header } from "./components/Header";
import { useState } from "react";
import { getAvailablePicturesForDate } from "./utils/nasa.util";

// This app is using the NASA API to display the earth polychromatic image.
// 1. choosing a date triggers an API call to fetch the available images for that date.
// 2. The items should be displayed in the Menu component.
// 3. Clicking on an item should display the image in the ImageDisplay component.
// Checkout /utils/nasa.util.ts for the API functions.

export interface Item {
  time: string;
  imageName: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleOndDateChange = async (date: string) => {
    const items = await getAvailablePicturesForDate(date);
    setItems(items);
  };

  const handleItemSelected = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-gray-900  flex-grow flex">
        <Aside
          onDateChange={handleOndDateChange}
          items={items}
          selectedItem={selectedItem}
          onItemSelected={handleItemSelected}
        />
        <div className="flex-grow flex justify-center items-center bg-black">
          <ImageDisplay selectedItem={selectedItem} />
        </div>
        <div className="bg-gray-800 p-4" />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4"></footer>
    </div>
  );
}

export default App;
