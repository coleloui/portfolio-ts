import styled, { keyframes } from 'styled-components';

export function Hero() {
	return (
		<HeroSection>
			<Content>
				<Eyebrow>TAMPA, FL · FULL STACK ENGINEER</Eyebrow>
				<Name>Louis Coleman</Name>
				<Tagline>Building agentic tooling &amp; production infra</Tagline>
				<CTAButton href="#projects">View work →</CTAButton>
			</Content>
		</HeroSection>
	);
}

const glowPulse = keyframes`
  0%, 100% { opacity: 1;   transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(1.12); }
`;

const HeroSection = styled.section`
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			radial-gradient(circle at 20% 15%, rgba(255, 46, 151, 0.35), transparent 45%),
			radial-gradient(circle at 80% 10%, rgba(0, 229, 255, 0.28), transparent 40%);
		animation: ${glowPulse} 6s ease-in-out infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		&::before {
			animation: none;
			opacity: 1;
		}
	}
`;

const Content = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25rem;
	text-align: center;
	padding: 2rem 1.5rem;
`;

const Eyebrow = styled.p`
	font-family: var(--mono);
	font-size: 0.72rem;
	letter-spacing: 0.12em;
	color: var(--accent-cyan);
`;

const Name = styled.h1`
	font-family: var(--sans);
	font-weight: 800;
	font-size: clamp(2.8rem, 8vw, 5.5rem);
	letter-spacing: -0.03em;
	line-height: 1.05;
	background: linear-gradient(90deg, var(--accent), var(--accent-cyan));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	color: var(--text-primary);
`;

const Tagline = styled.p`
	font-family: var(--sans);
	font-size: clamp(1rem, 2.5vw, 1.2rem);
	color: var(--text-secondary);
	max-width: 480px;
`;

const CTAButton = styled.a`
	margin-top: 0.5rem;
	display: inline-block;
	font-family: var(--mono);
	font-size: 0.9rem;
	font-weight: 600;
	padding: 12px 28px;
	border-radius: 8px;
	background: var(--accent);
	color: #0d0221;
	text-decoration: none;
	box-shadow: 0 0 20px var(--accent-glow);
	transition: background 0.15s, box-shadow 0.15s;

	&:hover {
		background: var(--accent-dim);
		box-shadow: 0 0 28px var(--accent-glow);
	}
`;
