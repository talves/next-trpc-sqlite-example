/**
 * This file contains the root router of your tRPC-backend
 */
import { t } from '../trpc';
import { healthRouter } from './health';
import { postRouter } from './post';

const newRouter = t.router({
  message: t.procedure.query(() => 'Hello World'),
});

export const appRouter = t.router({
  post: postRouter,
  health: healthRouter,
  new: newRouter,
});

export type AppRouter = typeof appRouter;
