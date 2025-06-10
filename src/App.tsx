import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { routes } from './utils/routes/routes';
import { cn } from '@/lib/utils';


const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'px-4 py-2 text-sm transition-colors',
        isActive
          ? 'text-foreground font-bold'
          : 'text-muted-foreground hover:text-foreground font-medium'
      )}
    >
      {children}
    </Link>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container flex h-14 items-center pl-8">
            <nav className="flex items-center space-x-6 text-sm">
              {routes.map((route) => (
                <NavLink key={route.path} to={route.path}>
                  {route.title}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Navigate to="/api-data" replace />} />
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
