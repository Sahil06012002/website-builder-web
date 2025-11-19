export const Navbar = () => {
  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                AB
              </span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              AppBuilder
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-base"
            >
              Examples
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-base"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-base"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-foreground hover:text-primary transition-base">
            Sign In
          </button>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-base">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
