import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng ký ở đây
        // Nếu đăng ký thành công:
        navigate("/");
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(120deg, #eaf6ff 60%, #f5f6fa 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: "#fff",
                    padding: "2.5rem 2rem",
                    borderRadius: 12,
                    boxShadow: "0 4px 16px rgba(44,130,201,0.10)",
                    minWidth: 340,
                    maxWidth: 370,
                    width: "100%"
                }}
            >
                <h2 style={{ color: "#2d98da", textAlign: "center", marginBottom: 24 }}>Đăng ký</h2>
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 500, color: "#3867d6" }}>Họ và tên</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nhập họ và tên"
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
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 500, color: "#3867d6" }}>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Nhập email"
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
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 500, color: "#3867d6" }}>Số điện thoại</label>
                    <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Nhập số điện thoại"
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
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 500, color: "#3867d6" }}>Mật khẩu</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu"
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
                <div style={{ marginBottom: 18 }}>
                    <label style={{ fontWeight: 500, color: "#3867d6" }}>Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        required
                        value={repassword}
                        onChange={e => setRepassword(e.target.value)}
                        placeholder="Nhập lại mật khẩu"
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
                        cursor: "pointer",
                        marginBottom: 10
                    }}
                >
                    Đăng ký
                </button>
                <div style={{ textAlign: "center", marginTop: 10, fontSize: "0.98rem" }}>
                    Đã có tài khoản?{" "}
                    <a href="/login" style={{ color: "#2d98da", fontWeight: 500, textDecoration: "none" }}>
                        Đăng nhập
                    </a>
                </div>
            </form>
        </div>
    );
}