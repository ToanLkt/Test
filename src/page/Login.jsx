import React, { useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

// Danh sách tài khoản mẫu
const demoAccounts = [
    { email: "admin@gmail.com", password: "admin123", role: "admin" },
    { email: "member@gmail.com", password: "member123", role: "member" }
];

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kiểm tra tài khoản mẫu
        const found = demoAccounts.find(
            acc => acc.email === email && acc.password === password
        );
        if (found) {
            // Sau khi xác thực thành công
            login(found.role, found.email); // hoặc login("member", "member@gmail.com")
            if (found.role === "admin") navigate("/admin");
            else navigate("/");
        } else {
            setError("Email hoặc mật khẩu không đúng!");
        }
    };

    // Demo: chuyển hướng tới trang chọn tài khoản Google/Facebook
    const handleGoogleLogin = () => {
        window.location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=futura_exp_og_so_72776762_e&hl=vi&ifkv=AdBytiPDDUDuhc3aUIIzRrV7C8e9PgpgAWB6DVfyE6-zUhHOgySrIIYAI010MGrgvQA_wYeVeKMM&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1372533706%3A1748515862076999";
    };

    const handleFacebookLogin = () => {
        window.location.href = "https://www.facebook.com/login.php";
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
                <h2 style={{ color: "#2d98da", textAlign: "center", marginBottom: 24 }}>Đăng nhập</h2>
                {error && (
                    <div style={{ color: "red", marginBottom: 12, textAlign: "center" }}>{error}</div>
                )}
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
                <div style={{ marginBottom: 10 }}>
                    <label style={{ fontWeight: 500, color: "#3867d6" }}>Mật khẩu</label>
                    <div style={{ position: "relative" }}>
                        <input
                            type={showPass ? "text" : "password"}
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
                        <span
                            onClick={() => setShowPass(!showPass)}
                            style={{
                                position: "absolute",
                                right: 12,
                                top: 18,
                                cursor: "pointer",
                                color: "#aaa",
                                fontSize: "1.1rem",
                                userSelect: "none"
                            }}
                            title={showPass ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                        >
                            {showPass ? "🙈" : "👁️"}
                        </span>
                    </div>
                </div>
                <div style={{ textAlign: "right", marginBottom: 18 }}>
                    <a href="/forgot-password" style={{ color: "#3867d6", fontSize: "0.97rem", textDecoration: "none" }}>
                        Quên mật khẩu?
                    </a>
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
                    Đăng nhập
                </button>
                <div style={{ textAlign: "center", margin: "10px 0", color: "#888" }}>hoặc</div>
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    style={{
                        width: "100%",
                        background: "#fff",
                        color: "#222",
                        border: "1px solid #cfd8dc",
                        borderRadius: 8,
                        padding: "0.7rem",
                        fontWeight: 600,
                        fontSize: "1.08rem",
                        cursor: "pointer",
                        marginBottom: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        boxShadow: "0 1px 4px rgba(44,130,201,0.04)"
                    }}
                >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="google" width={24} height={24} style={{ background: "#fff", borderRadius: "50%" }} />
                    Đăng nhập với Google
                </button>
                <button
                    type="button"
                    onClick={handleFacebookLogin}
                    style={{
                        width: "100%",
                        background: "#1877f3",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "0.7rem",
                        fontWeight: 600,
                        fontSize: "1.08rem",
                        cursor: "pointer",
                        marginBottom: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        boxShadow: "0 1px 4px rgba(44,130,201,0.04)"
                    }}
                >
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="facebook" width={24} height={24} style={{ background: "#fff", borderRadius: "50%" }} />
                    Đăng nhập với Facebook
                </button>
                <div style={{ textAlign: "center", marginTop: 10, fontSize: "0.98rem" }}>
                    Chưa có tài khoản?{" "}
                    <a href="/register" style={{ color: "#2d98da", fontWeight: 500, textDecoration: "none" }}>
                        Đăng ký
                    </a>
                </div>
                {/* Hiển thị tài khoản mẫu */}
                <div style={{ marginTop: 24, color: "#888", fontSize: "0.97rem" }}>
                    <div><b>Tài khoản mẫu:</b></div>
                    <div>Admin: admin@gmail.com / admin123</div>
                    <div>Member: member@gmail.com / member123</div>
                </div>
            </form>
        </div>
    );
}