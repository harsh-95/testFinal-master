import styled from "@emotion/styled"

import WirbringenImage from "../../../images/shutterstock_488682844.jpg"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Container = styled.div`
  display: block;
`

export const WeAreEmmoraSection = styled.div`
    padding: 25px 150px 20px 35px;
    margin: auto;
    margin-top: -165px;
    margin-bottom: 45px;
    float: right;
    background-color: #e59f71;
    width: 470px;
    padding: 20px;
    ${mq[3]} {
        width: 400px;
        margin-top: -140px;
    }
    ${mq[1]} {
        width: 320px;
        margin-top: -100px;
    }
    ${mq[0]} {
        width: 320px;
        margin-top: -35px;
        float: unset;
    }
`

export const SectionHeading = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
  ${mq[2]} {
    font-size: 30px;
  }
`
export const SectionSubHeading = styled.p`
  color: #01565b;
  font-family: Rubik;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  & > strong {
    color: #01656b;
  }
`

export const BlockText = styled.p`
  color: #ffffff;
  font-family: Rubik;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  & > strong {
    color: #01656b;
  }
`

export const MainImage = styled.img`
  z-index: -1;
`
