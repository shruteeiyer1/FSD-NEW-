import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">👤 Users: 120</div>
              <div className="card">📦 Recipes: 45</div>
              <div className="card">⭐ Reviews: 230</div>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="tab-content">
            <h2>User Profile</h2>
            <p>Name: Shruti Sharma</p>
            <p>Role: Admin</p>
            <p>Email: shruti@example.com</p>
          </div>
        );
      case "reports":
        return (
          <div className="tab-content">
            <h2>Reports</h2>
            <p>Monthly visits: 2,430</p>
            <p>Most popular recipe: Chocolate Cake 🍰</p>
            <p>Feedback rating: 4.8⭐</p>
          </div>
        );
      case "settings":
        return (
          <div className="tab-content">
            <h2>Settings</h2>
            <p>Theme: Light Mode</p>
            <p>Notifications: Enabled</p>
            <p>Backup: Scheduled</p>
          </div>
        );
      default:
        return <h2>Welcome to your Dashboard</h2>;
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h1>Dashboard</h1>
        <nav>
          <button onClick={() => setActiveTab("dashboard")}>🏠 Dashboard</button>
          <button onClick={() => setActiveTab("profile")}>👤 Profile</button>
          <button onClick={() => setActiveTab("reports")}>📊 Reports</button>
          <button onClick={() => setActiveTab("settings")}>⚙️ Settings</button>
        </nav>
      </aside>
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
