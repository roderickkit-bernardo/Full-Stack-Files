const linkTwStyle = "text-gray-300 hover:text-white";
const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Contact" },
];

function Header() {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">Brand</div>
        <div class="md:flex space-x-4">
          {navItems.map((navItem) => (
            <a href={navItem.href} class={linkTwStyle}>
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
