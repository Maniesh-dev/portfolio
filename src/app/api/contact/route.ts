import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { NotificationEmail } from '@/emails/NotificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, projectDetails } = await req.json();

        // Basic validation
        if (!name || !email || !phone || !projectDetails) {
            return NextResponse.json(
                { error: 'Name, email, WhatsApp number, and project details are required.' },
                { status: 400 }
            );
        }

        // Send notification email to site owner
        const notifyResult = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['manieshsanwal.dev@gmail.com'], // Using the registered Resend account email
            subject: `New Lead: ${name}`,
            react: NotificationEmail({ name, email, phone, projectDetails }) as React.ReactElement,
        });

        if (notifyResult.error) {
            console.error('Error sending notification email:', notifyResult.error);
            return NextResponse.json({ error: notifyResult.error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

