import "../style/footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="subscribe-box">
        <h2>Subscribe to our newsletter!</h2>
        <p>Enter your email and you'll get access to exclusive sales!</p>
        <div className="subscribe-input">
          <input type="email" name="email"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
