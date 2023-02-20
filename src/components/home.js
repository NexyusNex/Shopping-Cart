import "../style/home.css";
import clarkImg from "../images/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";

export default function Home() {
  return (
    <div className="home">
      <div
        className="home-background"
        style={{ backgroundImage: `url(${clarkImg})` }}
      ></div>
      <div className="content">
        <h1>Clothes for everyone</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          ante justo. Sed non justo ligula. Vestibulum sit amet lacus at ex
          ultricies rutrum. Sed pretium velit ac metus placerat lacinia. In at
          laoreet ex, sed faucibus ipsum.
        </p>
        <button>Shop now!</button>
      </div>
    </div>
  );
}
