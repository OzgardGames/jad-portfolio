export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex justify-between flex-wrap gap-4">
        <span>© {new Date().getFullYear()} Jad Boukentar</span>
        <span>Technical Artist · Game Designer</span>
        <span>Ottawa, Canada</span>
      </div>
    </footer>
  );
}