'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const invoicePage = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div>Hello from Invoices Page</div>;
};

export default invoicePage;
