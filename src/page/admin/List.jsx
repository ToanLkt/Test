import React, { useState } from "react";

// Demo dữ liệu member và coach
const initialMembers = [
    { id: 1, name: "Nguyễn Văn A", email: "member1@gmail.com", membership: "Gói Pro", active: true },
    { id: 2, name: "Trần Thị B", email: "member2@gmail.com", membership: "Gói Cơ bản", active: true },
];

const initialCoaches = [
    { id: 1, name: "Lê Văn C", email: "coach1@gmail.com" },
    { id: 2, name: "Phạm Thị D", email: "coach2@gmail.com" },
];

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 32,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 2px 8px #2d98da22",
    overflow: "hidden"
};

const thStyle = {
    background: "#eaf6ff",
    color: "#2d98da",
    fontWeight: 700,
    padding: "10px 8px",
    borderBottom: "2px solid #2d98da22",
    textAlign: "left"
};

const tdStyle = {
    padding: "10px 8px",
    borderBottom: "1px solid #eee"
};

export default function List() {
    const [members, setMembers] = useState(initialMembers);
    const [coaches, setCoaches] = useState(initialCoaches);
    const [coachName, setCoachName] = useState("");
    const [coachEmail, setCoachEmail] = useState("");

    // Thêm coach mới
    const handleAddCoach = (e) => {
        e.preventDefault();
        if (!coachName.trim() || !coachEmail.trim()) return;
        setCoaches([
            ...coaches,
            { id: Date.now(), name: coachName, email: coachEmail }
        ]);
        setCoachName("");
        setCoachEmail("");
    };

    // Tạm khóa hoặc mở khóa member
    const handleToggleActive = (id) => {
        setMembers(members =>
            members.map(m =>
                m.id === id ? { ...m, active: !m.active } : m
            )
        );
    };

    return (
        <div style={{ maxWidth: 900, margin: "32px auto", background: "#f8fbff", borderRadius: 12, padding: 24 }}>
            <h2 style={{ color: "#2d98da", marginBottom: 18 }}>Danh sách Member đã đăng ký</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>STT</th>
                        <th style={thStyle}>Họ tên</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>Gói membership</th>
                        <th style={thStyle}>Trạng thái</th>
                        <th style={thStyle}>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((m, idx) => (
                        <tr key={m.id}>
                            <td style={tdStyle}>{idx + 1}</td>
                            <td style={tdStyle}>{m.name}</td>
                            <td style={tdStyle}>{m.email}</td>
                            <td style={tdStyle}>
                                <span style={{
                                    background: m.membership === "Gói Pro" ? "#2d98da" : "#aaa",
                                    color: "#fff",
                                    padding: "4px 12px",
                                    borderRadius: 16,
                                    fontSize: 13,
                                    fontWeight: 600
                                }}>
                                    {m.membership}
                                </span>
                            </td>
                            <td style={tdStyle}>
                                <span style={{
                                    color: m.active ? "#27ae60" : "#e67e22",
                                    fontWeight: 600
                                }}>
                                    {m.active ? "Hoạt động" : "Tạm khóa"}
                                </span>
                            </td>
                            <td style={tdStyle}>
                                <button
                                    onClick={() => handleToggleActive(m.id)}
                                    style={{
                                        background: m.active ? "#e67e22" : "#27ae60",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 6,
                                        padding: "4px 14px",
                                        cursor: "pointer",
                                        fontWeight: 600
                                    }}
                                >
                                    {m.active ? "Tạm khóa" : "Mở khóa"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 style={{ color: "#2d98da", marginBottom: 18 }}>Danh sách Coach đã đăng ký</h2>
            <form onSubmit={handleAddCoach} style={{ marginBottom: 18, display: "flex", gap: 12, alignItems: "center" }}>
                <input
                    type="text"
                    placeholder="Họ tên coach"
                    value={coachName}
                    onChange={e => setCoachName(e.target.value)}
                    style={{ padding: "8px", borderRadius: 6, border: "1px solid #cfd8dc", minWidth: 160 }}
                    required
                />
                <input
                    type="email"
                    placeholder="Email coach"
                    value={coachEmail}
                    onChange={e => setCoachEmail(e.target.value)}
                    style={{ padding: "8px", borderRadius: 6, border: "1px solid #cfd8dc", minWidth: 200 }}
                    required
                />
                <button
                    type="submit"
                    style={{
                        background: "#2d98da",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "8px 18px",
                        fontWeight: 600,
                        cursor: "pointer"
                    }}
                >
                    Thêm Coach
                </button>
            </form>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>STT</th>
                        <th style={thStyle}>Họ tên</th>
                        <th style={thStyle}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {coaches.map((c, idx) => (
                        <tr key={c.id}>
                            <td style={tdStyle}>{idx + 1}</td>
                            <td style={tdStyle}>{c.name}</td>
                            <td style={tdStyle}>{c.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
