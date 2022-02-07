import styled from 'styled-components';

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 640px) {
		flex-direction: column;
	}
`;
