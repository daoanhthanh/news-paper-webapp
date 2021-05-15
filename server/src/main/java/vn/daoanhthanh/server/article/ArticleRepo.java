package vn.daoanhthanh.server.article;

//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepo extends MongoRepository<Article, String> {
//    @Query(value = "SELECT * FROM article WHERE category = ?1",
//    nativeQuery = true)
    @Query("{category:  '?0'  }")
    List<Article> findArticleByCategory(String category);
}
