import React from "react"
import DasSindImage from "../../../images/EmmoraTeam4.jpg"
import data from "./data"
import { 
  ContentSection,
  ResponsiveHeading,
  SectionSubHeading,
  BlockText,
  SectionHeadingPrimary, 
  Section, 
  TeamImage 
} from './styled';

const DasSind = () => {
  return (
    <Section>
          <TeamImage src={DasSindImage} />
      <ContentSection>
        <ResponsiveHeading>
            <SectionHeadingPrimary>{data.title}</SectionHeadingPrimary>
            <SectionSubHeading>{data.subTitle}</SectionSubHeading>
            <BlockText>
               {data.description}
            </BlockText>
        </ResponsiveHeading>
      </ContentSection>
    </Section>
  )
}

export default DasSind
