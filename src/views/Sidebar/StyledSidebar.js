import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.color.white};
  width: ${({ sidebarStatus }) => (sidebarStatus ? '250px' : '0px')};
  opacity: ${({ sidebarStatus }) => (sidebarStatus ? '1' : '0')};
  transition: 0.2s;
`;

export const StyledUl = styled.ul`
  margin-top: 20px;
  li {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      padding: 10px 0;
      flex-grow: 1;
      text-decoration: none;
      color: ${({ theme }) => theme.color.softBlack};
    }
    i {
      display: inline-block;
      padding: 0 10px;
      font-size: 24px;
      width: 50px;
      margin: auto;
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.softGray};
    }
  }
  li > .active {
    text-decoration: underline;
  }
`;

export const StyledSublink = styled.ul`
  width: 100%;
  li {
    a {
      padding: 10px 50px;
    }
  }
`;
