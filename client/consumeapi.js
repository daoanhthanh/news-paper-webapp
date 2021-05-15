

// const baseurl = "http://localhost:1900/article/all";
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", baseurl+"/all", true);
// var articles = JSON.parse(xmlhttp.responseText);



async function getNews(category) {
    console.log(category)
    // http://dataservice.accuweather.com/forecasts/v1/daily/1day/353412?categorykey=xI8DEqgQCyLKgiwVvS6jT2KryVg13v6t&language=vi-vn
    const base = await `http://localhost:1900/article/all?category=${category}`;
    let response = await fetch(base);

    let articles = await response.json();
    return articles;
}


getNews("Politic").then(articles => console.log(articles[2].title))


// console.log(data)


const politic = document.querySelector("#ourserv");
console.log(politic);
for(let i=0; articles.length; i++){
    let article = document.createElement('article');
    article.class = 'politic';


    let h1 = document.createElement('h1');
    h1.textContent = "he";
    let img = document.createElement('img');
    img.src = 'images/1.jpg';
    let p = document.createElement('p');
    let img_div = document.createElement('div');

    let a = document.createElement('a');

    img_div.class = 'rm';
    a.textContent = 'Read More';
    a.href = 'fullwidth.html';
    img_div.appendChild(a);

    article.appendChild(h1);
    article.appendChild(img);
    article.appendChild(p);
    article.appendChild(a);
    politic.appendChild(article);


}



