"use client"
import { AppContext } from '@/context/AppContext';
import useInitialState from '@/hooks/useInitialState';
import Navbar from '@/components/Navbar';
import './globals.css'

export default function RootLayout({ children }) {
  const initialState = useInitialState();
  return (
    <html lang="en">
      <body>
        <AppContext.Provider value={initialState}>
          <Navbar />
          <div className="bg-gray-900 text-white h-[calc(100vh-4rem)]">
            <main className="h-5/6 px-28 py-10">{children}</main>
          </div>
        </AppContext.Provider>
      </body>
    </html>
  )
}
