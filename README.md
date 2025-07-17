💬 Chatbot Flow Builder
Live Demo 👉 https://chatbot-flow-zeta.vercel.app/

🧠 Overview
Let's get those message nodes flowing! This is a React Flow-powered chatbot builder with a WhatsApp-style message UI, editable nodes, and save validation built in. ✨

Built with extensibility, clean design, and a responsive layout in mind.

✨ Built With:
React Flow – for a seamless flow-building UX

React Icons – for WhatsApp and message icons

React Toastify – to display success/error messages

Tailwind CSS – for fast, modern UI styling

Vercel – for simple deployment

🎯 Features
💬 Message Nodes: Add green WhatsApp-styled message blocks with icons and editable text.

🧰 Node Panel: Add prebuilt message nodes with a single click (can be expanded later).

🔗 Connect Nodes: Visual linking between source and target handles.

📌 Source Handles: One outgoing edge per node.

🎯 Target Handles: Accept multiple incoming connections.

⚙️ Settings Panel: Click a node to edit the message content live.

💾 Save Button:

✅ Validates flow

❌ Prevents save if multiple nodes have empty target handles

🔔 Shows toast on success or failure (green or red)

📦 Getting Started
Prerequisites
Node.js installed

Installation
Clone the repo:
git clone https://github.com/your-username/chatbot-flow-builder.git

Navigate to the project folder:
cd chatbot-flow-builder

Install dependencies:
npm install

Start the development server:
npm run dev

Visit http://localhost:3000 and start building flows!

🔔 Toast Notifications
Condition	Toast Color	Message
✅ All nodes valid	Green	"Flow saved successfully!"
❌ One or more unconnected nodes	Red	"Please connect all nodes before saving."


🖼️ Screenshots
Playground: public/readme-img/img1.png
Error Toast: public/readme-img/img2.png
Success Toast: public/readme-img/img3.png

🤖 Happy Coding!
Built with ❤️ using React and React Flow.
