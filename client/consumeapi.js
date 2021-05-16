

async function getNews(category) {
    // console.log(category)
    // http://dataservice.accuweather.com/forecasts/v1/daily/1day/353412?categorykey=xI8DEqgQCyLKgiwVvS6jT2KryVg13v6t&language=vi-vn
    const base = await `http://localhost:1900/article/all?category=${category}`;
    let response = await fetch(base);

    articles = await response.json();

}



// Politics
async function po() {
    const politic = document.querySelector(".ourserv");
    await getNews('Politic');//dược r
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        article.class = 'politic';

        //thé bảo chưa gọi ở đâu :))
        // t bịk lỗi ở đau thế?
        //không gọi trong áync function thì nó bị pengà, hiểu r c <3 OK i//ng mãi


        let h1 = document.createElement('h1');
        h1.textContent = articles[i].title;
        let img = document.createElement('img');
        img.src = 'images/1.jpg';
        let p = document.createElement('p');
        p.textContent = articles[i].shortIntro;


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
}



// Covid-19
async function co() {
    const covid = document.querySelector("#covid");
    // console.log(politic);
    // article_array = await getNews("Politic");
    // console.log(article_array);
    await getNews('Covid-19');//dược r
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        article.class = 'covid';

        //thé bảo chưa gọi ở đâu :))
        // t bịk lỗi ở đau thế?
        //không gọi trong áync function thì nó bị pengà, hiểu r c <3 OK i//ng mãi


        let h1 = document.createElement('h1');
        h1.textContent = articles[i].title;
        let img = document.createElement('img');
        img.src = 'images/2s.jpg';
        let p = document.createElement('p');
        p.textContent = articles[i].shortIntro;


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
        covid.appendChild(article);


    }
}


// Business
async function bu() {
    const business = document.querySelector("#business");
    // console.log(politic);
    // article_array = await getNews("Politic");
    // console.log(article_array);
    await getNews('Business');//dược r
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        article.class = 'covid';

        //thé bảo chưa gọi ở đâu :))
        // t bịk lỗi ở đau thế?
        //không gọi trong áync function thì nó bị pengà, hiểu r c <3 OK i//ng mãi


        let h1 = document.createElement('h1');
        h1.textContent = articles[i].title;
        let img = document.createElement('img');
        img.src = 'images/2s.jpg';
        let p = document.createElement('p');
        p.textContent = articles[i].shortIntro;


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
        business.appendChild(article);


    }
}


// Technology
async function tech() {
    const tech = document.querySelector("#technology");
    await getNews('Technology');
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        article.class = 'covid';

        //thé bảo chưa gọi ở đâu :))
        // t bịk lỗi ở đau thế?
        //không gọi trong áync function thì nó bị pengà, hiểu r c <3 OK i//ng mãi


        let h1 = document.createElement('h1');
        h1.textContent = articles[i].title;
        let img = document.createElement('img');
        img.src = 'images/3s.jpg';
        let p = document.createElement('p');
        p.textContent = articles[i].shortIntro;


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
        tech.appendChild(article);


    }
}

//Science
async function sci() {
    const science = document.querySelector("#science");
    // console.log(politic);
    // article_array = await getNews("Politic");
    // console.log(article_array);
    await getNews('Science');//dược r
    console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        let article = document.createElement('article');
        article.class = 'covid';

        //thé bảo chưa gọi ở đâu :))
        // t bịk lỗi ở đau thế?
        //không gọi trong áync function thì nó bị pengà, hiểu r c <3 OK i//ng mãi


        let h1 = document.createElement('h1');
        h1.textContent = articles[i].title;
        let img = document.createElement('img');
        img.src = 'images/pbs2.jpg';
        let p = document.createElement('p');
        p.textContent = articles[i].shortIntro;


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
        science.appendChild(article);


    }
}

po();
co();
bu();
tech();
sci();

// renderNews("Politic");





//t đang gọi c đáy
//chỗ t đang ồn k nghe được