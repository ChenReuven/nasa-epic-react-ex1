import logo from "./../nasa-logo-web-rgb.webp";

export function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={logo} className="h-12 inline-block rounded-full" alt="logo" />
        <div>NASA Earth Polychromatic</div>
      </div>
    </header>
  );
}
