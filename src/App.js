import React, { useState } from 'react';
import { Shield, CheckCircle, Camera, FileCheck, MessageCircle, ArrowRight, Building2, TrendingUp, Plus, Eye, EyeOff } from 'lucide-react';

// Simple router
function App() {
  const [page, setPage] = useState('landing'); // landing, login, dashboard

  if (page === 'landing') return <LandingPage onLogin={() => setPage('login')} />;
  if (page === 'login') return <LoginPage onLogin={() => setPage('dashboard')} onBack={() => setPage('landing')} />;
  if (page === 'dashboard') return <Dashboard onLogout={() => setPage('landing')} />;
  
  return <LandingPage onLogin={() => setPage('login')} />;
}

// LANDING PAGE
function LandingPage({ onLogin }) {
  return (
    <div>
      {/* Nav */}
      <nav className="nav container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 40, height: 40, background: '#0ea5e9', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield color="white" size={24} />
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 'bold' }}>BuildGuardian</h1>
        </div>
        <button className="btn" onClick={onLogin}>Sign In</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 24, color: '#1c1917' }}>
            Stop Losing Money on Construction Back Home
          </h1>
          <p style={{ fontSize: 20, color: '#57534e', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
            Independent professional oversight for African diaspora building remotely. 
            We verify every phase, every payment, and every promise.
          </p>
          <button className="btn" onClick={onLogin} style={{ fontSize: 18, padding: '16px 32px' }}>
            Start Protecting Your Build <ArrowRight style={{ display: 'inline', marginLeft: 8 }} />
          </button>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 24px' }} className="container">
        <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48 }}>
          How We Protect Your Investment
        </h2>
        <div className="grid-3">
          <div className="card" style={{ textAlign: 'center' }}>
            <Camera size={48} color="#0ea5e9" style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Photo Verification</h3>
            <p style={{ color: '#57534e' }}>Local engineers document every phase with geotagged media. See real progress, not filtered updates.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <FileCheck size={48} color="#0ea5e9" style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Milestone Payments</h3>
            <p style={{ color: '#57534e' }}>Funds released only after independent verification. No more disappearing contractors.</p>
          </div>
          <div className="card" style={{ textAlign: 'center' }}>
            <MessageCircle size={48} color="#0ea5e9" style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>WhatsApp Updates</h3>
            <p style={{ color: '#57534e' }}>Get instant updates via WhatsApp. No app download required.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 24px', background: '#f5f5f4' }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48 }}>
            Transparent Pricing
          </h2>
          <div className="pricing-grid">
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Starter</h3>
              <p style={{ fontSize: 36, fontWeight: 'bold', color: '#0ea5e9', marginBottom: 8 }}>£2,500</p>
              <p style={{ color: '#57534e', marginBottom: 24 }}>Projects up to $50k</p>
              <button className="btn" onClick={onLogin} style={{ width: '100%' }}>Get Started</button>
            </div>
            <div className="card" style={{ textAlign: 'center', border: '2px solid #0ea5e9' }}>
              <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Professional</h3>
              <p style={{ fontSize: 36, fontWeight: 'bold', color: '#0ea5e9', marginBottom: 8 }}>£4,000</p>
              <p style={{ color: '#57534e', marginBottom: 24 }}>Projects $50k-$100k</p>
              <button className="btn" onClick={onLogin} style={{ width: '100%' }}>Most Popular</button>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Enterprise</h3>
              <p style={{ fontSize: 36, fontWeight: 'bold', color: '#0ea5e9', marginBottom: 8 }}>£6,000+</p>
              <p style={{ color: '#57534e', marginBottom: 24 }}>Projects $100k+</p>
              <button className="btn" onClick={onLogin} style={{ width: '100%' }}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// LOGIN PAGE
function LoginPage({ onLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #e0f2fe, #f5f5f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="card login-box">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, background: '#0ea5e9', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
            <Shield color="white" size={32} />
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome Back</h2>
          <p style={{ color: '#57534e', marginTop: 8 }}>Sign in to manage your projects</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Email</label>
            <input 
              type="email" 
              placeholder="demo@buildguardian.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {showPassword ? <EyeOff size={20} color="#57534e" /> : <Eye size={20} color="#57534e" />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn" style={{ width: '100%', padding: 14 }}>
            Sign In <ArrowRight size={18} style={{ display: 'inline', marginLeft: 8 }} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, color: '#57534e' }}>
          Demo: Any email/password works
        </p>
        <button onClick={onBack} style={{ display: 'block', margin: '16px auto 0', background: 'none', border: 'none', color: '#0ea5e9', cursor: 'pointer' }}>
          ← Back to home
        </button>
      </div>
    </div>
  );
}

// DASHBOARD
function Dashboard({ onLogout }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f4' }}>
      {/* Nav */}
      <nav className="nav container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 40, height: 40, background: '#0ea5e9', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield color="white" size={24} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 'bold' }}>BuildGuardian</h1>
        </div>
        <button className="btn" onClick={onLogout} style={{ background: '#57534e' }}>Logout</button>
      </nav>

      <div className="container" style={{ padding: '32px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 'bold' }}>Project Dashboard</h2>
            <p style={{ color: '#57534e', marginTop: 4 }}>Overseeing 1 active construction project</p>
          </div>
          <button className="btn" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Plus size={20} /> New Project
          </button>
        </div>

        {/* Stats */}
        <div className="dashboard-stats">
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#57534e', fontSize: 14 }}>Active Projects</p>
                <p style={{ fontSize: 32, fontWeight: 'bold', marginTop: 4 }}>1</p>
              </div>
              <Building2 size={40} color="#0ea5e9" />
            </div>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#57534e', fontSize: 14 }}>Budget Managed</p>
                <p style={{ fontSize: 32, fontWeight: 'bold', marginTop: 4 }}>$85k</p>
              </div>
              <TrendingUp size={40} color="#22c55e" />
            </div>
          </div>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#57534e', fontSize: 14 }}>Completion</p>
                <p style={{ fontSize: 32, fontWeight: 'bold', marginTop: 4 }}>65%</p>
              </div>
              <CheckCircle size={40} color="#0ea5e9" />
            </div>
          </div>
        </div>

        {/* Project Card */}
        <div className="card project-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, background: '#e0f2fe', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building2 color="#0ea5e9" size={28} />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 'bold' }}>Banjul Family Villa</h3>
                <p style={{ color: '#57534e' }}>Serekunda, The Gambia</p>
              </div>
            </div>
            <span style={{ background: '#dcfce7', color: '#166534', padding: '6px 16px', borderRadius: 20, fontSize: 14, fontWeight: 500 }}>Active</span>
          </div>
          
          <div style={{ width: '100%', background: '#e7e5e4', borderRadius: 8, height: 8, marginBottom: 12 }}>
            <div style={{ width: '65%', background: '#0ea5e9', height: 8, borderRadius: 8 }}></div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#57534e', fontSize: 14 }}>
            <span>Current Phase: <strong>Structure</strong></span>
            <span>Est. Completion: Aug 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
