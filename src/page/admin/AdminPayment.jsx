import React, { useState } from "react";

const initialTransactions = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    email: "member1@gmail.com",
    amount: 199000,
    package: "Gói Pro",
    date: "2024-05-01",
    note: "Thanh toán thành công",
  },
  {
    id: 2,
    user: "Trần Thị B",
    email: "member2@gmail.com",
    amount: 399000,
    package: "Gói Plus",
    date: "2024-05-10",
    note: "Chờ xác nhận",
  },
];

export default function AdminPayment() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [editingId, setEditingId] = useState(null);
  const [editNote, setEditNote] = useState("");

  const handleEdit = (id, note) => {
    setEditingId(id);
    setEditNote(note);
  };

  const handleSave = (id) => {
    setTransactions(
      transactions.map((t) => (t.id === id ? { ...t, note: editNote } : t))
    );
    setEditingId(null);
    setEditNote("");
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "40px auto",
        background: "#fafdff",
        borderRadius: 18,
        padding: 40,
        boxShadow: "0 6px 32px #2d98da22",
        minHeight: 500,
      }}
    >
      <h2
        style={{
          color: "#2d98da",
          marginBottom: 32,
          fontWeight: 800,
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Quản lý giao dịch thanh toán
      </h2>
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            background: "#fff",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 12px #2d98da11",
          }}
        >
          <thead>
            <tr style={{ background: "#eaf6ff" }}>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                STT
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Tên người dùng
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Email
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Gói
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Số tiền
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Ngày
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Nội dung
              </th>
              <th
                style={{
                  padding: 16,
                  borderBottom: "2px solid #2d98da22",
                  fontWeight: 700,
                }}
              >
                Chỉnh sửa
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, idx) => (
              <tr
                key={t.id}
                style={{
                  background: idx % 2 === 0 ? "#f8fbff" : "#fff",
                }}
              >
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                    textAlign: "center",
                  }}
                >
                  {idx + 1}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                  }}
                >
                  {t.user}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                  }}
                >
                  {t.email}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                  }}
                >
                  <span
                    style={{
                      background:
                        t.package === "Gói Plus" ? "#2d98da" : "#7c4dff",
                      color: "#fff",
                      padding: "4px 14px",
                      borderRadius: 16,
                      fontWeight: 600,
                      fontSize: 14,
                    }}
                  >
                    {t.package}
                  </span>
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                    color: "#27ae60",
                    fontWeight: 700,
                  }}
                >
                  {t.amount.toLocaleString()}₫
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                  }}
                >
                  {t.date}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                  }}
                >
                  {editingId === t.id ? (
                    <input
                      value={editNote}
                      onChange={(e) => setEditNote(e.target.value)}
                      style={{
                        width: 140,
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "1px solid #cfd8dc",
                        fontSize: 15,
                      }}
                    />
                  ) : (
                    t.note
                  )}
                </td>
                <td
                  style={{
                    padding: 14,
                    borderBottom: "1px solid #e3eaf3",
                    textAlign: "center",
                  }}
                >
                  {editingId === t.id ? (
                    <button
                      onClick={() => handleSave(t.id)}
                      style={{
                        background:
                          "linear-gradient(90deg, #2d98da 60%, #3867d6 100%)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "6px 18px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      Lưu
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(t.id, t.note)}
                      style={{
                        background: "#eaf6ff",
                        color: "#2d98da",
                        border: "1px solid #2d98da22",
                        borderRadius: 6,
                        padding: "6px 18px",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      Sửa
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
