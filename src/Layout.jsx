import React from 'react';
import { Toaster } from 'sonner';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        
        :root {
          --purple-header: #9b2d9b;
          --cream: #f5f5dc;
          --cream-light: #faf8e8;
          --blue-content: #4169e1;
          --gold-text: #c9a227;
          --orange-slider: #e85d04;
        }
        
        .font-serif-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        /* Safe area padding for PWA */
        .pb-safe {
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 2px;
        }
        
        /* Custom slider styling */
        [data-radix-slider-track] {
          background: #4169e1 !important;
          height: 24px !important;
          border-radius: 12px !important;
        }
        [data-radix-slider-range] {
          background: #e85d04 !important;
          border-radius: 12px !important;
        }
        [data-radix-slider-thumb] {
          width: 28px !important;
          height: 28px !important;
          background: #e85d04 !important;
          border: none !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
        }
        
        /* PWA-specific styles */
        @media (display-mode: standalone) {
          body {
            -webkit-user-select: none;
            user-select: none;
          }
        }
      `}</style>
      
      <Toaster 
        position="top-center" 
        richColors 
        toastOptions={{
          style: {
            borderRadius: '12px',
            padding: '12px 16px'
          }
        }}
      />
      
      {children}
    </div>
  );
}