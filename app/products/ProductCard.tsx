export default function ProductCard({ item }: any) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
        backgroundColor: "#f9f9f9"
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />

      <h3 style={{ fontSize: "14px" }}>{item.title}</h3>

      {/* ราคา (เปลี่ยนสีแล้ว) */}
      <p
        style={{
          color: "green",
          fontWeight: "bold",
          fontSize: "18px"
        }}
      >
        ${item.price}
      </p>

      <button
        style={{
          padding: "8px 12px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Buy Now
      </button>
    </div>
  );
}