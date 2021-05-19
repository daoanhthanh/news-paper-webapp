package vn.daoanhthanh.server.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;
import vn.daoanhthanh.server.comment.Comment;

import java.util.Collection;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService{
//    @Autowired
    private final ArticleRepo repo;
//    @Autowired
    protected MongoTemplate mongoTemplate;

    @Autowired
    public ArticleServiceImpl(ArticleRepo repo, MongoTemplate mongoTemplate) {
        this.repo = repo;
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void pushComment(Comment comment) {

    }


    public List<Article> findArticleByCategory(String category) {
        return repo.findArticleByCategory(category);
    }

    public List<Article> findAll() {
        return repo.findAll();
    }

    public Article findById(String articleId) {
        return repo.findById(articleId).orElse(null);
    }

    public Article findArticleByTitle(String articleTitle) {
        return repo.findArticleByTitle(articleTitle);
    }

    public Collection<Article> saveAll(List<Article> articles) {
        return repo.saveAll(articles);
    }

    public Article save(Article article) {
        return repo.save(article);
    }
}
