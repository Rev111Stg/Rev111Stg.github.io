body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background: #121212;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  text-align: center;
  width: 90%;
  max-width: 420px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  background: #00c8d6;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background: #00a5b3;
}

#fundTable {
  width: 100%;
  margin-top: 16px;
  border-collapse: collapse;
}
#fundTable td {
  padding: 6px;
  border-bottom: 1px solid #333;
  text-align: left;
}
#fundTable input {
  width: 100%;
  background: #1e1e1e;
  border: 1px solid #333;
  color: #e0e0e0;
  padding: 4px;
  border-radius: 4px;
}

#saveBtn {
  margin-top: 10px;
  width: 100%;
}

#settingsBtn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #00c8d6;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 22px;
}

#settingsPanel {
  position: fixed;
  top: 0;
  left: -320px;
  width: 300px;
  height: 100%;
  background: rgba(30,30,30,0.9);
  backdrop-filter: blur(8px);
  padding: 20px;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#settingsPanel.show {
  left: 0;
}
#settingsPanel input {
  width: 100%;
  background: #1e1e1e;
  border: 1px solid #333;
  color: #e0e0e0;
  padding: 6px;
  border-radius: 4px;
}

#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: #00c8d6;
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 500;
  opacity: 0;
  transition: all 0.4s ease;
}
#toast.show {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

@media (max-width: 500px) {
  .container {
    width: 95%;
    padding: 16px;
  }
}
