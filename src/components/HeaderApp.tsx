import { HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem } from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import { Button } from 'baseui/button';
import { Link } from 'react-router-dom';
export function HeaderApp() {

  return (
    <HeaderNavigation  overrides={{
      Root: {
        style: ({ $theme }) => ({
          outline: `${$theme.colors.backgroundAccent} solid`,
          backgroundColor: $theme.colors.backgroundAccent
        })
      }
    }}>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Link to='/'>
            CineAPP
          </Link>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">
            <Link to='/categorias'>
              Categorias
            </Link>
          </StyledLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledLink href="#basic-link2">
          <Link to='/filmes'>
              Filmes
            </Link>
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  )
}