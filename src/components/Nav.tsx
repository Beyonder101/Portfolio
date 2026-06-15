'use client';

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--page-bg)',
        transition: 'background-color 0.6s ease',
        borderBottom: '0.5px solid rgba(27,58,45,0.18)',
        padding: '20px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <a
        href="#hero"
        style={{
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: '#1B3A2D',
          textDecoration: 'none',
        }}
      >
        HS.
      </a>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {['Work', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link"
            style={{
              fontSize: 12,
              color: 'rgba(27,58,45,0.6)',
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            {item}
          </a>
        ))}
        <a
          href="mailto:himanshupeyush@gmail.com"
          style={{
            padding: '8px 18px',
            background: '#1B3A2D',
            color: '#F3EFE5',
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.04em',
            borderRadius: 6,
            textDecoration: 'none',
          }}
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
