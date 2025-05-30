import React from "react";
import IntroSection from "../components/IntroSection";
import RoadmapSection from "../components/RoadmapSection";
import ExpertSection from "../components/ExpertSection";
import FeedbackSection from "../components/FeedbackSection";

import Footer from "../components/Footer";
import MembershipPackage from "../components/MembershipPackage";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Arial, 'Helvetica Neue', Roboto, Tahoma, sans-serif",
        minHeight: "100vh",
        background: "#f5f6fa"
      }}
    >
      {/* Banner */}
      <header
        style={{
          background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
          color: "#fff",
          padding: "2.5rem 0 2rem 0",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: 10 }}>
          Hỗ trợ Cai Nghiện Thuốc Lá
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: 18 }}>
          Đồng hành cùng 4 đứa tụi mình để bỏ thuốc từ nay bạn nhé!
        </p>
        <img
          src="......."
          alt="No Smoking"
          style={{
            width: 120,
            position: "absolute",
            right: 60,
            top: 30,
            opacity: 0.5,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <img
          src="......"
          alt="Quit Smoking"
          style={{
            width: 120,
            position: "absolute",
            left: 60,
            top: 30,
            opacity: 0.5,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      </header>

      {/* Navigation */}
      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", margin: "2rem 0" }}>
        <a href="/" style={{ color: "#2d98da", textDecoration: "none", fontWeight: "bold" }}>Trang chủ</a>
        <a href="#gioithieu" style={{ color: "#2d98da", textDecoration: "none", fontWeight: "bold" }}>Giới thiệu</a>
        <a href="#lo-trinh" style={{ color: "#2d98da", textDecoration: "none", fontWeight: "bold" }}>Lộ trình</a>
        <a href="#chuyen-gia" style={{ color: "#2d98da", textDecoration: "none", fontWeight: "bold" }}>Chuyên gia</a>
        <a href="#lienhe" style={{ color: "#2d98da", textDecoration: "none", fontWeight: "bold" }}>Liên hệ</a>
      </nav>

      <>
        <IntroSection />
        <RoadmapSection />
        <ExpertSection />
        <FeedbackSection />
        <MembershipPackage />
        <Footer />
      </>
    </div>
  );
}
