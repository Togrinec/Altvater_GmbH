// Route-Group-Layout für alle öffentlichen Seiten
// Kein eigenes Layout nötig – erbt vom Root-Layout
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
