'use client';

import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

const Layout = ({ children }) => { 
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 dark:bg-gray-900">
      <div className="mb-6 flex justify-end">
        <Button onClick={() => router.back()}>
          Volver
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Layout; 
