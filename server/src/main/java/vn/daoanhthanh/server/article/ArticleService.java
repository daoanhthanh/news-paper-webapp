package vn.daoanhthanh.server.article;

import vn.daoanhthanh.server.comment.Comment;


public interface ArticleService {
    void pushComment(Comment comment);
//    List<String> listAllCategories();
}

