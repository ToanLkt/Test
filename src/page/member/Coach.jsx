import React, { useState, useRef, useEffect } from "react";

export default function Coach() {
    const [messages, setMessages] = useState([
        { from: "coach", text: "Chào bạn! Tôi là Coach. Bạn cần hỗ trợ gì hôm nay?" }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = { from: "user", text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        // Gọi API OpenAI
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer sk......" // Thay bằng API key thật
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "system", content: "Bạn là một coach hỗ trợ bỏ thuốc lá, trả lời ngắn gọn, thân thiện, dễ hiểu." },
                        ...messages.map(m => ({
                            role: m.from === "user" ? "user" : "assistant",
                            content: m.text
                        })),
                        { role: "user", content: input }
                    ],
                    max_tokens: 200,
                    temperature: 0.7
                })
            });
            const data = await response.json();
            const aiText = data.choices?.[0]?.message?.content || "Xin lỗi, tôi chưa trả lời được.";
            setMessages(prev => [...prev, { from: "coach", text: aiText }]);
        } catch (err) {
            setMessages(prev => [...prev, { from: "coach", text: "Có lỗi xảy ra, vui lòng thử lại sau." }]);
        }
        setLoading(false);
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "#f5f6fa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                background: "#fff",
                borderRadius: 14,
                boxShadow: "0 2px 16px rgba(44,130,201,0.10)",
                width: 370,
                maxWidth: "95vw",
                minHeight: 480,
                display: "flex",
                flexDirection: "column"
            }}>
                <div style={{
                    background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                    color: "#fff",
                    borderRadius: "14px 14px 0 0",
                    padding: "1.1rem",
                    fontWeight: 700,
                    fontSize: "1.18rem",
                    textAlign: "center"
                }}>
                    Chat với Coach
                </div>
                <div style={{
                    flex: 1,
                    padding: "1rem",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                }}>
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            style={{
                                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                                background: msg.from === "user" ? "#eaf6ff" : "#f1f0f0",
                                color: "#222",
                                borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                padding: "0.7rem 1rem",
                                maxWidth: "80%",
                                fontSize: "1rem",
                                boxShadow: "0 1px 4px rgba(44,130,201,0.04)"
                            }}
                        >
                            {msg.text}
                        </div>
                    ))}
                    {loading && (
                        <div style={{
                            alignSelf: "flex-start",
                            color: "#888",
                            fontStyle: "italic",
                            fontSize: "1rem"
                        }}>
                            Coach đang trả lời...
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>
                <form
                    onSubmit={handleSend}
                    style={{
                        display: "flex",
                        borderTop: "1px solid #e0e6ed",
                        padding: "0.7rem",
                        gap: 8,
                        background: "#fafbfc",
                        borderRadius: "0 0 14px 14px"
                    }}
                >
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Nhập tin nhắn..."
                        style={{
                            flex: 1,
                            border: "1px solid #cfd8dc",
                            borderRadius: 8,
                            padding: "0.6rem",
                            fontSize: "1rem",
                            outline: "none"
                        }}
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        style={{
                            background: "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: 8,
                            padding: "0.6rem 1.2rem",
                            fontWeight: 600,
                            fontSize: "1rem",
                            cursor: loading ? "not-allowed" : "pointer"
                        }}
                        disabled={loading}
                    >
                        Gửi
                    </button>
                </form>
            </div>
        </div>
    );
}
