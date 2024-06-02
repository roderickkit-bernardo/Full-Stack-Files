// Developer: Roderick Bernardo
// Purpose: Tailwind css demo

const divTwStyle = "w-full sm:w-1/2 md:w-1/4 px-4 mb-6 md:mb-0";
const h5TwStyle = "font-bold mb-4";
const liTwStyle = "mb-2";
const aTwStyle = "text-gray-300 hover:text-white";

const footerDataItems = [
  {
    columnTitle: "Column 1",
    listItems: [
      { linkText: "Link1", href: "#" },
      { linkText: "Link2", href: "#" },
    ],
  },
  {
    columnTitle: "Column 2",
    listItems: [
      { linkText: "Link1", href: "#" },
      { linkText: "Link2", href: "#" },
    ],
  },
  {
    columnTitle: "Column 3",
    listItems: [
      { linkText: "Link1", href: "#" },
      { linkText: "Link2", href: "#" },
    ],
  },
  {
    columnTitle: "Column 4",
    listItems: [
      { linkText: "Link1", href: "#" },
      { linkText: "Link2", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {footerDataItems.map((footerDataItem) => (
            <div class={divTwStyle}>
              <h5 class={h5TwStyle}>{footerDataItem.columnTitle}</h5>
              <ul>
                {footerDataItem.listItems.map((listItem) => (
                  <li class={liTwStyle}>
                    <a href={listItem.href} class={aTwStyle}>
                      {listItem.linkText}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
