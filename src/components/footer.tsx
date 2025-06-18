import React from "react";

const Footer = () => {
  return (
    <footer
      className="h-[30vh] w-full relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/bg/bg-footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Footer Content */}
      <div className="relative z-10 text-center text-[#ffffe4] font-mono">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl font-semibold uppercase tracking-wide">
            Lightning Grants
          </h3>
          <p className="text-sm opacity-80 uppercase">
            First to Back the First to Build.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-wider">
            <span>© 2025</span>
            <span>•</span>
            <span>Telegram</span>
            <span>•</span>
            <span>X.COM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
