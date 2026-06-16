const SKILLS = [
  'Product Strategy',
  'User Research',
  'Data & Analytics',
  'Delivery',
  'Stakeholder Management',
  'Freelance & Consulting',
];

export default function About() {
  return (
    <section
      id="about"
      data-section="about"
      style={{
        minHeight: '100vh',
        padding: '96px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 16,
        }}
      >
        02 — About
      </div>
      <h2
        style={{
          fontSize: 'clamp(36px, 5vw, 44px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '0 0 56px',
        }}
      >
        The person behind the work.
      </h2>

      <div
        className="two-col-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
        }}
      >
        <div>
          <blockquote
            style={{
              borderLeft: '2px solid #4A7C59',
              paddingLeft: 20,
              margin: '0 0 28px',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.4,
            }}
          >
            I don&apos;t just ship features — I ship outcomes.
          </blockquote>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 32px' }}>
            Creative by training, strategic by choice. I&apos;ve spent 5+ years working across
            design, product, and freelance — from building apps for dairy startups to shipping game
            engines. I bring the maker&apos;s perspective to every product decision.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            alignContent: 'start',
          }}
        >
          {SKILLS.map((skill) => (
            <div
              key={skill}
              style={{
                background: 'var(--stat-bg)',
                borderRadius: 10,
                padding: '20px 18px',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
