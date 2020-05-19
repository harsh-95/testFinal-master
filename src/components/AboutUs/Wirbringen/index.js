import React from "react"
import WirbringenImage from "../../../images/shutterstock_488682844.jpg"
import data from "./data"
import {
  ContentSection,
  ResponsiveHeading,
  BlockText,
  SectionHeadingPrimary
} from './styled';

const Wirbringen = () => {
  return (
    <ContentSection>
      {/* <img src={WirbringenImage} /> */}
      <ResponsiveHeading>
          <SectionHeadingPrimary>{data.title}</SectionHeadingPrimary>
          <BlockText>
             {data.subTitle}
          </BlockText>
      </ResponsiveHeading>
    </ContentSection>
  )
}

export default Wirbringen
