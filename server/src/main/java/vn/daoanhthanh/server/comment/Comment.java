package vn.daoanhthanh.server.comment;

import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    private String id;
    private String displayName;
    private String content;
}
