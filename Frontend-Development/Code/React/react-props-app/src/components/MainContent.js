// Developer: Roderick Bernardo
// Purpose: React props demo

function MainContent(props) {
  return (
    <div className="mainContent">
      <h2>{props.mainContentData.title}</h2>
      <p>{props.mainContentData.p1}</p>
      <p>{props.mainContentData.p2}</p>
      <p>{props.mainContentData.p3}</p>
    </div>
  );
}

export default MainContent;
