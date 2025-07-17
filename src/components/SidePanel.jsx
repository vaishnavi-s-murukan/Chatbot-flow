import React from "react";
import { MessageSquare } from "lucide-react";

export default function SidePanel({
  selectedNode,
  setSelectedNode,
  onTextChange,
  onDragStart,
}) {
  return (
    <div
      style={{
        width: 300,
        padding: 16,
        borderLeft: "1px solid #eee",
        backgroundColor: "#fafafa",
        height: "100%",
        position: "relative",
      }}
    >
      {selectedNode ? (
        <>
          {/* Header: Back arrow + centered Message title + extended underline */}
          <div
            style={{
              position: "relative",
              borderBottom: "1px solid #ddd",
              paddingBottom: 8,
              marginBottom: 12,
              height: 32,
              display: "flex",
              alignItems: "center",
              marginLeft: -16, // Extend underline
              marginRight: -16,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            {/* ← back button */}
            <div
              onClick={() => setSelectedNode(null)}
              style={{
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 500,
                color: "#333",
                zIndex: 5,
              }}
            >
              ←
            </div>

            {/* Centered title using absolute positioning */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                textAlign: "center",
                fontWeight: 600,
                fontSize: 14,
                color: "#333",
                pointerEvents: "none",
              }}
            >
              Message
            </div>
          </div>

          {/* Label */}
          <label
            style={{
              fontSize: 12,
              color: "#555",
              fontWeight: 500,
              display: "block",
              marginBottom: 4,
            }}
          >
            Text
          </label>

          {/* Text area */}
          <textarea
            value={selectedNode.data.label}
            onChange={(e) => onTextChange(selectedNode.id, e.target.value)}
            style={{
              width: "100%",
              height: 50,
              padding: 8,
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 13,
              backgroundColor: "#fff",
            }}
          />
        </>
      ) : (
        <>
          {/* Drag-n-drop message card (square button) */}
          <div
            onDragStart={(e) => onDragStart(e, "textNode")}
            draggable
            style={{
              width: 120,
              height: 120,
              border: "1px solid #2d6cdf",
              borderRadius: 12,
              backgroundColor: "#fff",
              color: "#2d6cdf",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              cursor: "grab",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              transition: "all 0.2s ease-in-out",
              margin: "0 auto", // Center horizontally
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f0f6ff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
            }}
          >
            {/* Blue icon in circle */}
            <div
              style={{
                backgroundColor: "#e5f0ff",
                borderRadius: "50%",
                padding: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageSquare size={18} color="#2d6cdf" />
            </div>
            <span style={{ fontWeight: 500, fontSize: 14 }}>Message</span>
          </div>

        </>
      )}
    </div>
  );
}
