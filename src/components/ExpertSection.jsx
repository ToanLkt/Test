import React from "react";

export default function ExpertSection() {
  return (
    <section
      id="chuyen-gia"
      style={{
        maxWidth: "950px",
        margin: "0 auto 2rem auto",
        background: "#fff",
        padding: "2.2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 12px rgba(44,130,201,0.07)",
      }}
    >
      <h2 style={{ color: "#2d98da", fontWeight: 800, marginBottom: 18 }}>Đội ngũ chuyên gia</h2>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Coach 1"
            style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", marginBottom: 8, border: "3px solid #2d98da" }}
          />
          <div style={{ fontWeight: 700, color: "#2d98da" }}>TS. Nguyễn Văn Khỏe</div>
          <div style={{ color: "#888", fontSize: "0.97rem" }}>Chuyên gia cai nghiện thuốc lá</div>
        </div>
        <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Coach 2"
            style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", marginBottom: 8, border: "3px solid #2d98da" }}
          />
          <div style={{ fontWeight: 700, color: "#2d98da" }}>ThS. Trần Thị Sức Sống</div>
          <div style={{ color: "#888", fontSize: "0.97rem" }}>Tư vấn tâm lý & sức khỏe</div>
        </div>
        <div style={{ flex: 1, minWidth: 220, textAlign: "center" }}>
          <img
            src="https://randomuser.me/api/portraits/men/77.jpg"
            alt="Coach 3"
            style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", marginBottom: 8, border: "3px solid #2d98da" }}
          />
          <div style={{ fontWeight: 700, color: "#2d98da" }}>BS. Lê Văn Sức Khỏe</div>
          <div style={{ color: "#888", fontSize: "0.97rem" }}>Bác sĩ nội tổng quát</div>
        </div>
      </div>
    </section>
  );
}