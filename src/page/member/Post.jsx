import React, { useState } from "react";

export default function Post({ post, onLike, onReport, onComment }) {
    const [commentText, setCommentText] = useState("");
    return (
        <div style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 2px 8px rgba(44,130,201,0.07)",
            padding: "1.2rem",
            marginBottom: 24,
            maxWidth: 540,
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                <span style={{
                    background: "#2d98da",
                    color: "#fff",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 18,
                    marginRight: 10
                }}>
                    {post.author[0].toUpperCase()}
                </span>
                <span style={{ fontWeight: 600 }}>{post.author}</span>
                <span style={{ color: "#888", fontSize: 13, marginLeft: 12 }}>{post.time}</span>
            </div>
            <div style={{ marginBottom: 10, fontSize: "1.08rem" }}>{post.content}</div>
            {post.image && (
                <img src={post.image} alt="post" style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 10 }} />
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 8 }}>
                <button
                    onClick={onLike}
                    style={{
                        background: "none",
                        border: "none",
                        color: post.liked ? "#e74c3c" : "#888",
                        fontSize: 20,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    ❤️ <span style={{ marginLeft: 4, fontSize: 15 }}>{post.likes}</span>
                </button>
                <button
                    onClick={onReport}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#e67e22",
                        fontSize: 18,
                        cursor: "pointer"
                    }}
                    title="Báo cáo bài viết"
                >
                    🚩
                </button>
            </div>
            {/* Comments */}
            <div style={{ marginTop: 10 }}>
                <div style={{ fontWeight: 500, color: "#3867d6", marginBottom: 6 }}>Bình luận</div>
                {post.comments.map((c, idx) => (
                    <div key={idx} style={{ marginBottom: 8, paddingLeft: 6 }}>
                        <span style={{ fontWeight: 600 }}>{c.author}:</span>{" "}
                        <span>{c.text}</span>
                    </div>
                ))}
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (commentText.trim()) {
                            onComment(commentText);
                            setCommentText("");
                        }
                    }}
                    style={{ display: "flex", gap: 8, marginTop: 4 }}
                >
                    <input
                        type="text"
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        placeholder="Viết bình luận..."
                        style={{
                            flex: 1,
                            padding: "0.5rem",
                            borderRadius: 6,
                            border: "1px solid #cfd8dc",
                            fontSize: "1rem"
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            background: "#2d98da",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "0.5rem 1.1rem",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    );
}