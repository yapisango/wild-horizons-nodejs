# 🌍 Destination API Server

A simple **Node.js REST API** built with the native `http` module — no frameworks!  
It serves travel destination data and supports filtering by continent, country, and query parameters.

---

## 🚀 Features

- Serves JSON data from a mock database
- Handles routes like:
  - `/api` → returns all destinations  
  - `/api/continent/:continent` → returns destinations by continent  
  - `/api/country/:country` → returns destinations by country  
- Supports query filtering (e.g. `/api?continent=Europe&country=France`)
- Lightweight, framework-free Node.js setup

---

## 📂 Project Structure

.
├── database/
│ └── db.js # Simulated database source
├── utils/
│ ├── sendJSONResponse.js # Sends JSON responses
│ ├── getDataByPathParams.js
│ └── getDataByQueryParams.js
├── server.js # Main HTTP server
├── package.json
└── README.md

 
Copy code

 

## 🧩 Installation

Clone the repository and install dependencies:

 
git clone https://github.com/your-username/destination-api.git
cd destination-api
npm install
🧠 Usage
Start the server locally:

 
Copy code
npm start
Server runs on:

arduino
Copy code
http://localhost:8000
🧾 Example Endpoints
Method	Endpoint	Description
GET	/api	Get all destinations
GET	/api?continent=Africa	Filter by query parameters
GET	/api/continent/Europe	Filter by continent
GET	/api/country/Japan	Filter by country

🌐 Deployment on Render
Push your project to GitHub:

  
git add .
git commit -m "Initial commit"
git push origin main
Go to https://render.com

Click “New Web Service”

Connect your GitHub repo

Set Environment: Node

Build Command: npm install

Start Command: npm start


 
const PORT = process.env.PORT || 8000
Once deployed, test your API at:

arduino
Copy code
https://wild-horizons-nedejs.onrender.com/api

🧰 Tech Stack

Node.js (ES Modules)

Native HTTP Server

Custom Utility Functions

JSON Data Storage

👨‍💻 Author

Sango Mabhuti Yapi
Frontend & Node.js Developer
🌍 Johannesburg, South Africa
🔗 LinkedIn
 | GitHub