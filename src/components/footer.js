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
      <div className="subscribe-linkbox">
        <h3>About us</h3>
        <div className="links">
          <p>FAQ</p>
          <p>Our location</p>
          <p>History</p>
        </div>
      </div>
      <div className="subscribe-linkbox">
        <h3>Contact</h3>
        <div className="links">
          <p>Email</p>
          <p>Phone: +3812693546</p>
          <p>Github</p>
        </div>
      </div>
      <div className="subscribe-linkbox">
        <h3>Our brands</h3>
        <div className="links">
          <p>Nike</p>
          <p>Louis Vuitton</p>
          <p>Hermes</p>
        </div>
      </div>
    </div>
  );
}
