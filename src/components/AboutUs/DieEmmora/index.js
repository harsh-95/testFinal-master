import React from "react"
import WirbringenImage from "../../../images/clever-visuals-Gs1EV3boogM-unsplash.jpg"
import data from "./data"
import {
  ContentSection,
  ResponsiveHeading,
  BlockText,
  SectionHeadingPrimary,
  StyledButton
} from './styled';

const DieEmmora = () => {
  return (
    <ContentSection>
      {/* <img src={WirbringenImage} /> */}
      <ResponsiveHeading>
          <SectionHeadingPrimary>{data.title}</SectionHeadingPrimary>
          <BlockText>
             {data.subTitle}
          </BlockText>
          <StyledButton>{data.buttonLabel}</StyledButton>
      </ResponsiveHeading>
    </ContentSection>
  )
}

export default DieEmmora
