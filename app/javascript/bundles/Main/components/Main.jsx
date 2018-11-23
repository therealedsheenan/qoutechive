import PropTypes from 'prop-types';
import React from 'react';

export default class Main extends React.Component {
  static propTypes = {
    helloWorld: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    quotes: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        category: PropTypes.string,
        quote: PropTypes.string
      })
    )
  };

  static defaultProps = {
    quotes: [],
    helloWorld: {
      name: ''
    }
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.helloWorld.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    const { quotes } = this.props;
    return (
      <div>
        <h3>
          Hello, {this.state.name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
        <div className="quotes">
          {quotes.map((q) => (
            <div className="quotes-item" key={`${q.author} - ${q.quote}`}>
              <span>{q.category}</span>
              <p>{q.author}</p>
              <div className="quotes-block">
                <p>{q.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
