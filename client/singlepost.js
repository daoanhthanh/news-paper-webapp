
// var article;
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
const articleTitle = urlParams.get('title');
console.log(articleId);
console.log(articleTitle);

async function getNews(articleId) {
    const base = await `http://localhost:1900/article/${articleId}`;
    let response = await fetch(base);

    article = await response.json();
}


async function renderData() {
    
    await getNews(articleId);

    var author = document.querySelector('#author');
    var z = document.createTextNode(article.author); // is a node
    author.appendChild(z);

    var tags = document.querySelector('.tags');
    tags.appendChild(document.createTextNode(article.tag));
    
    var category = document.querySelector('#category');
    category.appendChild(document.createTextNode(article.category))

    var title = document.querySelector('#articleTitle');
    title.appendChild(document.createTextNode(article.title));

    var title2 = document.querySelector('#articletitle');
    title2.appendChild(document.createTextNode(article.title));

    var content1 = document.querySelector('#shortintro');
    content1.appendChild(document.createTextNode(article.shortIntro));

    var content = document.querySelector('#content');
    content.appendChild(document.createTextNode(article.content));

    let anh = document.querySelector('.image');
    let img = document.createElement('img');
    img.src = 'images/'+ articleId + '.jpg';
    anh.appendChild(img);


    // related posts
    var relatedArticle = document.querySelector('.related_posts');
    let rp = article.relatedArticle;
    for (let i = 0; i <rp.length; i++){
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = rp[i];
        a.href=`./singlepost.html?title=${rp[i]}`;
        li.appendChild(a)
        relatedArticle.appendChild(li);
    }

    // comment
    var comments = document.querySelector('.container');
    let cmts = article.comments;
    for(let i = 0; i < cmts.length; i++){
        let div1 = document.createElement('div');
        div1.style.marginLeft = '25px';
        div1.style.marginTop = '10px';
        div1.class = 'dialogbox';
        let div2 = document.createElement('div');
        div2.class = 'body';
        let div3 = document.createElement('div');
        div3.class = 'message';
        let span1 = document.createElement('span');
        span1.class = 'tip tip-up';
        let span2 = document.createElement('span');
        span2.id = 'comment_content';
        let h3 = document.createElement('h3');
        h3.id = 'comment_displayname';

        h3.textContent = cmts[i].displayName;
        span2.textContent = cmts[i].content;
        
        div3.appendChild(span2);
        div2.appendChild(span1)
        div2.appendChild(h3);
        div2.appendChild(div3);
        div1.appendChild(div2);
        comments.appendChild(div1);


    }
}







renderData();



