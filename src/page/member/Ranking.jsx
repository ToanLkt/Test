import React from "react";
import Footer from "../../components/Footer";

const rankingData = [
    {
        name: "Bạch Tấn Phú",
        days: 120,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Hà Việt Thành",
        days: 98,
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "Lương Khánh Toàn",
        days: 90,
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
        name: "Phan Diệu Linh",
        days: 80,
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Hoàng Văn E",
        days: 75,
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
];

const medalColors = ["#ffd700", "#c0c0c0", "#cd7f32"]; // vàng, bạc, đồng
const bgMedals = [
    "linear-gradient(90deg,#fffbe6 60%,#fffde4 100%)",
    "linear-gradient(90deg,#f3f6fa 60%,#e8eaef 100%)",
    "linear-gradient(90deg,#fff3e6 60%,#fff7e4 100%)",
];

export default function Ranking() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(120deg, #eaf6ff 60%, #f5f6fa 100%)",
                padding: "2rem 0",
            }}
        >
            <div
                style={{
                    maxWidth: 520,
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: 18,
                    boxShadow: "0 4px 24px rgba(44,130,201,0.12)",
                    padding: "2.2rem 1.5rem 2.5rem 1.5rem",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "#2d98da",
                        marginBottom: 32,
                        fontSize: "2.2rem",
                        fontWeight: 800,
                        letterSpacing: 1,
                    }}
                >
                    🏆 Bảng xếp hạng thành viên
                </h2>
                <div>
                    {rankingData.map((user, idx) => (
                        <div
                            key={user.name}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                background: idx < 3 ? bgMedals[idx] : "#f8fafc",
                                borderRadius: 14,
                                boxShadow:
                                    idx < 3
                                        ? "0 4px 16px rgba(44,130,201,0.10)"
                                        : "0 1px 4px rgba(44,130,201,0.04)",
                                marginBottom: 20,
                                padding: idx < 3 ? "1.3rem 1.4rem" : "0.85rem 1.2rem",
                                border:
                                    idx < 3
                                        ? `2.5px solid ${medalColors[idx]}`
                                        : "1px solid #e0e6ed",
                                fontWeight: idx < 3 ? 700 : 500,
                                fontSize: idx === 0 ? "1.22rem" : "1.07rem",
                                position: "relative",
                                transition: "transform 0.15s",
                                transform: idx === 0 ? "scale(1.04)" : "none",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    left: -38,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 2,
                                }}
                            >
                                {idx < 3 && (
                                    <span
                                        style={{
                                            fontSize: 34 - idx * 4,
                                            color: medalColors[idx],
                                            fontWeight: 900,
                                            filter: "drop-shadow(0 1px 2px #fff)",
                                        }}
                                    >
                                        {idx === 0 && "🥇"}
                                        {idx === 1 && "🥈"}
                                        {idx === 2 && "🥉"}
                                    </span>
                                )}
                            </div>
                            <img
                                src={user.avatar}
                                alt={user.name}
                                style={{
                                    width: idx === 0 ? 68 : 48,
                                    height: idx === 0 ? 68 : 48,
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border:
                                        idx < 3
                                            ? `3.5px solid ${medalColors[idx]}`
                                            : "2px solid #e0e6ed",
                                    marginRight: 18,
                                    background: "#fff",
                                    boxShadow:
                                        idx === 0 ? "0 2px 12px #ffd70044" : "none",
                                    transition: "all 0.18s",
                                }}
                            />
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        color: idx < 3 ? "#2d98da" : "#222",
                                        fontWeight: idx === 0 ? 900 : 700,
                                        fontSize: idx === 0 ? "1.22rem" : "1.07rem",
                                        letterSpacing: 0.2,
                                        marginBottom: 2,
                                    }}
                                >
                                    {user.name}
                                </div>
                                <div
                                    style={{
                                        color: "#888",
                                        fontSize: "0.99rem",
                                        marginTop: 2,
                                        fontWeight: 500,
                                    }}
                                >
                                    Số ngày không hút thuốc:{" "}
                                    <b
                                        style={{
                                            color:
                                                idx < 3
                                                    ? medalColors[idx]
                                                    : "#3867d6",
                                        }}
                                    >
                                        {user.days}
                                    </b>
                                </div>
                            </div>
                            <div
                                style={{
                                    fontWeight: 900,
                                    color: idx < 3 ? medalColors[idx] : "#3867d6",
                                    fontSize: idx === 0 ? "1.32rem" : "1.09rem",
                                    marginLeft: 10,
                                    textShadow:
                                        idx < 3 ? "0 1px 4px #fff" : "none",
                                }}
                            >
                                #{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
