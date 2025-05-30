import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";

export default function AdminNavbar() {
    const location = useLocation();
    const { email, logout } = useAuth();

    const navItems = [
        { to: "/admin", label: "Trang chủ" },
        { to: "/admin/list", label: "Danh sách" },
        { to: "/admin/community", label: "Cộng đồng" },
        { to: "/admin/feedback", label: "Phản hồi" },
        { to: "/admin/payment", label: "Thanh toán" },
    ];

    return (
        <>
            <div
                style={{
                    background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                    padding: "1.2rem 0 0.8rem 0",
                    boxShadow: "0 2px 8px rgba(44,130,201,0.08)",
                }}
            >
                <div
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 1.5rem",
                        gap: 32,
                    }}
                >
                    {/* Logo bên trái */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 220 }}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Logo"
                            style={{
                                width: 38,
                                height: 38,
                                borderRadius: "50%",
                                background: "#fff",
                            }}
                        />
                        <Link to="/admin" style={{ textDecoration: "none" }}>
                            <span
                                style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontSize: "1.25rem",
                                    letterSpacing: 1,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Cai Nghiện Thuốc Lá
                            </span>
                        </Link>
                    </div>
                    {/* Thanh tìm kiếm ở giữa */}
                    <div style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        minWidth: 300,
                        maxWidth: 480,
                    }}>
                        <div
                            style={{
                                background: "#fff",
                                borderRadius: 24,
                                display: "flex",
                                alignItems: "center",
                                padding: "0.3rem 1.2rem",
                                minWidth: 260,
                                width: "100%",
                                boxShadow: "0 2px 8px rgba(44,130,201,0.07)",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 20,
                                    marginRight: 10,
                                    color: "#aaa",
                                }}
                            >
                                ☰
                            </span>
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                style={{
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                    fontSize: "1rem",
                                    flex: 1,
                                    color: "#333",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: 18,
                                    marginLeft: 10,
                                    color: "#aaa",
                                    cursor: "pointer",
                                }}
                            >
                                🔍
                            </span>
                        </div>
                    </div>
                    {/* Tài khoản bên phải */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        minWidth: 220,
                        justifyContent: "flex-end",
                    }}>
                        <span style={{ fontSize: 26, color: "#fff", marginRight: 4 }}>👤</span>
                        {email && (
                            <>
                                <span
                                    style={{
                                        color: "#2d98da",
                                        fontWeight: 700,
                                        fontSize: "1.08rem",
                                        background: "#eaf6ff",
                                        padding: "0.5rem 1.2rem",
                                        borderRadius: 20,
                                        minWidth: 120,
                                        textAlign: "center",
                                        boxShadow: "0 2px 8px #2d98da22",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {email}
                                </span>
                                <button
                                    onClick={logout}
                                    style={{
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "1.08rem",
                                        background: "#e74c3c",
                                        padding: "0.5rem 1.2rem",
                                        borderRadius: 20,
                                        border: "none",
                                        cursor: "pointer",
                                        marginLeft: 6,
                                        boxShadow: "0 2px 8px #e74c3c22",
                                        transition: "background 0.18s",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseOver={e => e.currentTarget.style.background = "#c0392b"}
                                    onMouseOut={e => e.currentTarget.style.background = "#e74c3c"}
                                >
                                    Đăng xuất
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {/* Thanh menu */}
            <nav
                style={{
                    background: "#fff",
                    padding: "0.7rem 0",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2.5rem",
                    boxShadow: "0 2px 8px rgba(44,130,201,0.04)",
                }}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        style={{
                            color: location.pathname === item.to ? "#2d98da" : "#222",
                            fontWeight: 600,
                            borderRadius: 8,
                            padding: "0.5rem 1.5rem",
                            textDecoration: "none",
                            fontSize: "1.08rem",
                            background:
                                location.pathname === item.to ? "#eaf6ff" : "transparent",
                            boxShadow:
                                location.pathname === item.to
                                    ? "0 2px 8px rgba(44,130,201,0.07)"
                                    : "none",
                            border:
                                location.pathname === item.to
                                    ? "2px solid #2d98da"
                                    : "2px solid transparent",
                            transition: "all 0.18s",
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

        </>
    );
}