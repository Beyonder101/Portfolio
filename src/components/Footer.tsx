export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#1B3A2D',
        color: 'rgba(243,239,229,0.6)',
        borderTop: '0.5px solid rgba(243,239,229,0.13)',
        padding: '24px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
        fontSize: 12,
        letterSpacing: '0.02em',
      }}
    >
      <span>© 2025 Himanshu Saini</span>
      <span>himanshusaini.org</span>
    </footer>
  );
}
