import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      redirect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState( { redirect: true });
  }

  handleInput(e) {
    this.setState( { inputVal: e.currentTarget.value });
  }

  matches() {
    // console.log(this.props.names);
    const results = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names.sort();
    }
    
    this.props.names.forEach(name => {
      let section = name[0].slice(0, this.state.inputVal.length);
      if (section.toLowerCase() === this.state.inputVal.toLowerCase()) {
        results.push(name);
      }
    });

    if (results.length === 0) {
      results.push(['No results found...']);
    }

    return results;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  render() {
    if (this.props.names && this.state.redirect && this.matches().length) {
      return (
        <div>
          <Redirect to={`/businesses`}/>
          {this.setState({
            inputVal: '',
            redirect: false,
          })}
        </div>
      )
    }

    const results = this.matches().map(( result, i ) => {
      if (i < 5) {
        return (
          <Link key={i} to={`/businesses/${result[1]}`}>
            <li key={i} onClick={this.selectName}>{result[0]}</li>
          </Link>
        );
      }
    });


    if (!this.props.names) return null;
    return(
      <div className="parent-search-container">

        <div className="search-bar-container">

          <input 
            className="search-bar"
            type="search" 
            placeholder="noodles, Chinese, Rintaro..." 
            onChange={this.handleInput}
            value={this.state.inputVal}
            onKeyDown={(e) => (e.which == 13 ? this.handleSubmit(e) : null) } 
          />

          <button className="search-bar-button" onClick={(e) => this.handleSubmit(e)}>
            <div className="search-bar-icon"/>
          </button>

          <ul className="floating-list">
            {results}
            <Link to={'/businesses'}>
              <li className="more-biz" onClick={this.selectName}>CHECK OUT MORE BUSINESSES HERE...</li>
            </Link>
          </ul>
        </div>
      </div>
    )
  }
};

export default Search;