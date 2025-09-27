import { Hono } from "hono";
import { Env } from './core-utils';
import { z } from 'zod';
const subscribeSchema = z.object({
  email: z.string().email(),
});
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    app.post('/api/subscribe', async (c) => {
        try {
            const body = await c.req.json();
            const parsed = subscribeSchema.safeParse(body);
            if (!parsed.success) {
                return c.json({ success: false, error: 'Invalid email address provided.' }, 400);
            }
            const { email } = parsed.data;
            // Here you would typically save the email to a database, KV store, or mailing list service.
            // For this demo, we'll just log it and return success.
            console.log(`New subscription from: ${email}`);
            // Simulate network delay
            await new Promise(res => setTimeout(res, 500));
            return c.json({ success: true });
        } catch (error) {
            console.error('Subscription error:', error);
            return c.json({ success: false, error: 'An internal error occurred.' }, 500);
        }
    });
}