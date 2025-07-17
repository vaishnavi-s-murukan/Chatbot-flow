import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  MarkerType,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TextNode } from "./nodes/TextNode";
import SidePanel from "./components/SidePanel";

const nodeTypes = {
  textNode: TextNode,
};

function FlowApp() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  useEffect(() => {
    if (!selectedNode) return;
    const updated = nodes.find((n) => n.id === selectedNode.id);
    if (updated) setSelectedNode(updated);
  }, [nodes, selectedNode]);

  const onConnect = useCallback(
    (params) => {
      const from = params.source;
      const alreadyConnected = edges.find((e) => e.source === from);
      if (alreadyConnected) return;

      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "default",
            markerEnd: {
              type: MarkerType.ArrowClosed,
              width: 20,
              height: 20,
              color: "black",
            },
          },
          eds
        )
      );
    },
    [edges, setEdges]
  );

  const onTextChange = (id, value) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          const updatedNode = {
            ...node,
            data: { ...node.data, label: value, onChange: onTextChange },
          };
          if (selectedNode && selectedNode.id === id) {
            setSelectedNode(updatedNode);
          }
          return updatedNode;
        }
        return node;
      })
    );
  };
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      if (!type || !reactFlowInstance) return;

      const bounds = reactFlowWrapper.current.getBoundingClientRect();
      const position = reactFlowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const newNode = {
        id: crypto.randomUUID(),
        type,
        position,
        data: {
          label: "New message",
          onChange: onTextChange,
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const handleSave = () => {
    const nodesWithNoIncoming = nodes.filter(
      (node) => !edges.some((e) => e.target === node.id)
    );

    if (nodes.length > 1 && nodesWithNoIncoming.length > 1) {
      toast.error(`❌ Cannot Save Flow`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    toast.success("✅ Flow saved successfully!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });

    console.log("✅ Flow saved:", { nodes, edges });
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <div
        style={{
          height: 50,
          background: "#f5f5f5",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <button
          onClick={handleSave}
          style={{
            padding: "6px 12px",
            background: "white",
            color: "#2d6cdf",
            border: "1px solid #2d6cdf",
            borderRadius: 4,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex" }}>
        <div
          ref={reactFlowWrapper}
          style={{ flex: 1 }}
          className="reactflow-wrapper"
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={(e, node) => setSelectedNode(node)}
            nodeTypes={useMemo(() => nodeTypes, [])}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background gap={16} />
          </ReactFlow>
        </div>

        {/* Side Panel */}
        <SidePanel
          selectedNode={selectedNode}
          setSelectedNode={setSelectedNode}
          onTextChange={onTextChange}
          onDragStart={onDragStart}
        />
      </div>
    </div>
  );
}

export default function WrappedFlowApp() {
  return (
    <ReactFlowProvider>
      <FlowApp />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        theme="colored"
      />
    </ReactFlowProvider>
  );
}
