import axios from "axios";

export default {
  getArticles: function(data){
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const apiKey = "29ed581c318746d1b179256dda779848";

    return axios.get(url, {
      params: {
        'q': data.query,
        'begin_date': `${data.startDate}0101`,
        'end_date': `${data.endDate}1231`,
        'api-key': apiKey,
      }
    }).then(function(response){
      return response
    }).catch(function(err){
      console.log(err)
    })
  },
  getSaved: function(data){
    return axios.get("/api/article")
    .then(function(res){
      return res
    })
  },
  postArticle: function(obj){
    axios.post("/api/article/saved",{
      title: obj.title,
      date: obj.date,
      url: obj.url
    }).then(function(res){
      console.log(res)
    })
  }
}