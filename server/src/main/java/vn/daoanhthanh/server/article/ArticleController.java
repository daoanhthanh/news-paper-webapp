package vn.daoanhthanh.server.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/article", method = RequestMethod.GET)
public class ArticleController {
    private final ArticleServiceImpl service;

    @Autowired
    public ArticleController(ArticleServiceImpl service){
        this.service = service;
    }

    @GetMapping("/all")
    public List<Article> findAll(@RequestParam(required = false) String category){
        if(category != null){
            return service.findArticleByCategory(category);
        }
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Article findArticleById(@PathVariable("id") String articleId ){
        return service.findById(articleId);
    }

    @GetMapping("/title/{title}")
    public Article findArticleByTitle(@PathVariable("title") String articleTitle){
        return service.findArticleByTitle(articleTitle);
    }

    @GetMapping("/categories")
    public List<String> returnAllCategory(){
        return null;
    }

    @PostMapping("/addAll")
    public Collection<Article> addAll(@RequestBody List<Article> articles){
        return service.saveAll(articles);
    }

    @PostMapping("/add")
    public Article add(@RequestBody Article article){
        return service.save(article);
    }






}
