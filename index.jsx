import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App.jsx'



const List = (props) => {
  // Cambia el código debajo de esta línea
  return (
    <div className="task-list">
      {props.tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div className="task-dot"></div>
          <span className="task-text">{task}</span>
        </div>
      ))}
    </div>
  )
  // Cambia el código encima de esta línea
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="todo-container">
        <h1 className="main-title">✨ To Do Lists</h1>
        
        <div className="section">
          <h2 className="section-title today">🌅 Today</h2>
          {/* Cambia el código debajo de esta línea */}
          <List tasks={["walk dog", "workout"]}/>
        </div>
        
        <div className="section">
          <h2 className="section-title tomorrow">🌙 Tomorrow</h2>
          <List tasks={["study React", "go shopping", "clean house"]}/>
          {/* Cambia el código encima de esta línea */}
        </div>
      </div>
    );
  }
};

export default () => (
  <>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        padding: 2rem;
      }
      
      .todo-container {
        max-width: 600px;
        margin: 0 auto;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 24px;
        padding: 2.5rem;
        box-shadow: 
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .main-title {
        font-size: 2.5rem;
        font-weight: 700;
        text-align: center;
        background: linear-gradient(135deg, #667eea, #764ba2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
      }
      
      .section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
      }
      
      .section:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.1);
      }
      
      .section-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .section-title.today {
        color: #f59e0b;
      }
      
      .section-title.tomorrow {
        color: #8b5cf6;
      }
      
      .task-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      
      .task-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      
      .task-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      
      .task-item:hover {
        transform: translateX(4px);
        box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.15);
      }
      
      .task-item:hover::before {
        transform: scaleX(1);
      }
      
      .task-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea, #764ba2);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
        flex-shrink: 0;
      }
      
      .task-text {
        font-size: 1rem;
        color: #374151;
        font-weight: 500;
        line-height: 1.5;
        text-transform: capitalize;
      }
      
      /* Animaciones suaves */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .section {
        animation: fadeInUp 0.6s ease forwards;
      }
      
      .section:nth-child(2) {
        animation-delay: 0.1s;
      }
      
      .section:nth-child(3) {
        animation-delay: 0.2s;
      }
      
      /* Responsive */
      @media (max-width: 640px) {
        body {
          padding: 1rem;
        }
        
        .todo-container {
          padding: 1.5rem;
        }
        
        .main-title {
          font-size: 2rem;
        }
        
        .section-title {
          font-size: 1.25rem;
        }
      }
    `}</style>
    <ToDo />
  </>
);