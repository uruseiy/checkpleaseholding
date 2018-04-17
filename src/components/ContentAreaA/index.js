import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from "styled-components"

import Icon from '../Icon'

const ContentAreaAWrapper = styled.div`
  background: rgba(229, 223, 220, 1);
  min-height: 120px;
  box-shadow: 0px 10px 5px 0px rgba(51, 55, 69, 1);
  display: grid;
  width: 100%;

  grid-template-columns: 220px auto;
  align-items: center;
  justify-items: center;

  border: rgba(147, 154, 77, 1) 10px solid;
  outline: white 10px solid;
  margin: 0px;
  padding: 10px;

  transform: rotate(-4deg);
  margin-left: -20px;
`

// Size should be a multiple of 24
const ContentAreaA = ({children}) => (
  <ContentAreaAWrapper>
      <Icon size={24*6} name={'local-restaurant'} />
      {children}
  </ContentAreaAWrapper>
)

export default ContentAreaA
