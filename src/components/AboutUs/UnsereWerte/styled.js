import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const OurValuesSection = styled.div`
  background: linear-gradient(to top, #bcd5ce 50%, #fff 0%); 
  padding: 50px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  ${mq[2]} {
    display: block;
    padding: 50px 25px;
  }
`

export const SectionHeadingPrimary = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
  ${mq[2]} {
    font-size: 27px;
  }
`

export const ContentSection = styled.div`
  float: left;
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  ${mq[2]} {
    overflow-x: scroll;
    display: -webkit-box;
  }
`

export const HeadingIcon = styled.div`
  width: 20%;
  padding-bottom: 14px;
  margin: auto;
`
export const ResponsiveHeading = styled.div`
  display: block;
  text-align: center;
  ${mq[1]} {
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
  }
`

export const BlockText = styled.p`
  color: #01656b;
  font-family: Rubik;
  font-weight: 400;
  line-height: 21px;
  text-align: ${props => props.text_align};
  letter-spacing: normal;
  font-style: normal;
  font-weight: normal;
  ${mq[2]} {
    line-height: 18px;
  }
`
export const Card = styled.div`
  width: 300px;
  background-color: #79ab9d;
  height: fit-content;
  margin: 0 20px;
  ${mq[2]} {
    width: 200px;
    height: 365px;
    margin: 0 10px;
  }
`
export const CardContents = styled.div`
  padding: 20px
`
