import React from 'react'
import styled, { css } from 'styled-components'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 44px;
  height: 44px;
  fill: var(--color-primary);
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: inherit;
    padding: 0;
    width: 1.5rem;
    height: auto;
  }
`

interface InputProps {
  focus?: boolean
  collapse?: boolean
}

export const Input = styled.input<InputProps>`
  outline: none;
  border: none;
  width: 2.75rem;
  background: transparent;
  transition: all 150ms ease-out;
  opacity: 0;
  padding: 0 1.25rem;
  box-sizing: border-box;
  cursor: pointer;
  color: inherit;

  @media (max-width: 684px) {
    width: 100%;
  }

  ${p =>
    p.focus &&
    css`
      width: 12rem;
      opacity: 1;
      cursor: text;
    `};
`

export const SearchContainer = styled.div`
  position: relative;
  font-size: 0.8rem;
  padding: 0.625rem 0;
  font-family: var(--font-tuner);
  background-color: var(--color-background);
  color: var(--color-foreground);
  display: flex;
  align-items: center;
  transition: filter 250ms ease;
  border-radius: 100px;
  text-transform: uppercase;
  :hover,
  :focus {
    text-decoration: none;
    transition: filter 250ms ease;
  }

  @media (max-width: 684px) {
    /* Begin temp fix */
    display: none;
    /* End temp fix */
    margin: 1rem;
    border: 1px solid var(--color-light-dark);
  }

  @media (min-width: 800px) {
    font-size: 1rem;
  }
`

interface HitsWrapperProps {
  show: boolean
}

export const IndexContainer = styled.div`
  flex: 1 0 auto;
  overflow-y: auto;
  overflow-x: auto;
  padding: 1rem 1.25rem 0 1.5rem;
`

export const HitsResults = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const HitsWrapper = styled.div<HitsWrapperProps>`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: calc(80vh - 4rem);
  overflow: hidden;
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  top: calc(100% + 1.5rem);
  width: 80vw;
  max-width: 35rem;
  border-radius: 24px;
  filter: drop-shadow(1px 2px 18px rgb(0, 0, 0, 12%));
  color: var(--color-secondary);
  padding: 0;
  background: white;
  li {
    margin: 0 !important;
    padding: 0.5rem 0;
  }
  li + li {
    border-top: 1px solid var(--color-seafoam-dark);
  }
  ul {
    list-style: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    flex: 0 0 auto;
    position: sticky;
    top: 0;
    color: rgba(0, 0, 0, 0.5);
    h3 {
      margin: 0;
      color: var(--color-primary);
      font-family: var(--font-tuner);
      text-transform: uppercase;
      font-size: 1.125rem;
    }
  }
  h4 {
    margin-bottom: 0.3em;
    cursor: pointer;
    text-decoration: underline rgba(0, 0, 0, 0.3);
    transition: all 185ms ease-out;

    &:hover,
    &:focus {
      opacity: 1;
      color: var(--color-primary);
      text-decoration-color: var(--color-primary);
    }
  }
  a {
    color: var(--color-primary);
  }
`

export const NoResultsLabel = styled.div`
  padding: 1rem 1.25rem 0 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-primary);
`

export const PoweredBy = styled(({ ...styleProps }) => (
  <span {...styleProps}>
    Powered by{` `}
    <a href="https://algolia.com">Algolia</a>
  </span>
))`
  opacity: 0.5;
  font-size: 0.8rem;
  padding: 0;
  display: block;
  padding: 0.5rem 1.25rem 0.5rem 1.5rem;
`
