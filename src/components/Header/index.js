import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from "styled-components"
import Img from "gatsby-image"

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome) ? "70vh" : "20vh"};
  box-shadow: 0px 1px 5px 0px rgba(51, 55, 69, 1);
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 3rem 1.0875rem;
  position: relative;
  z-index: 2;
  a {
      text-decoration: none;
  }
`

export default class Header extends Component {
    render() {
        const {data, location} = this.props

        return (
            // <header>
            //     <div>
            //         <Img
            //             style={{
            //                 // position: "absolute",
            //                 gridRow: 1,
            //                 gridColumn: 1,
            //                 left: 0,
            //                 top: 0,
            //                 width: "100%",
            //                 height: "100%"
            //             }}
            //             sizes={data.background.sizes }
            //         />
            //         <h1>
            //             <Link to="/">{data.site.siteMetadata.title}</Link>
            //         </h1>   
            //     </div>    
            // </header>

          <HeaderWrapper 
            isHome={this.props.location.pathname==='/'}
            ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
            <HeaderContainer>
                <h1>
                    <Link to="/">{data.site.siteMetadata.title}</Link>
                </h1>        
            </HeaderContainer>
            <Img
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%"
              }}
              sizes={data.background.sizes }
            />
          </HeaderWrapper>
        )

        // return <h1>{this.props.siteTitle}</h1>
    }
}