import React from "react"
import WerdeTeilImage from "../../../images/TeamAboutUs.jpg"
import data from "./data"
import {
  ContentSection,
  ResponsiveHeading,
  BlockText,
  SectionHeadingPrimary,
  StyledButton
} from './styled';

const WerdeTeil = () => {
  return (
    <ContentSection>
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

export default WerdeTeil

