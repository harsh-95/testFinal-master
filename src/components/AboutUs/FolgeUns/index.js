import React from "react"
import data from "./data"
import {
  SectionHeadingPrimary,
  ContentSection,
  ResponsiveHeading,
  BlockText,
} from './styled';

const FolgeUns = () => {
  return (
    <ContentSection>
      <ResponsiveHeading>
        <SectionHeadingPrimary>{data.title}</SectionHeadingPrimary>
        <BlockText text_align="center">{data.subTitle}</BlockText>
      </ResponsiveHeading>
    </ContentSection>
  )
}

export default FolgeUns