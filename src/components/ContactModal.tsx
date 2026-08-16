import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
	onClose: () => void;
}

const REASONS = ['Job opportunity', 'Freelance / contract work', 'General'] as const;

export function ContactModal({ onClose }: Props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [reason, setReason] = useState<string>(REASONS[0]);
	const [message, setMessage] = useState('');
	const [honeypot, setHoneypot] = useState('placeholder');

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [errorMsg, setErrorMsg] = useState('');

	const firstFieldRef = useRef<HTMLInputElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	// focus first field on open
	useEffect(() => {
		firstFieldRef.current?.focus();
	}, []);

	// close on Escape, trap focus
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') { onClose(); return; }
			if (e.key !== 'Tab' || !modalRef.current) return;
			const focusable = modalRef.current.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey) {
				if (document.activeElement === first) { e.preventDefault(); last.focus(); }
			} else {
				if (document.activeElement === last) { e.preventDefault(); first.focus(); }
			}
		};
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [onClose]);

	// auto-close after success
	useEffect(() => {
		if (status !== 'success') return;
		const t = setTimeout(onClose, 2500);
		return () => clearTimeout(t);
	}, [status, onClose]);

	function validateField(field: 'name' | 'email' | 'message', value: string) {
		let msg = '';
		if (field === 'name' && !value.trim()) msg = 'Name is required.';
		if (field === 'email') {
			if (!value.trim()) msg = 'Email is required.';
			else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) msg = 'Enter a valid email.';
		}
		if (field === 'message' && !value.trim()) msg = 'Message is required.';
		setErrors(prev => ({ ...prev, [field]: msg }));
	}

	function validate() {
		const e: Record<string, string> = {};
		if (!name.trim()) e.name = 'Name is required.';
		if (!email.trim()) e.email = 'Email is required.';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email.';
		if (!message.trim()) e.message = 'Message is required.';
		return e;
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const errs = validate();
		setErrors(errs);
		if (Object.keys(errs).length > 0) return;

		setStatus('loading');
		setErrorMsg('');
		try {
			const res = await fetch('/.netlify/functions/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, reason, message, subject: honeypot }),
			});
			if (res.ok) {
				setStatus('success');
			} else {
				const text = await res.text();
				setErrorMsg(text || 'Something went wrong. Please try again.');
				setStatus('error');
			}
		} catch {
			setErrorMsg('Network error. Please try again.');
			setStatus('error');
		}
	}

	return (
		<Backdrop onClick={onClose} role="dialog" aria-modal="true" aria-label="Contact form">
			<Modal ref={modalRef} onClick={e => e.stopPropagation()}>
				<Header>
					<Title>Get in touch</Title>
					<CloseButton onClick={onClose} aria-label="Close">✕</CloseButton>
				</Header>

				{status === 'success' ? (
					<SuccessMsg>Message sent — I'll get back to you soon.</SuccessMsg>
				) : (
					<Form onSubmit={handleSubmit} noValidate>
						{/* honeypot — visually hidden, filled by default so bots that touch it fail */}
						<HoneypotField
							name="subject"
							type="text"
							value={honeypot}
							onChange={e => setHoneypot(e.target.value)}
							tabIndex={-1}
							aria-hidden="true"
							autoComplete="off"
						/>

						<Field>
							<Label htmlFor="cf-name">Name</Label>
							<Input
								id="cf-name"
								ref={firstFieldRef}
								type="text"
								value={name}
								onChange={e => setName(e.target.value)}
								onBlur={e => validateField('name', e.target.value)}
								$error={!!errors.name}
								autoComplete="name"
							/>
							{errors.name && <Error>{errors.name}</Error>}
						</Field>

						<Field>
							<Label htmlFor="cf-email">Email</Label>
							<Input
								id="cf-email"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								onBlur={e => validateField('email', e.target.value)}
								$error={!!errors.email}
								autoComplete="email"
							/>
							{errors.email && <Error>{errors.email}</Error>}
						</Field>

						<Field>
							<Label htmlFor="cf-reason">Reason</Label>
							<Select
								id="cf-reason"
								value={reason}
								onChange={e => setReason(e.target.value)}
							>
								{REASONS.map(r => (
									<option key={r} value={r}>{r}</option>
								))}
							</Select>
						</Field>

						<Field>
							<Label htmlFor="cf-message">Message</Label>
							<Textarea
								id="cf-message"
								value={message}
								onChange={e => setMessage(e.target.value)}
								onBlur={e => validateField('message', e.target.value)}
								rows={5}
								$error={!!errors.message}
							/>
							{errors.message && <Error>{errors.message}</Error>}
						</Field>

						{status === 'error' && <SubmitError>{errorMsg}</SubmitError>}

						<SubmitButton type="submit" disabled={status === 'loading'}>
							{status === 'loading' ? 'Sending…' : 'Send message'}
						</SubmitButton>
					</Form>
				)}
			</Modal>
		</Backdrop>
	);
}

const Backdrop = styled.div`
	position: fixed;
	inset: 0;
	z-index: 200;
	background: rgba(13, 2, 33, 0.75);
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
`;

const Modal = styled.div`
	background: var(--bg-card);
	border: 1px solid var(--border);
	border-radius: 12px;
	padding: 2rem;
	width: 100%;
	max-width: 480px;
	max-height: 90vh;
	overflow-y: auto;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

const Title = styled.h2`
	font-family: var(--sans);
	font-size: 1.2rem;
	font-weight: 700;
	color: var(--text-primary);
`;

const CloseButton = styled.button`
	background: none;
	border: none;
	color: var(--text-muted);
	font-size: 1rem;
	cursor: pointer;
	padding: 4px 8px;
	border-radius: 4px;
	transition: color 0.15s;

	&:hover {
		color: var(--text-primary);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const HoneypotField = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`;

const Field = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
`;

const Label = styled.label`
	font-family: var(--mono);
	font-size: 0.72rem;
	letter-spacing: 0.05em;
	color: var(--text-muted);
	text-transform: uppercase;
`;

const inputBase = `
	font-family: var(--sans);
	font-size: 0.9rem;
	background: var(--bg-elevated);
	color: var(--text-primary);
	border-radius: 6px;
	padding: 10px 12px;
	outline: none;
	transition: border-color 0.15s;
	width: 100%;
`;

const Input = styled.input<{ $error?: boolean }>`
	${inputBase}
	border: 1px solid ${({ $error }) => ($error ? 'var(--accent)' : 'var(--border)')};

	&:focus {
		border-color: var(--accent-cyan);
	}
`;

const Select = styled.select`
	${inputBase}
	border: 1px solid var(--border);
	cursor: pointer;

	&:focus {
		border-color: var(--accent-cyan);
	}

	option {
		background: var(--bg-elevated);
	}
`;

const Textarea = styled.textarea<{ $error?: boolean }>`
	${inputBase}
	border: 1px solid ${({ $error }) => ($error ? 'var(--accent)' : 'var(--border)')};
	resize: vertical;
	min-height: 100px;

	&:focus {
		border-color: var(--accent-cyan);
	}
`;

const Error = styled.p`
	font-family: var(--mono);
	font-size: 0.7rem;
	color: var(--accent);
`;

const SubmitError = styled.p`
	font-family: var(--mono);
	font-size: 0.75rem;
	color: var(--accent);
	background: var(--accent-soft);
	border: 1px solid var(--accent);
	border-radius: 6px;
	padding: 8px 12px;
`;

const SubmitButton = styled.button`
	font-family: var(--mono);
	font-size: 0.85rem;
	font-weight: 600;
	padding: 12px;
	border-radius: 8px;
	border: none;
	background: var(--accent);
	color: #0d0221;
	cursor: pointer;
	box-shadow: 0 0 16px var(--accent-glow);
	transition: background 0.15s, box-shadow 0.15s;

	&:hover:not(:disabled) {
		background: var(--accent-dim);
		box-shadow: 0 0 24px var(--accent-glow);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

const SuccessMsg = styled.p`
	font-family: var(--sans);
	font-size: 0.95rem;
	color: var(--accent-cyan);
	text-align: center;
	padding: 2rem 0;
`;
