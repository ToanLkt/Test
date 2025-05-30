import React from "react";

export default function FeedbackSection() {
  return (
    <section
      style={{
        maxWidth: "950px",
        margin: "0 auto 2rem auto",
        background: "#eaf0fb",
        padding: "2.2rem",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ color: "#2d98da", fontWeight: 800, marginBottom: 18 }}>Phản hồi từ người dùng</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 220, background: "#fff", borderRadius: 8, padding: "1.2rem", boxShadow: "0 1px 4px rgba(44,130,201,0.04)" }}>
          <strong>Nguyễn Văn A:</strong>
          <p style={{ margin: "8px 0" }}>"Nhờ website này, tôi đã bỏ thuốc thành công sau 10 năm hút thuốc. Cảm ơn đội ngũ rất nhiều!"</p>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" style={{ width: 48, height: 48, borderRadius: "50%" }} />
        </div>
        <div style={{ flex: 1, minWidth: 220, background: "#fff", borderRadius: 8, padding: "1.2rem", boxShadow: "0 1px 4px rgba(44,130,201,0.04)" }}>
          <strong>Trần Thị B:</strong>
          <p style={{ margin: "8px 0" }}>"Các tài liệu và cộng đồng hỗ trợ rất hữu ích, tôi cảm thấy không còn đơn độc trên hành trình này."</p>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" style={{ width: 48, height: 48, borderRadius: "50%" }} />
        </div>
        <div style={{ flex: 1, minWidth: 220, background: "#fff", borderRadius: 8, padding: "1.2rem", boxShadow: "0 1px 4px rgba(44,130,201,0.04)" }}>
          <strong>Lê Văn C:</strong>
          <p style={{ margin: "8px 0" }}>"Gói hỗ trợ chuyên sâu giúp tôi vượt qua những lúc khó khăn nhất. Rất đáng để thử!"</p>
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="user3" style={{ width: 48, height: 48, borderRadius: "50%" }} />
        </div>
      </div>
    </section>
  );
}