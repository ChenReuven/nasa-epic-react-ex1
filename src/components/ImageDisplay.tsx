export function ImageDisplay() {
  return (
    <div className="flex-grow flex justify-center items-center">
      <img
        className="max-w-[calc(100vh-200px)] max-h-[calc(100vh-200px)]"
        src="https://api.nasa.gov/EPIC/archive/natural/2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY"
        alt="NASA Earth Polychromatic"
      />
    </div>
  );
}
