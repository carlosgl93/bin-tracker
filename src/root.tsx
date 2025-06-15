import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// from MUI's toolpad we only use Notifications
import { NotificationsProvider } from '@toolpad/core/useNotifications';
import { Provider as JotaiProvider } from 'jotai';

import ThemeProvider from '@/theme/Provider';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  const queryClient = new QueryClient({});

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>
          <ThemeProvider>
            <NotificationsProvider>
              <App />
            </NotificationsProvider>
          </ThemeProvider>
        </JotaiProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}

export default render;
