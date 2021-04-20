import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      query: "",
      results: [],
      resultCount: 0,
      per_page: 20,
      pageNum: 1,
      pageMax: 1
    }
  }

  search = (e) => {
    e.preventDefault()
    let searchField = this.refs.searchField.value;
    this.setState({query: searchField});
    axios.get(`https://api.github.com/search/users?q=${searchField}&page=${this.state.pageNum}&per_page=${this.state.per_page}`)
      .then((results) => this.setState({
        results: results.data.items,
        resultCount: results.data.total_count,
        pageMax: Math.floor(results.data.total_count/this.state.per_page)},
        console.log(results)))
      .catch((error) => console.log(error.message))
  }

  clear = () => {
    this.refs.searchField.value = ""
    this.setState({query: "", results: [], pageMax: 0, pageNum: 1, per_page: 20})
  }

  handlePage = (e) => {
    this.setState({pageNum: e.target.value})
  }

  handleResultNum = (e) => {
    this.setState({per_page: e.target.value})
  }

  render(){
    return(
      <section className="container">
        <div>
          <h3>Search here:</h3>
        </div>
        <div>
          <form>
            <div className="row">
              <div className="col s10">
                <input type="text" placeholder="Search here...." ref="searchField" />
                <label for="last_name">Search User</label>
              </div>
              <div className="col s1">
                <input type="number" placeholder="Page Number" onChange={this.handlePage} defaultValue="1" min="2" max={this.state.pageMax} />
                <label for="page_number">Page Number</label>
              </div>
              <div className="col s1">
                <input type="number" placeholder="Results per page" onChange={this.handleResultNum} defaultValue="20" min="10" max="40" />
                <label for="results_per_page">Results per page</label>
              </div>
            </div>
            <div className="row">
              <input className="btn" type="submit" value="Search" onClick={this.search} style={{marginRight: "10px"}}/>
              <input className="btn red lighten-3" type="button" value="Clear" onClick={this.clear} />
            </div>
          </form>
        </div>
        {this.state.results.length > 0 &&
          <div>
            <h4>Showing results for "{this.state.query}" <i style={{color: "grey"}}>({this.state.resultCount} results)</i></h4>

            <ul>
              {this.state.results.map((entry) =>
                <li key={entry.id} className="row">
                  <Link
                    to={{
                    pathname: "/user",
                    login: entry.login
                  }}>
                  <div className="col s2">
                    <img src={entry.avatar_url} width="100%" style={{borderRadius: "5px"}}/>
                  </div>
                  <div className="col s10">
                    <h5>{entry.login} - {entry.score}</h5>
                  </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        }
        {this.state.results.length == 0 &&
          <h5><i>No results to show....</i></h5>
        }
      </section>
    )
  }
}

export default Search
