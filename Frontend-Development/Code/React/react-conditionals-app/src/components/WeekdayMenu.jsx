// Developer: Roderick Bernardo
// Purpose: React conditionals demo

function WeekdayMenu() {
  const menuConfig = {
    title: "Weekday Specials",
    items: [
      { text: "🍳 Breakfast" },
      { text: "🍱 Lunch" },
      { text: "🍽️ Dinner" },
    ],
  };

  const fillerText =
    "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

  return (
    <main>
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">{menuConfig.title}</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {menuConfig.items.map((item, itemIndex) => (
            <div key={`${item.text}${itemIndex}`} className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
              <h3 className="fs-2 text-body-emphasis">{item.text}</h3>
              <p>{fillerText}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default WeekdayMenu;
