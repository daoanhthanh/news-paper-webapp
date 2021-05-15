const baseurl = "http://localhost:1900/article";
function loadData(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseurl+"/all?category=Politic", true);
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var articles = JSON.parse(xmlhttp.responseText);
            var tbltop = `<table>
                            <tr> <th>Title</th>
                            <th>Short Intro</th>
                            
                             </tr>`;
            var main = "";
            for(i = 0; i < articles.length; i++){
                main += "<tr> <td>"+ articles[i].title+ "</td><td>" 
                + articles[i].shortIntro +"</td></tr>";
            }
            var tblbottom = "</table>";
            var tbl = tbltop + main + tblbottom;
            document.getElementById("article").innerHTML = tbl;  
        }
    };
    xmlhttp.send();
}
window.onload = function(){
    loadData();
}