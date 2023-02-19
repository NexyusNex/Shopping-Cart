import "../style/home.css";
import clarkImg from "../images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";

export default function Home() {
  return (
    <div className="home">
      <div
        className="content"
        style={{ backgroundImage: `url(${clarkImg})` }}
      ></div>
      <div className="content-text">
        <h1>Clothes for everyone</h1>
      </div>
    </div>
  );
}
