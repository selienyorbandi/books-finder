import "./styles.css";

function Loader() {
  return (
    <div className="loader_wrapper">
      <ul>
        <li className="loader_part first"></li>
        <li className="loader_part second"></li>
        <li className="loader_part third"></li>
        <li className="loader_part fourth"></li>
        <li className="loader_part fifth"></li>
        <li className="loader_part sixth"></li>
      </ul>
      <div className="shelf"></div>
    </div>
  );
}
export default Loader;
