import styled from 'styled-components';

export default styled.header`
   background: transparent;
   grid-column: span 2;
   display: flex;
   align-items: center;
   justify-content: space-between;
   overflow: hidden;

   .header-start, .header-end {
      display: flex;
      padding: 3px;
      @media only screen and (min-width: ${props => props.theme.breakpoint.sm}) {
         padding: 0 8px;  
      }

      > * {
         margin: 0 3px; 
         display: flex;
         justify-content: center;
         align-items: center;
         
         @media only screen and (min-width: ${props => props.theme.breakpoint.sm}) {
            margin: 0 8px;  
         }
      }

      > i { color: ${props => props.theme.color.red}; }
   }

   .header-start {
      .icon-navbar-open {
         @media only screen and (min-width: ${props => props.theme.breakpoint.md}) {
            display: none;
         }
      }
   };
`;
