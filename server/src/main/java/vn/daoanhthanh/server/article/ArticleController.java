package vn.daoanhthanh.server.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/article")
public class ArticleController {
    private final ArticleRepo repo;

    @Autowired
    public ArticleController(ArticleRepo repo){
        this.repo = repo;
    }

    @GetMapping("/all")
    public List<Article> findAll(@RequestParam(required = false) String category){
        if(category != null){
            return repo.findArticleByCategory(category);
        }
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Article findArticleById(@PathVariable("id") String articleId ){
        return repo.findById(articleId).orElse(null);
    }

    @PostMapping("/addAll")
    public Collection<Article> addAll(@RequestBody List<Article> articles){
        return repo.saveAll(articles);
    }

    @PostMapping("/add")
    public Article add(@RequestBody Article article){
        return repo.save(article);
    }




}
