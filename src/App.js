import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function News() {
  const [articles, setArticles] = useState([]);

  const Articles = () => {
    Axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=76c8470d15cf453fa45a0d00a6543412")
      .then((response) => {
        console.log(response);
        setArticles(response.data.articles);
      })
      
  }

  return (
    <>
      <div>
        <button onClick={Articles}>Get News</button>
      </div>
      <div className="container">
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card" style={{ width: '18rem' }}>
                {article.urlToImage ? (
                  <img src={article.urlToImage} className="card-img-top" alt="..." />
                ) : (
                  <div className="no-image-placeholder">No Image Available</div>
                )}
                <div className="card-body">
                  <p className="card-text">{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
