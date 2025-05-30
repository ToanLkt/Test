import React from "react";

export default function IntroSection() {
  return (
    <section
      id="gioithieu"
      style={{
        maxWidth: "950px",
        margin: "0 auto 2rem auto",
        background: "#fff",
        padding: "2.2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 12px rgba(44,130,201,0.07)",
        display: "flex",
        gap: "2.5rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 260 }}>
        <h2 style={{ color: "#2d98da", fontWeight: 800, marginBottom: 10 }}>Giới thiệu</h2>
        <p style={{ fontSize: "1.08rem", marginBottom: 10 }}>
          Website của chúng tôi cung cấp các công cụ, tài liệu, chuyên gia và cộng đồng hỗ trợ giúp bạn từ bỏ thuốc lá một cách hiệu quả. Hãy bắt đầu hành trình sống khỏe mạnh cùng chúng tôi ngay hôm nay!
        </p>
        <ul style={{ color: "#3867d6", fontSize: "1rem", marginLeft: 18, marginBottom: 0 }}>
          <li>✔️ Theo dõi tiến trình bỏ thuốc từng ngày</li>
          <li>✔️ Nhận tư vấn từ chuyên gia và cộng đồng</li>
          <li>✔️ Tài liệu, bài tập và mẹo bỏ thuốc hiệu quả</li>
          <li>✔️ Động viên, chia sẻ kinh nghiệm thực tế</li>
        </ul>
      </div>
      <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
        <img
          src="https://vsh.org.vn/pic/News/images/d11re.jpg"
          alt="No Smoking"
          style={{ width: 280, maxWidth: "100%" }}
        />
      </div>
    </section>
  );
}