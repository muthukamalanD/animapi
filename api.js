let ranUrl="https://random-word-api.herokuapp.com/word?number=1"

var animeUrl ="https://api.jikan.moe/v3/search/anime?q=";

fetch(ranUrl)
  .then((res) => {
    return res.json();
  })
  .then((result) => {
    console.log(result);
    let code= result[0];
    return fetch(animeUrl+code);
  })
  .then((response)=>{
    return response.json();
  })
  .then((content)=>{
    console.log(content);
    display(content);
  })
  .catch((error) => {
    document.body.append(error);
  });

  function searchanime(){
    var search = document.getElementById("search").value;

    var animeUrl ="https://api.jikan.moe/v3/search/anime?q=" +search;
    
    fetch(animeUrl)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        display(result);
      })
      .catch((error) => {
        document.body.append(error);
      });
  }


  function display(data){

    var row=document.getElementById("row");

    data.results.forEach((element) => {

        var div = document.createElement("div");
        div.setAttribute("class","card")

        let cimg=document.createElement('img');
        cimg.setAttribute('class','card-img-top');
        cimg.src=element.image_url;

        var aUrl = document.createElement("a");
        aUrl.innerHTML = "Learn More"
        aUrl.href = element.url;
        aUrl.target= "_blank"
        
        var h3=document.createElement("h3");
        h3.setAttribute("class","title");
        h3.innerHTML =element.title;
        div.append(cimg,h3,aUrl);
        row.append(div);
    })
}