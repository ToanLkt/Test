import React, { useState } from "react";

export default function StartInformation() {
    const [form, setForm] = useState({
        cigarettesPerDay: "",
        quitDuration: "",
        costPerCigarette: "",
        cravingTime: "",
        smokingDuration: "",
        gender: "",
        birthday: "",
        reason: "",
        medicalHistory: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setForm({ ...form, [name]: type === "radio" ? value : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Có thể gửi dữ liệu lên server tại đây nếu cần
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,rgb(72, 83, 206) 0%,rgb(255, 255, 255) 100%)",
                padding: "0 0 2rem 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "100%",
                    maxWidth: 480,
                    background: "rgba(19, 8, 141, 0.46)",
                    borderRadius: 18,
                    boxShadow: "0 8px 32px 0 rgba(89, 89, 89, 0.18)",
                    padding: "2.5rem 2rem 2rem 2rem",
                    color: "#222",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "#2d2a4a",
                        fontWeight: 900,
                        marginBottom: 30,
                        letterSpacing: 1,
                        fontSize: "2rem",
                        textShadow: "0 2px 8px rgba(255,255,255,0.15)",
                    }}
                >
                    Nhập thông tin
                </h2>
                {/* Số điếu bạn hút 1 ngày */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Số điếu bạn hút 1 ngày
                    </label>
                    <input
                        type="number"
                        name="cigarettesPerDay"
                        min={1}
                        max={100}
                        value={form.cigarettesPerDay}
                        onChange={handleChange}
                        placeholder="? điếu"
                        style={{
                            width: "100%",
                            padding: "0.55rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            outline: "none",
                        }}
                        required
                    />
                </div>
                {/* Bạn muốn cai thuốc lá trong bao lâu */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Bạn muốn cai thuốc lá trong bao lâu
                    </label>
                    <select
                        name="quitDuration"
                        value={form.quitDuration}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "0.55rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            outline: "none",
                        }}
                        required
                    >
                        <option value="">Chọn thời gian</option>
                        <option value="1 tuần">1 tuần</option>
                        <option value="2 tuần">2 tuần</option>
                        <option value="1 tháng">1 tháng</option>
                        <option value="3 tháng">3 tháng</option>
                        <option value="6 tháng">6 tháng</option>
                        <option value="1 năm">1 năm</option>
                    </select>
                </div>
                {/* Chi phí */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Chi phí (VND/1 điếu)
                    </label>
                    <input
                        type="number"
                        name="costPerCigarette"
                        min={100}
                        max={100000}
                        value={form.costPerCigarette}
                        onChange={handleChange}
                        placeholder="? VND"
                        style={{
                            width: "100%",
                            padding: "0.55rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            outline: "none",
                        }}
                        required
                    />
                </div>
                {/* Thời gian thèm nhất trong ngày */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Thời gian thèm nhất trong ngày
                    </label>
                    <input
                        type="text"
                        name="cravingTime"
                        value={form.cravingTime}
                        onChange={handleChange}
                        placeholder="Ví dụ: Sáng, trưa, tối..."
                        style={{
                            width: "100%",
                            padding: "0.55rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            outline: "none",
                        }}
                        required
                    />
                </div>
                {/* Thời gian bạn đã hút thuốc */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Thời gian bạn đã hút thuốc
                    </label>
                    <input
                        type="text"
                        name="smokingDuration"
                        value={form.smokingDuration}
                        onChange={handleChange}
                        placeholder="Ví dụ: 3 năm, 5 năm..."
                        style={{
                            width: "100%",
                            padding: "0.55rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            outline: "none",
                        }}
                        required
                    />
                </div>
                {/* Giới tính */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Giới tính
                    </label>
                    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
                        <label style={{ fontWeight: 500, color: "#222" }}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={form.gender === "male"}
                                onChange={handleChange}
                                required
                                style={{ marginRight: 6 }}
                            />
                            Nam
                        </label>
                        <label style={{ fontWeight: 500, color: "#222" }}>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={form.gender === "female"}
                                onChange={handleChange}
                                required
                                style={{ marginRight: 6 }}
                            />
                            Nữ
                        </label>
                    </div>
                </div>
                {/* Birthday */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Ngày sinh
                    </label>
                    <input
                        type="date"
                        name="birthday"
                        value={form.birthday}
                        onChange={handleChange}
                        placeholder="DD/MM/YYYY"
                        style={{
                            width: "100%",
                            padding: "0.55rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            outline: "none",
                        }}
                        required
                    />
                </div>
                {/* Lý do bạn muốn cai thuốc lá */}
                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Lý do bạn muốn cai thuốc lá
                    </label>
                    <textarea
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                        placeholder="Chia sẻ lý do của bạn..."
                        rows={3}
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            resize: "vertical",
                            outline: "none",
                        }}
                        required
                    />
                </div>
                {/* Tiền sử bệnh án */}
                <div style={{ marginBottom: 28 }}>
                    <label style={{ fontWeight: 600, display: "block", marginBottom: 6, color: "#222" }}>
                        Tiền sử bệnh án (nếu có)
                    </label>
                    <textarea
                        name="medicalHistory"
                        value={form.medicalHistory}
                        onChange={handleChange}
                        placeholder="Nhập nếu có..."
                        rows={2}
                        style={{
                            width: "100%",
                            padding: "0.6rem",
                            borderRadius: 8,
                            border: "1.5px solid #e0c3fc",
                            fontSize: "1.08rem",
                            background: "rgba(255,255,255,0.95)",
                            color: "#222",
                            resize: "vertical",
                            outline: "none",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        background: "linear-gradient(90deg, #27ae60 60%, #38d67a 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "0.8rem",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        cursor: "pointer",
                        letterSpacing: 1,
                        boxShadow: "0 2px 8px #27ae6055",
                        transition: "background 0.2s",
                    }}
                >
                    Submit
                </button>
                {submitted && (
                    <div
                        style={{
                            color: "#27ae60",
                            marginTop: 18,
                            fontWeight: 600,
                            textAlign: "center",
                            fontSize: "1.08rem",
                            letterSpacing: 0.5,
                        }}
                    >
                        Cảm ơn bạn đã cung cấp thông tin!
                    </div>
                )}
            </form>
        </div>
    );
}
