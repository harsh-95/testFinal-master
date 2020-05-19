import React from "react"
import HeaderImage from "../../../images/header.jpg"
import data from "./data"
import {
  Container,
  MainImage,
  WeAreEmmoraSection,
  SectionHeading,
  SectionSubHeading,
  BlockText,
} from './styled';

const Header = () => {
//   return (
//     <div>
//       <img src={HeaderImage} />
//       <p>{data.title}</p>
//       <p>{data.subTitle}</p>
//       <p>{data.description}</p>
//     </div>
//   )
// }
return (
  <Container>
    <div>
        <MainImage src={HeaderImage} />
    </div>
    <WeAreEmmoraSection>
        <SectionHeading>{data.title}</SectionHeading>
        <SectionSubHeading>{data.subTitle}</SectionSubHeading>
        <BlockText>
           {data.description}
        </BlockText>
    </WeAreEmmoraSection>
  </Container>
)
}

export default Header
