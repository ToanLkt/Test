import React, { useState } from "react";
import Rating from "./Rating";
import Footer from "../../components/Footer";

const initialFeedbacks = [
    {
        name: "Bạch Nguyệt Quang",
        rating: 5,
        comment: "Website rất hữu ích, tôi đã tìm được Bạch Tấn Phú nhờ bỏ thuốc.",
        time: "2 ngày trước"
    },
    {
        name: "Hà Việt Thành",
        rating: 4,
        comment: "Mình rất thích chức năng cộng đồng, mọi người hỗ trợ nhau rất tốt.",
        time: "1 ngày trước"
    }
];

export default function Feedback() {
    const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;
        setFeedbacks([
            {
                name,
                rating,
                comment,
                time: "Vừa xong"
            },
            ...feedbacks
        ]);
        setName("");
        setRating(5);
        setComment("");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
    };

    return (
        <div style={{ minHeight: "100vh", background: "#f5f6fa", padding: "2rem 0" }}>
            <div style={{
                maxWidth: 520,
                margin: "0 auto",
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 2px 16px rgba(44,130,201,0.10)",
                padding: "2rem 1.5rem"
            }}>
                <h2 style={{ textAlign: "center", color: "#2d98da", marginBottom: 18 }}>Đánh giá & Góp ý</h2>
                {/* Rating riêng */}
                <div style={{
                    marginBottom: 28,
                    background: "#f7f9fc",
                    borderRadius: 8,
                    padding: "1.2rem 1rem"
                }}>
                    <div style={{ fontWeight: 600, color: "#3867d6", marginBottom: 8 }}>Đánh giá website</div>
                    <Rating value={rating} onChange={setRating} />
                </div>
                {/* Feedback form */}
                <form onSubmit={handleSubmit} style={{ marginBottom: 28 }}>
                    <div style={{ marginBottom: 14 }}>
                        <label style={{ fontWeight: 500, color: "#3867d6" }}>Tên của bạn</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nhập tên của bạn"
                            style={{
                                width: "100%",
                                padding: "0.7rem",
                                borderRadius: 6,
                                border: "1px solid #cfd8dc",
                                marginTop: 6,
                                fontSize: "1rem"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 14 }}>
                        <label style={{ fontWeight: 500, color: "#3867d6" }}>Nội dung góp ý</label>
                        <textarea
                            required
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            placeholder="Viết đánh giá hoặc góp ý cho website..."
                            rows={3}
                            style={{
                                width: "100%",
                                borderRadius: 8,
                                border: "1px solid #cfd8dc",
                                padding: "0.7rem",
                                fontSize: "1.05rem",
                                marginTop: 6,
                                resize: "vertical"
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: 6,
                            padding: "0.7rem",
                            fontWeight: 600,
                            fontSize: "1.08rem",
                            cursor: "pointer"
                        }}
                    >
                        Gửi feedback
                    </button>
                    {success && (
                        <div style={{ color: "#27ae60", textAlign: "center", marginTop: 10 }}>
                            Cảm ơn bạn đã gửi feedback!
                        </div>
                    )}
                </form>
                {/* Danh sách feedback */}
                <h3 style={{ color: "#2d98da", marginBottom: 14, fontSize: "1.15rem" }}>Phản hồi từ người dùng</h3>
                <div style={{ maxHeight: 300, overflowY: "auto", paddingRight: 6 }}>
                    {feedbacks.length === 0 && (
                        <div style={{ color: "#888", textAlign: "center" }}>Chưa có feedback nào.</div>
                    )}
                    {feedbacks.map((fb, idx) => (
                        <div
                            key={idx}
                            style={{
                                background: "#f7f9fc",
                                borderRadius: 8,
                                padding: "1rem",
                                marginBottom: 14,
                                boxShadow: "0 1px 4px rgba(44,130,201,0.04)"
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
                                <span style={{
                                    background: "#2d98da",
                                    color: "#fff",
                                    borderRadius: "50%",
                                    width: 32,
                                    height: 32,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    marginRight: 10
                                }}>
                                    {fb.name[0].toUpperCase()}
                                </span>
                                <span style={{ fontWeight: 600 }}>{fb.name}</span>
                                <span style={{ color: "#888", fontSize: 13, marginLeft: 10 }}>{fb.time}</span>
                            </div>
                            <Rating value={fb.rating} readOnly size={20} />
                            <div style={{ marginTop: 6, fontSize: "1.02rem" }}>{fb.comment}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}