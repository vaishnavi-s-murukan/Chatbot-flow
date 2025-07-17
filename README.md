# 💬 Chatbot Flow Builder

🔗 Live Demo: https://chatbot-flow-zeta.vercel.app/

---

## 🧠 Overview

Let's get those message nodes flowing! This is a React Flow-powered chatbot builder with a WhatsApp-style message UI, editable nodes, and built-in save validation.

Built with extensibility, clean design, and a responsive layout in mind.

---

## ✨ Built With

- ⚛️ React Flow – for a seamless flow-building UX  
- 🎨 Tailwind CSS – for fast, modern styling  
- 🔔 React Toastify – to display success/error messages  
- 💬 React Icons – for WhatsApp and message icons  
- 🚀 Vercel – for simple deployment  

---

## 🎯 Features

- 💬 Message Nodes  
   - WhatsApp-styled green cards  
   - Comes with a message icon and editable label  

- 🧰 Node Panel  
   - Add prebuilt message nodes with one click  

- 🔗 Connect Nodes  
   - Visual linking via source & target handles  

- ☝️ Source Handles  
   - One outgoing edge allowed per node  

- 🎯 Target Handles  
   - Can accept multiple incoming edges  

- ⚙️ Settings Panel  
   - Click a node to edit its message content  

- 💾 Save Button  
   - ✅ Validates flow  
   - ❌ Shows red error toast if multiple nodes have empty target handles  
   - ✅ Shows green success toast if valid  

---

## 📦 Getting Started

### Prerequisites

- Node.js installed

### Installation

```bash
git clone https://github.com/vaishnavi-s-murukan/Chatbot-flow.git
cd chatbot-flow-builder
npm install
npm run dev
---
🖼️ Screenshots
Playground: public/readme-img/img1.png

Error Toast: public/readme-img/img2.png

Success Toast: public/readme-img/img3.png

🤖 Happy Coding!
Built with ❤️ using React and React Flow.
