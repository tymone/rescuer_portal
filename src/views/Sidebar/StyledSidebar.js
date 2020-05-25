import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  background-color: #cdcccc;
  width: ${({ sidebarStatus }) => (sidebarStatus ? '250px' : '0px')};
  opacity: ${({ sidebarStatus }) => (sidebarStatus ? '1' : '0')};
  transition: 0.2s;
`;

export const StyledNav = styled.nav`
  li {
    margin: 20px 15px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.softBlack};
      i {
        padding-right: 10px;
        font-size: 18px;
      }
      &:hover {
        color: ${({ theme }) => theme.color.black};
        text-decoration: underline;
      }
    }
  }
  .active {
    text-decoration: underline;
  }
`;

export const StyledUl = styled.ul``;

export const StyledSublink = styled.ul`
  display: block;
  padding-bottom: 10px;
  li {
    margin: 10px 0 0 35px;
  }
`;
