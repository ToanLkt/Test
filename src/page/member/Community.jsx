import React, { useState } from "react";
import Post from "./Post";
import Footer from "../../components/Footer";

export default function Community() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: "Hà Việt Thành",
            time: "2 giờ trước",
            content: "Mình đã bỏ thuốc được 1 tuần rồi, mình cảm thấy nhớ thuốc quá!",
            image: "",
            likes: 10,
            liked: false,
            comments: [
                { author: "Bạch Tấn Phú", text: "Gáng đi em" }
            ]
        }
    ]);
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    // Xử lý đăng bài mới
    const handlePost = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        setPosts([
            {
                id: Date.now(),
                author: "Bạn",
                time: "Vừa xong",
                content,
                image,
                likes: 0,
                liked: false,
                comments: []
            },
            ...posts
        ]);
        setContent("");
        setImage("");
    };

    // Xử lý like, report, comment
    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
                : post
        ));
    };

    const handleReport = (id) => {
        alert("Báo cáo bài viết thành công! (demo)");
    };

    const handleComment = (id, text) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, comments: [...post.comments, { author: "Bạn", text }] }
                : post
        ));
    };

    // Xử lý upload ảnh demo (chỉ lấy url, không upload thực)
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return setImage("");
        const reader = new FileReader();
        reader.onload = (ev) => setImage(ev.target.result);
        reader.readAsDataURL(file);
    };

    return (
        <div style={{ minHeight: "100vh", background: "#f5f6fa", padding: "2rem 0" }}>
            <div style={{
                maxWidth: 600,
                margin: "0 auto",
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(44,130,201,0.08)",
                padding: "1.5rem 1.2rem",
                marginBottom: 32
            }}>
                <h2 style={{ color: "#2d98da", textAlign: "center", marginBottom: 18 }}>Cộng đồng chia sẻ</h2>
                <form onSubmit={handlePost}>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Chia sẻ cảm nghĩ, kinh nghiệm hoặc đặt câu hỏi..."
                        rows={3}
                        style={{
                            width: "100%",
                            borderRadius: 8,
                            border: "1px solid #cfd8dc",
                            padding: "0.7rem",
                            fontSize: "1.05rem",
                            marginBottom: 10,
                            resize: "vertical"
                        }}
                    />
                    {image && (
                        <div style={{ marginBottom: 10 }}>
                            <img src={image} alt="preview" style={{ maxWidth: 180, borderRadius: 8 }} />
                        </div>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <label style={{
                            background: "#eaf6ff",
                            color: "#2d98da",
                            borderRadius: 6,
                            padding: "0.45rem 1rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            border: "1px solid #cfd8dc"
                        }}>
                            📷 Ảnh
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleImageChange}
                            />
                        </label>
                        <button
                            type="submit"
                            style={{
                                background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                                color: "#fff",
                                border: "none",
                                borderRadius: 6,
                                padding: "0.5rem 1.5rem",
                                fontWeight: 600,
                                fontSize: "1.05rem",
                                cursor: "pointer"
                            }}
                        >
                            Đăng bài
                        </button>
                    </div>
                </form>
            </div>
            {/* Danh sách bài viết */}
            <div>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        post={post}
                        onLike={() => handleLike(post.id)}
                        onReport={() => handleReport(post.id)}
                        onComment={text => handleComment(post.id, text)}
                    />
                )}
            </div>
            <Footer />
        </div>
    );

}