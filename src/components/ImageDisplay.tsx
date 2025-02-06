import { Item } from "../App";
import { getImage } from "../utils/nasa.util";

interface ImageDisplayProps {
  selectedItem: Item | null;
}

export function ImageDisplay({ selectedItem }: ImageDisplayProps) {
  if (!selectedItem) {
    return (
      <div className="flex-grow flex justify-center items-center">
        <p className="text-white text-2xl">No image selected</p>
      </div>
    );
  }

  const imageUrl = getImage(selectedItem);
  return (
    <div className="flex-grow flex justify-center items-center">
      <img
        className="max-w-[calc(100vh-200px)] max-h-[calc(100vh-200px)]"
        src={imageUrl}
        alt="NASA Earth Polychromatic"
      />
    </div>
  );
}
