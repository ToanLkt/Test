import React from "react";

export default function MemberProfile() {
  // Dữ liệu mẫu
  const user = {
    avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    name: "Lương Khánh Toàn",
    title: "Danh hiệu",
    desc: "Mèo meo",
    email: "meomeo@gmail.com",
    phone: "0123 456 789",
    package: "Gói Premium",
    goal: "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    bio: ""
  };

  return (
    <div style={{ maxWidth: 900, margin: "32px auto", padding: 24 }}>
      <h1 style={{ fontWeight: 700, fontSize: 36, marginBottom: 24 }}>My Profile</h1>
      <div style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
        {/* Avatar */}
        <div>
          <img
            src={user.avatar}
            alt="avatar"
            style={{
              width: 260,
              height: 260,
              objectFit: "cover",
              borderRadius: 16,
              background: "#eee",
              border: "1px solid #ccc"
            }}
          />
          <div style={{ marginTop: 18, fontWeight: 500 }}>Mô tả</div>
          <textarea
            style={{
              width: 260,
              marginTop: 6,
              borderRadius: 8,
              border: "1px solid #ccc",
              padding: 8,
              fontSize: 16,
              resize: "vertical",
              minHeight: 48
            }}
            placeholder="Value"
            value={user.bio}
            readOnly
          />
        </div>
        {/* Info */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <h2 style={{ margin: 0 }}>{user.name}</h2>
            <span style={{
              background: "#b7e4c7",
              color: "#222",
              borderRadius: 6,
              padding: "3px 14px",
              fontSize: 15,
              fontWeight: 500,
              marginLeft: 4
            }}>{user.title}</span>
          </div>
          <div style={{ color: "#444", margin: "10px 0 2px 0" }}>{user.desc}</div>
          <div style={{ margin: "8px 0", color: "#222" }}>
            <div>Email: <b>{user.email}</b></div>
            <div>Số ĐT: <b>{user.phone}</b></div>
            <div>Gói đăng ký: <b>{user.package}</b></div>
          </div>
          <div style={{ margin: "18px 0 0 0" }}>
            <div style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 12,
              background: "#fafbfc"
            }}>
              <b>Mục tiêu</b>
              <div style={{ marginTop: 6, color: "#333" }}>{user.goal}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Change password */}
      <div style={{ marginTop: 40 }}>
        <h1 style={{ fontWeight: 700, fontSize: 32, marginBottom: 18 }}>Change Password</h1>
        <form style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 16,
                marginBottom: 12
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <label style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>Re-type New Password</label>
            <input
              type="password"
              placeholder="Enter your new password"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 16,
                marginBottom: 12
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
