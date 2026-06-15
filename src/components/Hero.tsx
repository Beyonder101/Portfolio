const STATS = [
  { label: 'Projects', value: '12+' },
  { label: 'Clients', value: '8+' },
  { label: 'Years', value: '5+' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px',
        paddingTop: '40px',
        paddingBottom: '64px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            borderRadius: 999,
            border: '0.5px solid rgba(27,58,45,0.2)',
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Open to opportunities
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          ↓ Scroll
        </span>
      </div>

      <div
        style={{
          fontSize: 'clamp(52px, 11vw, 88px)',
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          margin: '40px 0',
        }}
      >
        <span style={{ display: 'block', color: '#1B3A2D' }}>HIMAN</span>
        <span style={{ display: 'block', WebkitTextStroke: '2.5px #1B3A2D', color: 'transparent' }}>
          SHU.
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 40,
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p style={{ fontSize: 20, fontWeight: 700, margin: '0 0 12px', letterSpacing: '-0.01em' }}>
            I build things that don&apos;t need explaining.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', margin: '0 0 28px' }}>
            Product manager &amp; freelance strategist — turning messy problems into clean, shipped
            solutions.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#work"
              className="btn-hover"
              style={{
                padding: '14px 28px',
                background: '#1B3A2D',
                color: '#F3EFE5',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.02em',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              See my work
            </a>
            <a
              href="#contact"
              className="btn-hover"
              style={{
                padding: '14px 28px',
                background: 'transparent',
                color: '#1B3A2D',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.02em',
                borderRadius: 8,
                border: '1px solid rgba(27,58,45,0.25)',
                textDecoration: 'none',
              }}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(80px, 1fr))',
            gap: 12,
            width: '100%',
            maxWidth: 360,
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'var(--stat-bg)',
                borderRadius: 10,
                padding: '16px 18px',
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>{stat.value}</div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
