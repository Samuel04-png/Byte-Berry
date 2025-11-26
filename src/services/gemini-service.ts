import { DEEPSEEK_API_KEY, DEEPSEEK_API_URL } from '@/utils/constants';

/**
 * Get AI-powered service recommendation based on user description
 */
export async function getServiceRecommendation(userDescription: string): Promise<string> {
  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are a Byte&Berry consultant helping clients choose the right service package. Provide brief, helpful recommendations.',
          },
          {
            role: 'user',
            content: `Client needs: ${userDescription}
your name is Byte&Berry Co-pilot, you are a helpful assistant that helps clients choose the right service package.
Available services and packages:

WEBSITE DEVELOPMENT:
- Starter Site (K7,500): 1-3 pages, responsive, WhatsApp, basic SEO — perfect for small businesses & personal brands.
- Growth Site (K15,000-22,500): 4-7 pages, blog/CMS, forms, AI chatbot, 1 month hosting — for growing brands.
- Pro Website (K25,000-45,000): 8-12 pages, dashboard/booking, analytics, AI assistant — for companies and institutions.
- Premium Suite (K50,000-75,000): Full-scale portals & eCommerce — custom web apps, payments, AI, automation, hosting.

MOBILE APP DEVELOPMENT:
- Starter App (K25,000): Basic mobile app for iOS and Android with core features, user authentication, push notifications, basic UI.
- Growth App (K50,000-100,000): Advanced features for growing businesses — offline mode, analytics, payment integration, social login, cloud sync.
- Enterprise App (K125,000-375,000): Full-featured app with custom solutions — custom backend, advanced security, biometric auth, real-time sync, white-label.

IT & DIGITAL CONSULTANCY:
- Basic Consultancy (K17,500): Essential IT and digital strategy guidance — tech stack review, architecture advice, vendor selection, 1 session.
- Standard Consultancy (K37,500-75,000): Comprehensive digital transformation guidance — digital transformation, cloud migration, security audit, roadmap planning, 3 sessions.
- Premium Consultancy (K125,000-250,000): Full-scale enterprise IT strategy and implementation — enterprise architecture, ongoing support, team training, implementation guidance, unlimited sessions.

ENTERPRISE SYSTEMS:
- Starter Enterprise (K50,000-125,000): Basic enterprise system for small to medium organizations — core modules, user management, basic reporting, data backup.
- Professional Enterprise (K125,000-375,000): Comprehensive enterprise solution with advanced features — all modules, advanced analytics, API integration, custom workflows, priority support.
- Enterprise Suite (K375,000-1,250,000): Complete enterprise solution with full customization — fully custom, multi-tenant, advanced security, dedicated support, training, maintenance.

Based on the client's needs, recommend the most suitable SERVICE TYPE and PACKAGE. Provide a brief recommendation (2-3 sentences) explaining why that service and package is the best fit.`,
          },
        ],
        temperature: 0.7,
        max_tokens: 200,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'I recommend discussing your needs with our team for personalized recommendations.';
  } catch (error) {
    console.error('Error with DeepSeek API:', error);
    return 'Please contact us directly for personalized recommendations.';
  }
}

/**
 * Explain a service or feature
 */
export async function explainService(serviceName: string, question: string): Promise<string> {
  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are a Byte&Berry consultant. Explain services clearly and concisely.',
          },
          {
            role: 'user',
            content: `Explain Byte&Berry's ${serviceName} service. Question: ${question}. Keep the explanation clear, concise, and under 100 words.`,
          },
        ],
        temperature: 0.7,
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || 'Please contact us for more information.';
  } catch (error) {
    console.error('Error with DeepSeek API:', error);
    return 'Please contact us for more information.';
  }
}

