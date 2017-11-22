import React, { Component } from "react";
import API from "../../utils/API"

class Saved extends Component {

  state = {
    savedArticles: []
  }

  componentDidMount() {
    this.showSaved()
  }

  showSaved = () => {
    API.getSaved()
    .then(res => this.setState({savedArticles: res.data}))
  }
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>New York Times Article Scrubber</h1>
        </div>
        <div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            {this.state.savedArticles.map((value, i) =>(
            <div className="panel-body" key={i}>
              <div className="articleCard">
                <div className="articleTitle">
                  <h3>{value.title}</h3>
                </div>
                <div className="articleDate">
                  <p>{value.date}</p>
                </div>
                <button type="button" className="btn btn-info saveArticle" data-title={value.main} data-date={value.date} data-url={value.url} onClick={this.updateMongo}>Unsave Article</button>
                <a href={value.url} className="btn btn-info viewArticle" target="_blank" role="button">View Article</a>
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
    );
  }
}

export default Saved