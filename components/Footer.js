import styled from 'styled-components';

const FooterSection = styled.FooterSection`

background: #000;
color: #fff;
height: 60px;
display: flex;
justify-content: center;
align-items: center;

`;

function Footer() {
    return (
        <FooterSection>
            All Rights Reserved By ABdul Moiz AHmed Khan
        </FooterSection>
    )
}

export default Footer;
