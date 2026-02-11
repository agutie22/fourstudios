import emailjs from '@emailjs/browser';

interface ProjectFormData {
    from_name: string;
    from_email: string;
    business_name: string;
    project_type: string;
    budget_range: string;
    message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export async function sendProjectInquiry(data: ProjectFormData): Promise<void> {
    if (!isConfigured) {
        console.log('[EmailJS] Not configured — logging form data instead:');
        console.table(data);
        // Simulate a slight delay so the UI still shows a loading state
        await new Promise((resolve) => setTimeout(resolve, 800));
        return;
    }

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, data as unknown as Record<string, unknown>, {
        publicKey: PUBLIC_KEY,
    });
}

export { isConfigured };
