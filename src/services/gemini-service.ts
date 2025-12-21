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
            content: 'You are a Byte&Berry Co-pilot  helping clients choose the right service package. Provide brief, helpful recommendations be direct and have a sense of humor and also abit tiny bit funny.',
          },
          {
            role: 'user',
            content: `Client needs: ${userDescription}
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
 * Generate detailed contract terms and conditions using AI
 */
export async function generateDetailedContractTerms(
  order: { serviceType: string; package?: string; customizations: { addOns?: string[]; pages?: number; platform?: string }; projectDescription?: string },
  price: { totalZmw: number }
): Promise<string> {
  try {
    const serviceName = order.serviceType === 'website' 
      ? 'Website Development'
      : order.serviceType === 'mobileApp'
      ? 'Mobile App Development'
      : order.serviceType === 'consultancy'
      ? 'IT & Digital Consultancy'
      : 'Enterprise Systems'

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
            content: 'You are Byte&Berry Co-pilot, a professional AI assistant helping generate detailed, comprehensive contract terms and conditions for software development projects. Create professional, legally sound, and detailed terms that cover all aspects of the project.',
          },
          {
            role: 'user',
            content: `Generate comprehensive, detailed terms and conditions for a ${serviceName} project with the following details:
            
Service: ${serviceName}
Total Price: K${price.totalZmw.toLocaleString()}
Package: ${order.package || 'Custom'}
Features: ${order.customizations.addOns?.join(', ') || 'Standard features'}
Pages: ${order.customizations.pages || 'N/A'}
Platform: ${order.customizations.platform || 'N/A'}
${order.projectDescription ? `\nProject Description: ${order.projectDescription}` : ''}

Create detailed terms covering:
1. Project Scope and Deliverables (be very specific about what will be delivered${order.projectDescription ? ' based on the project description provided' : ''})
2. Payment Terms (50% deposit, 50% on completion - explain clearly)
3. Timeline and Milestones (provide realistic timeline expectations based on project complexity)
4. Revision and Change Policy (how many revisions, change request process)
5. Intellectual Property Rights (who owns what)
6. Support and Maintenance (post-launch support details)
7. Warranty and Guarantees (what's covered, for how long)
8. Termination Clause (what happens if either party wants to end the contract)
9. Confidentiality and Data Protection
10. Dispute Resolution

${order.projectDescription ? `\nIMPORTANT: The client has provided the following project description: "${order.projectDescription}". Use this information extensively to make the Project Scope and Deliverables section highly specific and tailored to their actual needs. Reference specific features, goals, and requirements mentioned in the description.` : ''}

Make it professional, comprehensive, and detailed. Use clear language that protects both parties.`,
          },
        ],
        temperature: 0.5,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating contract terms:', error);
    return '';
  }
}

/**
 * Generate detailed invoice description using AI
 */
export async function generateDetailedInvoiceDescription(
  order: { serviceType: string; package?: string; customizations: { addOns?: string[]; pages?: number; platform?: string }; projectDescription?: string },
  price: { breakdown: { base: { zmw: number }; hosting: { zmw: number } }; totalZmw: number }
): Promise<string> {
  try {
    const serviceName = order.serviceType === 'website' 
      ? 'Website Development'
      : order.serviceType === 'mobileApp'
      ? 'Mobile App Development'
      : order.serviceType === 'consultancy'
      ? 'IT & Digital Consultancy'
      : 'Enterprise Systems'

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
            content: 'You are Byte&Berry Co-pilot, a professional AI assistant helping generate detailed, itemized invoice descriptions for software development services. Create clear, professional descriptions that explain what each line item includes.',
          },
          {
            role: 'user',
            content: `Generate detailed, itemized descriptions for an invoice for ${serviceName} with:
            
Service: ${serviceName}
Package: ${order.package || 'Custom'}
Base Price: K${price.breakdown.base.zmw.toLocaleString()}
Add-ons: ${order.customizations.addOns?.join(', ') || 'None'}
Hosting: ${price.breakdown.hosting.zmw > 0 ? `K${price.breakdown.hosting.zmw.toLocaleString()}/month` : 'Not included'}
Total: K${price.totalZmw.toLocaleString()}
${order.projectDescription ? `\nProject Description: ${order.projectDescription}` : ''}

For each line item, create a detailed description (2-3 sentences) explaining:
- What the service includes
- Key features and deliverables
- What the client will receive
${order.projectDescription ? '- How it relates to the client\'s specific project needs' : ''}

Make it professional, clear, and detailed so the client understands exactly what they're paying for. Use the project description to tailor the descriptions to the client's specific needs.`,
          },
        ],
        temperature: 0.5,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating invoice description:', error);
    return '';
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
            content: 'You are a Byte&Berry Co-pilot . Explain services clearly and concisely.',
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

