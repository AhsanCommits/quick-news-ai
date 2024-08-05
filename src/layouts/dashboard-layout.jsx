import * as React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';

import DashboardNavbar from '../components/DashboardNavbar';

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  console.log('test', userId);

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate('/sign-in');
    }
  }, [isLoaded]);

  if (!isLoaded) return 'Loading...';

  return (
    <>
      <header className="header">
        <DashboardNavbar />
      </header>
      <main>
        <Outlet />;
      </main>
    </>
  );
}
