import styled from "@emotion/styled"

import WirbringenImage from "../../../images/clever-visuals-Gs1EV3boogM-unsplash.jpg"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const ContentSection = styled.div`
  display: flex;
  background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${WirbringenImage});
  background-position: 25% 25%;
  background-size: cover;
  text-align: center;
  margin: 65px 0;
  height: 225px;
`

export const ResponsiveHeading = styled.div`
  padding: 25px;
  margin: auto;
`

export const BlockText = styled.p`
  color: #01565b;
  font-family: Rubik;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: normal;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  & > strong {
    color: #01565b;
  }
`
export const SectionHeadingPrimary = styled.h1`
  font-family: Trirong;
  font-size: 36px;
  font-weight: 400;
  color: #01565b;
`
export const StyledButton = styled.button`
  border-radius: 25px;
  border: 3px solid #01565b;
  background: none;
  color: #01565b;
  font-weight: 700;
  padding: 5px 25px;
  cursor: pointer;
}
`