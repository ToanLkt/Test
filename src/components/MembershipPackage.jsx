import React from 'react'

export default function MembershipPackage() {
    return (
        <section style={{ maxWidth: "1100px", margin: "0 auto 2rem auto" }}>
            <h2 style={{ textAlign: "center", color: "#2d98da", fontWeight: 800, marginBottom: 32 }}>
                Các gói đăng ký
            </h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                {/* Gói Cơ Bản */}
                <div style={{
                    background: "#fff",
                    padding: "2rem 1.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 2px 16px rgba(44,130,201,0.07)",
                    width: "320px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 370
                }}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "2rem", marginBottom: 8 }}>Basic</h3>
                        <p style={{ fontSize: "1.15rem", marginBottom: 18 }}>Free 1 month</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#7c4dff", fontSize: "1.08rem", textAlign: "left", display: "inline-block" }}>
                            <li style={{ marginBottom: 8 }}>✔️ Documentation</li>
                            <li>✔️ Community Access</li>
                        </ul>
                    </div>
                    <button style={{
                        marginTop: "1.5rem",
                        background: "#2196f3",
                        color: "#fff",
                        border: "none",
                        padding: "0.7rem 2.2rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1.08rem"
                    }}>Register</button>
                </div>
                {/* Gói Nâng Cao */}
                <div style={{
                    background: "#fff",
                    padding: "2rem 1.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 2px 16px rgba(44,130,201,0.07)",
                    width: "320px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 370
                }}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "2rem", marginBottom: 8 }}>Basic</h3>
                        <p style={{ fontSize: "1.15rem", marginBottom: 18 }}>199.000đ/month</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#7c4dff", fontSize: "1.08rem", textAlign: "left", display: "inline-block" }}>
                            <li style={{ marginBottom: 8 }}>✔️ All basic features</li>
                            <li style={{ marginBottom: 8 }}>✔️ Expert consultation</li>
                            <li>✔️ Personalized roadmap</li>
                        </ul>
                    </div>
                    <button style={{
                        marginTop: "1.5rem",
                        background: "#2196f3",
                        color: "#fff",
                        border: "none",
                        padding: "0.7rem 2.2rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1.08rem"
                    }}>Register</button>
                </div>
                {/* Gói Chuyên Sâu */}
                <div style={{
                    background: "#fff",
                    padding: "2rem 1.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 2px 16px rgba(44,130,201,0.07)",
                    width: "320px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 370
                }}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: "2rem", marginBottom: 8 }}>Plus</h3>
                        <p style={{ fontSize: "1.15rem", marginBottom: 18 }}>399.000đ/month</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#7c4dff", fontSize: "1.08rem", textAlign: "left", display: "inline-block" }}>
                            <li style={{ marginBottom: 8 }}>✔️ All advanced features</li>
                            <li style={{ marginBottom: 8 }}>✔️ 24/7 Support</li>
                            <li>✔️ Personal progress tracking</li>
                        </ul>
                    </div>
                    <button style={{
                        marginTop: "1.5rem",
                        background: "#2196f3",
                        color: "#fff",
                        border: "none",
                        padding: "0.7rem 2.2rem",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "1.08rem"
                    }}>Registers</button>
                </div>
            </div>
        </section>
    )
}
