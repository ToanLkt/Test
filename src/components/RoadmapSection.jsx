import React from "react";

export default function RoadmapSection() {
  return (
    <section
      id="lo-trinh"
      style={{
        maxWidth: "950px",
        margin: "0 auto 2rem auto",
        background: "#eaf6ff",
        padding: "2.2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 12px rgba(44,130,201,0.07)",
      }}
    >
      <h2 style={{ color: "#2d98da", fontWeight: 800, marginBottom: 18 }}>Lộ trình bỏ thuốc</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          <img
            src="https://cdn.prod.website-files.com/62196607bf1b46c300301846/6568ae443b83c8970807a066_tgumae817adlzfhcnuxn.webp"
            alt="Lộ trình"
            style={{ width: 220, maxWidth: "100%", marginBottom: 10 }}
          />
        </div>
        <div style={{ flex: 3, minWidth: 260 }}>
          <ol style={{ color: "#3867d6", fontSize: "1.05rem", marginLeft: 18 }}>
            <li>Đặt mục tiêu rõ ràng và cam kết bỏ thuốc</li>
            <li>Nhận tư vấn, xây dựng kế hoạch cá nhân hóa</li>
            <li>Tham gia cộng đồng, nhận động viên mỗi ngày</li>
            <li>Thực hiện các bài tập, hoạt động thay thế</li>
            <li>Ghi nhận tiến trình, nhận phần thưởng khi đạt mốc</li>
          </ol>
        </div>
      </div>
    </section>
  );
}