import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <img
            src="/images/logo-small.svg"
            alt="Icon of a stack of papers as the app logo"
          />
          <h1>Flashcard</h1>
        </div>
        <nav className="nav-container">
          <button className="study-mode-button">Study Mode</button>
          <button className="all-cards-button">All Cards</button>
        </nav>
      </header>
      <main>
        <section className="flash-card-container">
          <header className="flash-card-navigation">
            <div className="categories-and-shuffle-container">
              <div className="categories-button-and-categories-container">
                <button className="categories-button">
                  <span className="categories-button-text">All Categories</span>
                  <img
                    src="/images/icon-chevron-down.svg"
                    alt="Chevron icon pointing down"
                  />
                </button>
                <ul className="categories-container">
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Art (1)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      CSS (6)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Geography (4)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      History (1)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      HTML (3)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      JavaScript (14)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Literature (1)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Mathematics (1)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Programming Concepts (1)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Science (3)
                    </label>
                  </li>
                  <li className="category">
                    <label>
                      <input type="checkbox" />
                      Web Development (5)
                    </label>
                  </li>
                </ul>
              </div>
              <button className="shuffle-button">
                <img src="/images/icon-shuffle.svg" alt="Shuffle icon" />
                <span className="shuffle-button-text">Shuffle</span>
              </button>
            </div>
            <lable className="hide-mastered-checkbox">
              <input type="checkbox" />
              Hide Mastered
            </lable>
          </header>
          <main className="flash-card-and-buttons">
            <div className="flash-card">
              <img
                src="/images/pattern-star-blue.svg"
                alt="Blue colored start"
                className="blue-star"
              />
              <img
                src="/images/pattern-star-yellow.svg"
                alt="Yellow colored start"
                className="yellow-star"
              />
              <div className="flash-card-category">
                <p className="flash-card-category-text">Web Development</p>
              </div>
              <div className="flashcard-main-text-and-link">
                <p className="flashcard-main-text">What does HTML stand for?</p>
                <a className="flashcard-link" href="#">
                  Click to reveal answer.
                </a>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-outer">
                  <div className="progress-bar-inner"></div>
                </div>
                <div className="progress">0/5</div>
              </div>
            </div>
            <div className="progress-buttons">
              <button className="know-button">
                <img
                  src="/images/icon-circle-check.svg"
                  alt="Circle checkmark icon"
                />
                <span className="know-button-text">I Know This</span>
              </button>
              <button className="reset-button">
                <img
                  src="/images/icon-reset.svg"
                  alt="Counterclockwise arrow icon"
                />
                <span className="reset-button-text">Reset Progress</span>
              </button>
            </div>
          </main>
          <footer className="flash-card-footer"></footer>
        </section>
        <section className="stats-container">
          <h2 className="stats-heading">Study Statistics</h2>
          <div className="stats-categories">
            <div className="stats-category">
              <div className="stats-total">
                <p className="stats-text">Total Cards</p>
                <p className="stats-number">40</p>
              </div>
              <div className="stats-total">
                <img
                  src="/images/icon-stats-total.svg"
                  alt="Icon of stack of papers"
                />
              </div>
            </div>
            <div className="stats-category">
              <div className="stats-total">
                <p className="stats-text">Mastered</p>
                <p className="stats-number">11</p>
              </div>
              <div className="stats-total">
                <img
                  src="/images/icon-stats-mastered.svg"
                  alt="Icon of a brain outline."
                />
              </div>
            </div>
            <div className="stats-category">
              <div className="stats-total">
                <p className="stats-text">In Progress</p>
                <p className="stats-number">21</p>
              </div>
              <div className="stats-total">
                <img
                  src="/images/icon-stats-in-progress.svg"
                  alt="Icon of an open book"
                />
              </div>
            </div>
            <div className="stats-category">
              <div className="stats-total">
                <p className="stats-text">Not Started</p>
                <p className="stats-number">8</p>
              </div>
              <div className="stats-total">
                <img
                  src="/images/icon-stats-not-started.svg"
                  alt="Icon of a folder tray"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
