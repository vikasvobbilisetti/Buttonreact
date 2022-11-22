const Button = (props) => {
  const { head, b1, b2, b3 } = props;
  return (
    <div className="bg">
      <h1 className="mh1">head</h1>
      <div className="btnCont">
        <button className="bon1">b1</button>
        <button className="bon2">b2</button>
        <button className="bon3">b3</button>
      </div>
    </div>
  );
};

const element = (
  <Button head="Social Button" b1="Like" b2="comment" b3="share" />
);

ReactDOM.render(element, document.getElementById("root"));
