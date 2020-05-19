import styled from "@emotion/styled"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  ${mq[2]} {
    flex-direction: column;
  }
`
export const ContentSection = styled.div`
    width: 50%;
    float: left;
    padding: 40px 70px 25px 70px;
    background-color: #f2cfb8;
    display: block;
    ${mq[2]} {
        width: 85%;
        padding: 25px;
        margin: auto;
        margin-top: 30px;
      }
`

export const ResponsiveHeading = styled.div`
  display: block;
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

export const TeamImage = styled.img`
    width: 50%;
    float: left;
    ${mq[2]} {
        width: 100%;
    }
  }
`