export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between ml-[50px]">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dami Shabi. All rights reserved.
        </p>
      
      </div>
    </footer>
  );
}
