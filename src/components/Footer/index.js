import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from "styled-components"

const FooterWrapper = styled.footer`
  background: rgba(145, 87, 13, 1);
  color: rgba(229, 223, 220, 1);
  min-height: 60px;
  box-shadow: 0px -1px 5px 0px rgba(51, 55, 69, 1);
  display: flex;
  align-content: space-around;
  align-items: center;
  justify-content: center;
  font-size: 9pt;
`
export default class Header extends Component {
    render() {
        const {data, location} = this.props

        return (
          <FooterWrapper 
            ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
            Copyright &copy; 2018 checkplease.io.  All rights reserved.
          </FooterWrapper>
        )
    }
}