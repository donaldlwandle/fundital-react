import React from 'react'
import { Container , Image , Title , SubTitle  , Pane , LabButton , HomeLogo} from './styles/globe'

export default function Globe({bg , children , ...restProps}){

    return <Container {...restProps} background={bg}>{children}</Container>
    
}

Globe.Title = function GlobeTitle ({w , s , children , ...restProps}){
    return <Title {...restProps} weight={w} size={s}>{children}</Title>
};

Globe.SubTitle = function GlobeSubTitle ({ w, s ,children , ...restProps}){
    return <SubTitle {...restProps} weight={w} size={s}>{children}</SubTitle>
};

Globe.Image = function GlobeImage ({children , ...restProps}){
    return <Image {...restProps}>{children}</Image>
};

Globe.Pane = function GlobePane ({children , ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
};

Globe.LabButton = function GlobeLabButton ({children , ...restProps}){
    return <LabButton {...restProps}>{children}</LabButton>
};

Globe.HomeLogo = function GlobeHomeLogo ({children, ...restProps}){
    return (
        <HomeLogo {...restProps}>{children}</HomeLogo>
    );
};