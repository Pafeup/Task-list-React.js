import {SectionArea, Header, Title} from "./styled"

const Section = ({ title, body, extraHeaderContent}) => (
    <SectionArea>
        <Header>
            <Title className="section__headerName">{title}</Title>
            {extraHeaderContent}
        </Header>
        {body}
    </SectionArea>
)

export default Section