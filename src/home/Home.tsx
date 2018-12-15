import * as React from 'react';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="logo">Lekha Chitr</div>
          <nav>
            <a href="#">Explore</a>
          </nav>
        </header>

        <main>
          <section className="landing-top">
            <h1>Top</h1>
          </section>
          <section className="landing-list">
            <h1>List</h1>
          </section>
        </main>

        <footer>
          <p>Footer</p>
        </footer>
      </React.Fragment>
    );
  }
}
export default Main;
