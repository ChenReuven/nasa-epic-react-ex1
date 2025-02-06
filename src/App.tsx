import "./App.css";
import { Aside } from "./components/Aside";
import { ImageDisplay } from "./components/ImageDisplay";
import { Header } from "./components/Header";

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
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-gray-900  flex-grow flex">
        <Aside />
        <div className="flex-grow flex justify-center items-center bg-black">
          <ImageDisplay />
        </div>
        <div className="bg-gray-800 p-4" />
      </main>
      <footer className="bg-gray-800 text-white text-center p-4"></footer>
    </div>
  );
}

export default App;
