import styled from "@emotion/styled"

import WirbringenImage from "../../../images/shutterstock_488682844.jpg"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const ContentSection = styled.div`
  display: flex;
  background-image: url(${WirbringenImage});
  background-position: 100% 100%;
  background-size: cover;
  text-align: center;
  margin: 65px 0;
`

export const ResponsiveHeading = styled.div`
  padding: 65px 70px 20px 70px;
  margin: auto;
`

export const BlockText = styled.p`
  color: #01656b;
  font-family: Rubik;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  & > strong {
    color: #01656b;
  }
`
export const SectionHeadingPrimary = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
`