import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

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
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  ${mq[2]} {
    overflow-x: scroll;
    display: -webkit-box;
  }
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
