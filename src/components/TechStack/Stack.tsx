import styled from 'styled-components';
import { Tech } from './Tech';

export const Stack: React.FC = () => {
	return (
		<Wrapper>
			<Tech />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: var(--secondary);
	margin-top: 10px;
	@media (max-width: 992px) {
		width: 100%;
		height: 100%;
	}
`;
