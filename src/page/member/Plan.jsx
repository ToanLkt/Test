import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Plan() {
    // Dữ liệu mẫu, có thể thay bằng props hoặc lấy từ API
    const savedMoney = 350000; // VND
    const cigarettesAllowed = 7; // Số điếu thuốc được hút trong ngày (cố định)
    const [cigarettesToday, setCigarettesToday] = useState(""); // Số điếu đã hút hôm nay (có thể nhập)
    const [submitted, setSubmitted] = useState(false);
    const quitProgress = 70; // %
    const daysQuit = 10;
    const achievements = [
        "1 tuần không hút thuốc",
        "Tiết kiệm 300k",
        "Vượt qua ngày đầu tiên"
    ];

    const navigate = useNavigate();

    const handleCigaretteSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <div style={{ background: "#f5f6fa", minHeight: "100vh", padding: "0 0 2rem 0" }}>
                <div
                    style={{
                        maxWidth: 900,
                        margin: "2rem auto",
                        background: "#fff",
                        borderRadius: 12,
                        boxShadow: "0 4px 16px rgba(44, 130, 201, 0.08)",
                        padding: "2.5rem 2rem",
                    }}
                >
                    {/* Mục nhập số điếu thuốc hôm nay đã hút */}
                    <section
                        style={{
                            maxWidth: 500,
                            margin: "0 auto 2rem auto",
                            background: "#eaf6ff",
                            padding: "1.2rem 2rem",
                            borderRadius: 10,
                            boxShadow: "0 2px 12px rgba(44,130,201,0.07)",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{ color: "#2d98da", fontWeight: 700, marginBottom: 14 }}>
                            Nhập số điếu thuốc bạn đã hút hôm nay
                        </h3>
                        <form onSubmit={handleCigaretteSubmit} style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                            <input
                                type="number"
                                min={0}
                                value={cigarettesToday}
                                onChange={e => {
                                    setCigarettesToday(e.target.value);
                                    setSubmitted(false);
                                }}
                                placeholder="Số điếu đã hút"
                                style={{
                                    width: 100,
                                    padding: "0.5rem",
                                    borderRadius: 6,
                                    border: "1px solid #cfd8dc",
                                    fontSize: "1.1rem",
                                    textAlign: "center"
                                }}
                                required
                            />
                            <button
                                type="submit"
                                style={{
                                    background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 6,
                                    padding: "0.5rem 1.2rem",
                                    fontWeight: 600,
                                    fontSize: "1.05rem",
                                    cursor: "pointer"
                                }}
                            >
                                Lưu
                            </button>
                        </form>
                        {submitted && (
                            <div style={{ color: "#27ae60", marginTop: 10, fontWeight: 500 }}>
                                Đã lưu: {cigarettesToday} điếu thuốc hôm nay!
                            </div>
                        )}
                    </section>

                    {/* Thông tin cá nhân hóa */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.5rem",
                        marginBottom: 36,
                        justifyContent: "space-between"
                    }}>
                        <div style={{
                            flex: "1 1 180px",
                            background: "#eaf6ff",
                            borderRadius: 10,
                            padding: "1.2rem",
                            boxShadow: "0 1px 6px rgba(44,130,201,0.07)"
                        }}>
                            <div style={{ fontWeight: 600, color: "#3867d6" }}>Số tiền tiết kiệm được</div>
                            <div style={{ fontSize: "2rem", fontWeight: 700, color: "#27ae60" }}>
                                {savedMoney.toLocaleString()}₫
                            </div>
                        </div>
                        <div style={{
                            flex: "1 1 180px",
                            background: "#fff",
                            borderRadius: 10,
                            padding: "1.2rem",
                            boxShadow: "0 1px 6px rgba(44,130,201,0.07)"
                        }}>
                            <div style={{ fontWeight: 600, color: "#3867d6" }}>Số điếu thuốc được hút trong ngày</div>
                            <div style={{ fontSize: "2rem", fontWeight: 700, color: "#e67e22" }}>
                                {cigarettesAllowed}
                            </div>
                        </div>
                        <div style={{
                            flex: "1 1 180px",
                            background: "#fff",
                            borderRadius: 10,
                            padding: "1.2rem",
                            boxShadow: "0 1px 6px rgba(44,130,201,0.07)"
                        }}>
                            <div style={{ fontWeight: 600, color: "#3867d6" }}>Số điếu đã hút hôm nay</div>
                            <div style={{ fontSize: "2rem", fontWeight: 700, color: "#e67e22" }}>
                                {cigarettesToday === "" ? 0 : cigarettesToday}
                            </div>
                        </div>
                        <div style={{
                            flex: "1 1 180px",
                            background: "#fff",
                            borderRadius: 10,
                            padding: "1.2rem",
                            boxShadow: "0 1px 6px rgba(44,130,201,0.07)"
                        }}>
                            <div style={{ fontWeight: 600, color: "#3867d6" }}>Số ngày đã cai thuốc</div>
                            <div style={{ fontSize: "2rem", fontWeight: 700, color: "#2d98da" }}>
                                {daysQuit} ngày
                            </div>
                        </div>
                    </div>

                    {/* Quá trình cai thuốc */}
                    <div style={{
                        background: "#fff",
                        borderRadius: 10,
                        padding: "1.5rem",
                        boxShadow: "0 1px 6px rgba(44,130,201,0.07)",
                        marginBottom: 36
                    }}>
                        <div style={{ fontWeight: 600, color: "#3867d6", marginBottom: 10 }}>Quá trình cai thuốc</div>
                        <div style={{ width: "100%", background: "#eaf6ff", borderRadius: 8, height: 22, marginBottom: 8 }}>
                            <div style={{
                                width: `${quitProgress}%`,
                                background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                                height: "100%",
                                borderRadius: 8,
                                transition: "width 0.5s"
                            }} />
                        </div>
                        <div style={{ color: "#2d98da", fontWeight: 600 }}>{quitProgress}% hoàn thành mục tiêu</div>
                    </div>

                    {/* Danh hiệu */}
                    <div style={{
                        background: "#eaf6ff",
                        borderRadius: 10,
                        padding: "1.5rem",
                        boxShadow: "0 1px 6px rgba(44,130,201,0.07)",
                        marginBottom: 36
                    }}>
                        <div style={{ fontWeight: 600, color: "#3867d6", marginBottom: 10 }}>Danh hiệu bạn đạt được</div>
                        <ul style={{ margin: 0, paddingLeft: 20, color: "#2d98da", fontSize: "1.08rem" }}>
                            {achievements.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: 6 }}>🏅 {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Banner */}
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 32 }}>
                        <div style={{ flex: "1 1 320px" }}>
                            <h1 style={{ color: "#2d98da", fontWeight: 800, fontSize: "2.2rem", marginBottom: 12 }}>
                                Lộ Trình Cai Nghiện Thuốc Lá
                            </h1>
                            <p style={{ fontSize: "1.15rem", color: "#444", marginBottom: 18 }}>
                                Hành trình bỏ thuốc lá không dễ dàng, nhưng với kế hoạch rõ ràng và sự hỗ trợ đúng cách, bạn hoàn toàn có thể thành công. Hãy cùng chúng tôi khám phá các bước và công cụ giúp bạn vượt qua thử thách này!
                            </p>
                        </div>
                        <div style={{ flex: "1 1 260px", textAlign: "center" }}>
                            <img
                                src="https://th.bing.com/th/id/R.7817708fda667cffccf24824423b12eb?rik=5xUZastZxf1y1w&pid=ImgRaw&r=0"
                                alt="Cai nghiện thuốc lá"
                                style={{ maxWidth: 220, width: "100%", borderRadius: 10, boxShadow: "0 2px 8px rgba(44,130,201,0.10)" }}
                            />
                        </div>
                    </div>

                    {/* Steps */}
                    <div style={{ marginTop: 36 }}>
                        <h2 style={{ color: "#3867d6", fontWeight: 700, marginBottom: 18 }}>Các Bước Cụ Thể</h2>
                        <ol style={{ paddingLeft: 24, fontSize: "1.08rem", color: "#333", lineHeight: 1.7 }}>
                            <li>
                                <strong>Đặt mục tiêu rõ ràng:</strong> Xác định lý do bạn muốn bỏ thuốc và đặt ngày bắt đầu.
                            </li>
                            <li>
                                <strong>Lập kế hoạch đối phó:</strong> Ghi chú các tình huống dễ hút thuốc và cách xử lý khi gặp cám dỗ.
                            </li>
                            <li>
                                <strong>Nhận hỗ trợ:</strong> Tham gia cộng đồng, hỏi ý kiến chuyên gia, hoặc chia sẻ với bạn bè, người thân.
                            </li>
                            <li>
                                <strong>Thay đổi thói quen:</strong> Tìm hoạt động thay thế như tập thể dục, uống nước, nhai kẹo cao su.
                            </li>
                            <li>
                                <strong>Theo dõi tiến trình:</strong> Ghi lại số ngày không hút thuốc, cảm xúc và sức khỏe của bạn.
                            </li>
                            <li>
                                <strong>Tự thưởng cho bản thân:</strong> Khi đạt được các mốc quan trọng, hãy tự thưởng để động viên chính mình.
                            </li>
                        </ol>
                    </div>

                    {/* Tips & Tools */}
                    <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 32 }}>
                        <div
                            style={{
                                flex: "1 1 320px",
                                background: "#eaf6ff",
                                borderRadius: 8,
                                padding: "1.5rem",
                                minWidth: 260,
                                boxShadow: "0 1px 4px rgba(44,130,201,0.06)",
                            }}
                        >
                            <h3 style={{ color: "#2d98da", fontWeight: 700, marginBottom: 10 }}>Mẹo Vượt Qua Cơn Thèm</h3>
                            <ul style={{ paddingLeft: 18, color: "#3867d6", fontSize: "1rem", marginBottom: 0 }}>
                                <li>Uống nước hoặc trà thảo mộc thay vì hút thuốc</li>
                                <li>Đi bộ hoặc tập thể dục nhẹ nhàng</li>
                                <li>Trò chuyện với bạn bè, người thân</li>
                                <li>Thở sâu và thư giãn</li>
                                <li>Tránh xa nơi có nhiều người hút thuốc</li>
                            </ul>
                        </div>
                        <div
                            style={{
                                flex: "1 1 320px",
                                background: "#fff7e6",
                                borderRadius: 8,
                                padding: "1.5rem",
                                minWidth: 260,
                                boxShadow: "0 1px 4px rgba(255,193,7,0.06)",
                            }}
                        >
                            <h3 style={{ color: "#e67e22", fontWeight: 700, marginBottom: 10 }}>Công Cụ Hỗ Trợ</h3>
                            <ul style={{ paddingLeft: 18, color: "#b9770e", fontSize: "1rem", marginBottom: 0 }}>
                                <li>Ứng dụng theo dõi tiến trình bỏ thuốc</li>
                                <li>Nhắc nhở động viên mỗi ngày</li>
                                <li>Tham gia nhóm cộng đồng online</li>
                                <li>Liên hệ chuyên gia tư vấn</li>
                                <li>Tài liệu hướng dẫn miễn phí</li>
                            </ul>
                        </div>
                    </div>

                    {/* Call to action */}
                    <div
                        style={{
                            marginTop: 40,
                            background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                            borderRadius: 10,
                            padding: "2rem",
                            color: "#fff",
                            textAlign: "center",
                            boxShadow: "0 2px 8px rgba(44,130,201,0.10)",
                        }}
                    >
                        <h2 style={{ fontWeight: 800, marginBottom: 10 }}>Bạn đã sẵn sàng bắt đầu?</h2>
                        <p style={{ fontSize: "1.15rem", marginBottom: 18 }}>
                            Hãy cho chúng tớ xin vài thông tin để bắt đầu quá trình bạn nhé!
                        </p>
                        <button
                            onClick={() => navigate("/start-information")}
                            style={{
                                background: "#fff",
                                color: "#2d98da",
                                fontWeight: 700,
                                padding: "0.7rem 2.2rem",
                                borderRadius: 30,
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                boxShadow: "0 2px 8px rgba(44,130,201,0.10)",
                                transition: "background 0.2s, color 0.2s",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            Tham gia ngay
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
            <Outlet />
        </>
    );
}