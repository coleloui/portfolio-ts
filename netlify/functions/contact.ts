import {
	SESClient,
	SendEmailCommand,
	type SendEmailCommandInput
} from '@aws-sdk/client-ses';
import type { Handler } from '@netlify/functions';

const { SES_EMAIL, SES_ACCESS_KEY, SES_SECRET_KEY, SES_REGION } = process.env;

const ALLOWED_REASONS = [
	'Job opportunity',
	'Freelance / contract work',
	'General'
] as const;
type Reason = (typeof ALLOWED_REASONS)[number];

interface ContactFormBody {
	name: string;
	email: string;
	reason: Reason;
	message: string;
	subject: string; // honeypot — must equal "placeholder"
}

function sanitize(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidReason(value: string): value is Reason {
	return ALLOWED_REASONS.includes(value as Reason);
}

export const handler: Handler = async event => {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method not allowed' };
	}

	let body: ContactFormBody;
	try {
		body = JSON.parse(event.body ?? '{}');
	} catch {
		return { statusCode: 400, body: 'Invalid request body' };
	}

	if (body.subject !== 'placeholder') {
		return { statusCode: 200, body: '' };
	}

	if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
		return { statusCode: 400, body: 'Missing required fields' };
	}
	if (!isValidEmail(body.email)) {
		return { statusCode: 400, body: 'Invalid email address' };
	}
	if (!isValidReason(body.reason)) {
		return { statusCode: 400, body: 'Invalid reason' };
	}

	const name = sanitize(body.name.trim());
	const email = sanitize(body.email.trim().toLowerCase());
	const reason = sanitize(body.reason);
	const message = sanitize(body.message.trim());

	if (!SES_EMAIL || !SES_ACCESS_KEY || !SES_SECRET_KEY || !SES_REGION) {
		console.error('Missing required SES environment variables');
		return { statusCode: 500, body: 'Server configuration error' };
	}

	const ses = new SESClient({
		region: SES_REGION,
		credentials: {
			accessKeyId: SES_ACCESS_KEY,
			secretAccessKey: SES_SECRET_KEY
		}
	});

	const params: SendEmailCommandInput = {
		Source: SES_EMAIL,
		Destination: { ToAddresses: ['coleloui18@gmail.com'] },
		ReplyToAddresses: [body.email.trim().toLowerCase()],
		Message: {
			Subject: {
				Data: `Portfolio Contact — ${reason}`,
				Charset: 'UTF-8'
			},
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: `
						<h2>New portfolio contact form submission</h2>
						<table cellpadding="8" cellspacing="0">
							<tr><td><strong>Name</strong></td><td>${name}</td></tr>
							<tr><td><strong>Email</strong></td><td>${email}</td></tr>
							<tr><td><strong>Reason</strong></td><td>${reason}</td></tr>
						</table>
						<h3>Message</h3>
						<p>${message.replace(/\n/g, '<br>')}</p>
					`
				}
			}
		}
	};

	try {
		await ses.send(new SendEmailCommand(params));
		return { statusCode: 200, body: '' };
	} catch (err) {
		console.error('SES send failed:', err);
		return { statusCode: 500, body: 'Failed to send message' };
	}
};
