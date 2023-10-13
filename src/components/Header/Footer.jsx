import Nav from "react-bootstrap/Nav";
import "./footer.css";

function BasicExample() {
  return (
    <div>
      <li className="footer">
        <h4 className="home-footer">
          <Nav.Link href="/">Rocky Bikes</Nav.Link>
        </h4>
        <h5>
          <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
        </h5>
        <h5>
          <Nav.Link href="https://facebook.com">Facebook</Nav.Link>{" "}
        </h5>
      </li>
    </div>
  );
}

export default BasicExample;
