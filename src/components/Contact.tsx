const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/beyonder101/' },
  { label: 'GitHub', href: 'https://github.com/Beyonder101/Portfolio' },
  { label: 'Twitter/X', href: 'https://twitter.com' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      data-section="contact"
      style={{
        minHeight: '100vh',
        padding: '96px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#1B3A2D',
        color: '#F3EFE5',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#4A7C59',
          marginBottom: 24,
        }}
      >
        03 — Contact
      </div>

      <div
        style={{
          fontSize: 'clamp(52px, 11vw, 88px)',
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '-0.04em',
          margin: '0 0 40px',
        }}
      >
        <span style={{ display: 'block', color: '#F3EFE5' }}>READY</span>
        <span style={{ display: 'block', WebkitTextStroke: '2.5px #F3EFE5', color: 'transparent' }}>
          TO GO?
        </span>
      </div>

      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(243,239,229,0.7)', maxWidth: 480, margin: '0 0 40px' }}>
        Open to PM roles, freelance projects &amp; interesting conversations.
      </p>

      <a
        href="mailto:himanshupeyush@gmail.com"
        className="btn-hover"
        style={{
          display: 'inline-block',
          padding: '18px 36px',
          background: '#F3EFE5',
          color: '#1B3A2D',
          fontSize: 18,
          fontWeight: 700,
          borderRadius: 8,
          textDecoration: 'none',
          marginBottom: 40,
          alignSelf: 'flex-start',
        }}
      >
        himanshupeyush@gmail.com
      </a>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
            style={{
              padding: '10px 22px',
              borderRadius: 999,
              border: '0.5px solid rgba(243,239,229,0.25)',
              color: 'rgba(243,239,229,0.65)',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.04em',
              textDecoration: 'none',
            }}
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}
