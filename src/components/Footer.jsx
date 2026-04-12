const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-2">Designed and built with ❤️ by Ahmed Adel</p>
        <p>© {new Date().getFullYear()} Ahmed Adel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
