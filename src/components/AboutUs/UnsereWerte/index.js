import React from "react"
import UnsereWerteHeart from "../../../images/Hero_Heart_big.png"
import data from "./data"
import {
  OurValuesSection,
  SectionHeadingPrimary,
  ContentSection,
  HeadingIcon,
  ResponsiveHeading,
  BlockText,
  Card,
  CardContents
} from './styled';

const UnsereWerte = () => {
  return (
    <OurValuesSection>
      <ResponsiveHeading>
        <SectionHeadingPrimary>{data.title}</SectionHeadingPrimary>
        <BlockText text_align="center">{data.subTitle}</BlockText>
      </ResponsiveHeading>

      <ContentSection>
        {data.tiles.map(item => {
          return (
              <Card>
                <CardContents>
                  <HeadingIcon>
                    <img src={UnsereWerteHeart} />
                  </HeadingIcon>
                  <SectionHeadingPrimary>{item.title}</SectionHeadingPrimary>
                  <BlockText text_align="left">{item.subTitle}</BlockText>
                </CardContents>
              </Card>
          )
        })}
      </ContentSection>
    </OurValuesSection>
  )
}

export default UnsereWerte
