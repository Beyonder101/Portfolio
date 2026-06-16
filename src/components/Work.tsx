const PROJECTS = [
  {
    number: '01',
    tag: 'Corporate',
    name: 'Hara',
    description: 'Delivered end-to-end digital art production and client mock-ups for a Delhi-based design studio',
  },
  {
    number: '02',
    tag: 'Corporate',
    name: 'Cremeway Dairy Farms',
    description: 'Designed a big-basket-style e-commerce app for a dairy startup, from concept to client sign-off',
  },
  {
    number: '03',
    tag: 'Freelance',
    name: 'Evidyaloka',
    description: 'Conceptualized and produced a full coffee table book for an education nonprofit',
  },
  {
    number: '04',
    tag: 'Freelance',
    name: 'Brand Creative',
    description: 'Social media campaigns and standee posters for Alienware, Canon, Godrej, and Google Pixel',
  },
];

export default function Work() {
  return (
    <section
      id="work"
      data-section="work"
      style={{
        minHeight: '100vh',
        padding: '96px 32px',
        display: 'flex',
        flexDirection: 'column',
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
        01 — Work
      </div>
      <h2
        style={{
          fontSize: 'clamp(36px, 5vw, 44px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          margin: '0 0 56px',
        }}
      >
        Selected projects
      </h2>

      <div style={{ borderTop: '0.5px solid var(--border)' }}>
        {PROJECTS.map((project) => (
          <a
            key={project.number}
            href="#"
            className="work-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '22px 12px',
              borderBottom: '0.5px solid var(--border)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: 13, color: 'var(--text-muted)', width: 28 }}>
              {project.number}
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '5px 12px',
                borderRadius: 999,
                background: project.tag === 'Freelance' ? '#4A7C59' : '#1B3A2D',
                color: '#F3EFE5',
              }}
            >
              {project.tag}
            </span>
            <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', flex: '1 1 220px' }}>
              {project.name}
            </span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', flex: '1 1 220px' }}>
              {project.description}
            </span>
            <span style={{ fontSize: 18, marginLeft: 'auto' }}>↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
