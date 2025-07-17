import React from "react";
import { Handle, Position } from "reactflow";
import { MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const TextNode = ({ data }) => {
  return (
    <div
      style={{
        padding: 8,
        borderRadius: 10,
        backgroundColor: "#d2fbe4",
        border: "1px solid #1bd741",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        width: 160,
        fontFamily: "sans-serif",
        fontSize: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 10,
          }}
        >
          <MessageSquare size={12} />
          Send Message
        </span>
        <FaWhatsapp size={14} color="#25d366" />
      </div>

      <div style={{ marginTop: 6, fontSize: 10, color: "#333" }}>
        {data.label}
      </div>

      <Handle
        type="target"
        position={Position.Top}
        style={{ width: 6, height: 6 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ width: 6, height: 6 }}
      />
    </div>
  );
};
