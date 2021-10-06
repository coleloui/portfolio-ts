import styled from 'styled-components';
import { TechItems } from './TechItems';
import { TechList } from './TechList';

export const TechSections: React.FC = () => {
	return (
		<div>
			{TechItems.map(Tech => (
				<div key={Tech.name}>
					<MinorTitle key={Tech.name}>{Tech.name}</MinorTitle>
					{Tech.intro ? <p>{Tech.intro}</p> : ''}
					<List>
						{Tech.tech.map(part => (
							<TechList key={part.item} item={part.item} />
						))}
					</List>
				</div>
			))}
		</div>
	);
};

const Title = styled.h1`
	color: var(--primary);
	text-align: center;
	margin-bottom: 3rem;
	text-transform: capitalize;
	font-size: 250%;
	@media (max-width: 768px) {
		text-align: center;
		margin: 0rem 0rem 1.5rem;
	}
`;

const MinorTitle = styled(Title)`
	color: var(--white);
	margin: 0 0 0 10rem;
	text-decoration: underline;
	text-align: start;
	font-size: 150%;
	@media (max-width: 768px) {
		text-align: center;
		margin: 0rem 0rem 0.33rem;
	}
`;

export const List = styled.ul`
	margin-bottom: 3rem;
	margin-left: 13rem;
	@media (max-width: 768px) {
		margin-left: 0px;
	}
`;
