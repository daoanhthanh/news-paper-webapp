package vn.daoanhthanh.server.article;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import vn.daoanhthanh.server.comment.Comment;

//import javax.persistence.*;
//import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Entity
@Document(collection = "article")
public class Article {
    @Id
    private String id;
    private String title;
//    @Size
    private String shortIntro;
//    @Lob
//    @Column
    private String content;
//    private final LocalDate createdAt = LocalDate.now(ZoneId.systemDefault());
    private String author;
    @JsonProperty("relatedArticle")
    private List<String> relatedArticle;
    private String tag;
    private String category;

//    @OneToMany(mappedBy = "article", cascade = CascadeType.ALL) // Quan hệ 1-n với đối tượng ở dưới (Person) (1 địa điểm có nhiều người ở)
//    // MapopedBy trỏ tới tên biến Address ở trong Person.
//    @EqualsAndHashCode.Exclude // không sử dụng trường này trong equals và hashcode
//    @ToString.Exclude // Khoonhg sử dụng trong toString()
    @JsonProperty("comments")
    private List<Comment> comments;
}
