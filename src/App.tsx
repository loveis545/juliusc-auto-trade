import React, { useState } from 'react';

// Product Catalog Data
const products = [
  { id: 1, name: 'Samsung Galaxy S24 Ultra', price: '₦850,000', specs: ['12GB RAM', '256GB Storage'], category: 'Smartphone', img: 'https://images.pexels.com/photos/19841444/pexels-photo-19841444.jpeg' },
  { id: 2, name: 'MacBook Air M2', price: '₦1,200,000', specs: ['8GB RAM', '256GB SSD'], category: 'Laptop', img: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg' },
  { id: 3, name: 'iPhone 15 Pro Max', price: '₦1,150,000', specs: ['8GB RAM', '512GB Storage'], category: 'Smartphone', img: 'https://images.pexels.com/photos/17864336/pexels-photo-17864336.jpeg' },
  { id: 4, name: 'Samsung Galaxy Z Fold 4', price: '₦950,000', specs: ['12GB RAM', '512GB Storage', 'Foldable'], category: 'Smartphone', img: 'https://images.pexels.com/photos/12844445/pexels-photo-12844445.jpeg' },
  { id: 5, name: 'Sony WH-1000XM5', price: '₦250,000', specs: ['Noise Cancelling', '30hr Battery'], category: 'Audio', img: 'https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg' },
];

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [search, setSearch] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Welcome Overlay */}
      {showWelcome && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to Julius C.</h2>
            <p style={{ color: '#888', marginBottom: '30px', fontSize: '1.2rem' }}>You are at the right place for all premium devices.</p>
            <button onClick={() => setShowWelcome(false)}
              style={{ padding: '15px 40px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
              Enter Julius C. Auto Trade
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav style={{ padding: '30px 40px', textAlign: 'center', borderBottom: '1px solid #1a1a1a' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '900', letterSpacing: '-1px' }}>JULIUS C <span style={{ color: '#3b82f6' }}>AUTO TRADE</span></h1>
      </nav>

      {/* Header */}
      <header style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '10px' }}>Premium Tech, Delivered.</h2>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>Curated, Vetted, and Elite.</p>
      </header>

      {/* Search */}
      <div style={{ maxWidth: '500px', margin: '0 auto 60px', padding: '0 20px' }}>
        <input type="text" placeholder="Search devices..." onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid #333', background: '#0a0a0a', color: 'white', textAlign: 'center' }} />
      </div>

      {/* Catalog */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', padding: '0 20px 80px' }}>
        {products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map((p) => (
          <div key={p.id} onMouseEnter={() => setHoveredId(p.id)} onMouseLeave={() => setHoveredId(null)}
            style={{ background: hoveredId === p.id ? 'linear-gradient(145deg, #111, #1a1a1a)' : '#0d0d0d', borderRadius: '20px', border: hoveredId === p.id ? '1px solid #3b82f6' : '1px solid #1a1a1a', transition: 'all 0.4s ease', transform: hoveredId === p.id ? 'translateY(-10px)' : 'translateY(0)' }}>
            <div style={{ height: '240px', background: '#000', overflow: 'hidden' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', transform: hoveredId === p.id ? 'scale(1.1)' : 'scale(1)' }} />
            </div>
            <div style={{ padding: '24px' }}>
              <span style={{ color: '#3b82f6', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase' }}>{p.category}</span>
              <h3 style={{ fontSize: '1.3rem', marginTop: '8px' }}>{p.name}</h3>
              <p style={{ color: '#aaa', fontWeight: 'bold', margin: '10px 0' }}>{p.price}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', color: '#777', fontSize: '0.9rem' }}>
                {p.specs.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
              <a href={`https://wa.me/2348039119345?text=Interested in ${p.name}`} target="_blank" rel="noreferrer"
                 style={{ display: 'block', padding: '12px', textAlign: 'center', background: hoveredId === p.id ? '#3b82f6' : '#fff', color: hoveredId === p.id ? '#fff' : '#000', borderRadius: '8px', textDecoration: 'none', fontWeight: '800', transition: '0.3s' }}>
                Order via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* About Us - RESTORED */}
      <section style={{ padding: '80px 20px', borderTop: '1px solid #1a1a1a', textAlign: 'center', background: '#0a0a0a' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>About Us</h3>
        <p style={{ color: '#888', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
          At Julius C. Auto Trade, we bridge the gap between premium global technology and your local needs. 
          Our mission is to make high-end technology accessible, affordable, and stress-free. 
          We personally vet every device to ensure you get nothing but the best performance.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', textAlign: 'center', color: '#444', fontSize: '0.9rem' }}>
        © 2026 Julius C. Auto Trade. All rights reserved.
      </footer>
    </div>
  );
};

export default App;