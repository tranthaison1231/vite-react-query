import { RewriteFrames } from '@sentry/integrations';
import { Integrations } from '@sentry/tracing';
import * as Sentry from '@sentry/react';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export const SentryCredentials = {
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.VITE_NODE_ENV,
  integrations: [
    new RewriteFrames(),
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV4Instrumentation(history),
    }),
  ],
  tracesSampleRate: 1.0,
};

Sentry.init(SentryCredentials);
