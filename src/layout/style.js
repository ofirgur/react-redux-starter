import styled from 'styled-components';

export default styled.div`
   direction: ${p => p.direction || 'ltr'};
   position: relative;
   height: 100vh;
   max-width: 1600px;
   margin: 0 auto;
   /* box-shadow: ${props => props.theme.shadow.main}; */
   display: grid;
   grid-template-rows: 50px auto;
   grid-template-columns: 0 auto;

   @media only screen and (min-width: ${props => props.theme.breakpoint.md}) {
      grid-template-rows: 70px auto;
      grid-template-columns: 200px auto;
   }

   transition: all 0.3s linear;
`;

export const MainSpinner = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;
