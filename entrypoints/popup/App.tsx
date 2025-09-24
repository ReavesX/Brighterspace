// entrypoints/popup/App.tsx - With all feature buttons
import { useState } from "react";
import "./App.css";

type TabType = 'main' | 'themes' | 'sidebar' | 'tasks' | 'rubric' | 'groups' | 'sync' | 'settings';

function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('main');

  const handleFeatureClick = (feature: string) => {
    console.log(`${feature} clicked - not implemented yet`);
    // TODO: Implement actual feature logic
  };

  return (
    <div className="main">
      <div id="gradientbg"></div>
      
      <div className="header">
        <div className="logo-text">B+</div>
        <h1>Brighterspace</h1>
      </div>

      {/* Main Navigation */}
      <div className="nav-tabs">
        <button 
          className={`nav-tab ${currentTab === 'main' ? 'active' : ''}`}
          onClick={() => setCurrentTab('main')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-tab ${currentTab === 'themes' ? 'active' : ''}`}
          onClick={() => setCurrentTab('themes')}
        >
          Themes
        </button>
        <button 
          className={`nav-tab ${currentTab === 'settings' ? 'active' : ''}`}
          onClick={() => setCurrentTab('settings')}
        >
          Settings
        </button>
      </div>

      <div className="content">
        {/* Main Dashboard */}
        {currentTab === 'main' && (
          <div className="dashboard-panel">
            <h2>Core Features</h2>
            
            <div className="feature-section">
              <h3>Productivity Tools</h3>
              <div className="feature-grid">
                <button 
                  className="feature-button"
                  onClick={() => setCurrentTab('sidebar')}
                >
                  <div className="feature-icon">📋</div>
                  <div className="feature-info">
                    <div className="feature-title">Persistent Sidebar</div>
                    <div className="feature-desc">Always-visible task list</div>
                  </div>
                </button>

                <button 
                  className="feature-button"
                  onClick={() => setCurrentTab('tasks')}
                >
                  <div className="feature-icon">✅</div>
                  <div className="feature-info">
                    <div className="feature-title">Task Management</div>
                    <div className="feature-desc">Organize assignments & dues</div>
                  </div>
                </button>

                <button 
                  className="feature-button"
                  onClick={() => setCurrentTab('rubric')}
                >
                  <div className="feature-icon">📊</div>
                  <div className="feature-info">
                    <div className="feature-title">Rubric Helper</div>
                    <div className="feature-desc">Auto-generate checklists</div>
                  </div>
                </button>

                <button 
                  className="feature-button"
                  onClick={() => handleFeatureClick('Screenshot')}
                >
                  <div className="feature-icon">📸</div>
                  <div className="feature-info">
                    <div className="feature-title">Evidence Capture</div>
                    <div className="feature-desc">Screenshot submissions</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="feature-section">
              <h3>Collaboration</h3>
              <div className="feature-grid">
                <button 
                  className="feature-button"
                  onClick={() => setCurrentTab('groups')}
                >
                  <div className="feature-icon">👥</div>
                  <div className="feature-info">
                    <div className="feature-title">Study Groups</div>
                    <div className="feature-desc">Real-time collaboration</div>
                  </div>
                </button>

                <button 
                  className="feature-button"
                  onClick={() => setCurrentTab('sync')}
                >
                  <div className="feature-icon">🔄</div>
                  <div className="feature-info">
                    <div className="feature-title">Offline Sync</div>
                    <div className="feature-desc">CRDT-based sync</div>
                  </div>
                </button>

                <button 
                  className="feature-button"
                  onClick={() => handleFeatureClick('Share Queue')}
                >
                  <div className="feature-icon">📤</div>
                  <div className="feature-info">
                    <div className="feature-title">Shared Queues</div>
                    <div className="feature-desc">Collaborative study lists</div>
                  </div>
                </button>

                <button 
                  className="feature-button"
                  onClick={() => handleFeatureClick('Annotations')}
                >
                  <div className="feature-icon">✏️</div>
                  <div className="feature-info">
                    <div className="feature-title">Group Annotations</div>
                    <div className="feature-desc">Annotate rubrics together</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="feature-section">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button 
                  className="action-button primary"
                  onClick={() => handleFeatureClick('Quick Submit')}
                >
                  🚀 Quick Submit
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => handleFeatureClick('Parse Rubric')}
                >
                  🔍 Parse Current Rubric
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => handleFeatureClick('Toggle Sidebar')}
                >
                  📋 Toggle Sidebar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar Configuration */}
        {currentTab === 'sidebar' && (
          <div className="feature-panel">
            <div className="panel-header">
              <h2>Persistent Sidebar</h2>
              <button className="back-button" onClick={() => setCurrentTab('main')}>← Back</button>
            </div>
            <div className="feature-content">
              <p>Configure your always-visible task sidebar</p>
              <div className="placeholder-controls">
                <label>
                  <input type="checkbox" /> Show sidebar on all pages
                </label>
                <label>
                  <input type="checkbox" /> Auto-hide when inactive
                </label>
                <label>
                  Sidebar position: 
                  <select>
                    <option>Right</option>
                    <option>Left</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Task Management */}
        {currentTab === 'tasks' && (
          <div className="feature-panel">
            <div className="panel-header">
              <h2>Task Management</h2>
              <button className="back-button" onClick={() => setCurrentTab('main')}>← Back</button>
            </div>
            <div className="feature-content">
              <p>Organize assignments and due dates</p>
              <div className="placeholder-controls">
                <label>
                  <input type="checkbox" /> Show overdue items
                </label>
                <label>
                  <input type="checkbox" /> Use relative due dates
                </label>
                <label>
                  Max items to show: 
                  <input type="range" min="3" max="10" defaultValue="5" />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Rubric Helper */}
        {currentTab === 'rubric' && (
          <div className="feature-panel">
            <div className="panel-header">
              <h2>Rubric-Aware Submission</h2>
              <button className="back-button" onClick={() => setCurrentTab('main')}>← Back</button>
            </div>
            <div className="feature-content">
              <p>Auto-generate submission checklists from rubrics</p>
              <div className="placeholder-controls">
                <label>
                  <input type="checkbox" /> Auto-parse rubrics
                </label>
                <label>
                  <input type="checkbox" /> Show rubric overlay
                </label>
                <label>
                  <input type="checkbox" /> Generate checklist suggestions
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Study Groups */}
        {currentTab === 'groups' && (
          <div className="feature-panel">
            <div className="panel-header">
              <h2>Study Groups</h2>
              <button className="back-button" onClick={() => setCurrentTab('main')}>← Back</button>
            </div>
            <div className="feature-content">
              <p>Create and manage collaborative study groups</p>
              <div className="placeholder-controls">
                <button className="action-button primary">Create New Group</button>
                <button className="action-button secondary">Join Existing Group</button>
                <div className="group-list">
                  <p>No active groups yet</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sync Settings */}
        {currentTab === 'sync' && (
          <div className="feature-panel">
            <div className="panel-header">
              <h2>Offline Sync</h2>
              <button className="back-button" onClick={() => setCurrentTab('main')}>← Back</button>
            </div>
            <div className="feature-content">
              <p>Configure CRDT-based offline synchronization</p>
              <div className="placeholder-controls">
                <label>
                  <input type="checkbox" /> Enable offline mode
                </label>
                <label>
                  <input type="checkbox" /> Auto-sync when online
                </label>
                <div className="sync-status">
                  <p>Status: <span className="status-indicator">Offline</span></p>
                  <button className="action-button secondary">Sync Now</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Themes Panel */}
        {currentTab === 'themes' && (
          <div className="themes-panel">
            <h2>Themes & Customization</h2>
            <div className="placeholder-controls">
              <p>Theme customization coming soon</p>
              <div className="theme-options">
                <button className="theme-button">Dark Theme</button>
                <button className="theme-button">Light Theme</button>
                <button className="theme-button">Auto Theme</button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Panel */}
        {currentTab === 'settings' && (
          <div className="settings-panel">
            <h2>Extension Settings</h2>
            <div className="settings-sections">
              <div className="setting-group">
                <h3>Privacy</h3>
                <label>
                  <input type="checkbox" /> Enable telemetry (anonymous)
                </label>
                <label>
                  <input type="checkbox" /> Store data locally only
                </label>
              </div>
              
              <div className="setting-group">
                <h3>Permissions</h3>
                <label>
                  <input type="checkbox" /> Allow content script injection
                </label>
                <label>
                  <input type="checkbox" /> Enable background sync
                </label>
              </div>

              <div className="setting-group">
                <h3>Data</h3>
                <button className="action-button secondary">Export Settings</button>
                <button className="action-button secondary">Import Settings</button>
                <button className="action-button danger">Reset All Data</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;