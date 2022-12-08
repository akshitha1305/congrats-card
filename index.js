const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
      </div>
      <h1 className="profileName">Kiran V</h1>
      <p className="profileBio">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="watchImage"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
