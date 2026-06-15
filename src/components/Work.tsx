const PROJECTS = [
  {
    number: '01',
    tag: 'Freelance',
    name: 'Brand & Strategy — Client A',
    description: 'Go-to-market strategy, roadmap, launch',
  },
  {
    number: '02',
    tag: 'Corporate',
    name: 'Product Overhaul — Company B',
    description: 'Led full product redesign, 0→1 feature build',
  },
  {
    number: '03',
    tag: 'Freelance',
    name: 'Growth Systems — Client C',
    description: 'Retention flows, analytics, experimentation',
  },
  {
    number: '04',
    tag: 'Corporate',
    name: 'Platform Scaling — Company D',
    description: 'Cross-functional delivery, OKRs, stakeholders',
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
