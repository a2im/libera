'use client';

import { AnimatePresence } from "framer-motion";

interface ProviderProps {
  children: React.ReactNode
}
export const Providers: React.FC<ProviderProps>= ({ children }: ProviderProps) => {
  return (
<AnimatePresence>
  {children}
  </AnimatePresence>
  );
}