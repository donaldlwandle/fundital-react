import React from "react";
import { Container , Item ,HomeLogo ,HeaderForm ,Landscape , Potrait, ProfileLogo, HeaderLabelInput ,HeaderNav ,HeaderSearch , ToggleNavigation, HearderFormLabel  , NavAnchor , ProfileText , Group , Dropdown , Column, Pane ,Title ,SubTitle ,Image ,LabButton , Cont} from "../header/styles/header";
import {Link as ReactRouterLink} from "react-router-dom"

export default function Header({bg ,children , ...restProps}){
    return <Container {...restProps} background ={bg}>{children}</Container> 
}

Header.Item = function FormItem ({children , ...restProps}){
    return <Item {...restProps}>{children}</Item>
};

Header.HomeLogo = function FormHomeLogo ({children, ...restProps}){
    return (
        <HomeLogo {...restProps}>{children}</HomeLogo>
    );
};

Header.HeaderForm = function FormHeaderForm ({children , ...restProps}){
    return <HeaderForm {...restProps}>{children}</HeaderForm>
};

Header.Group = function FormGroup ({children , ...restProps}){
    return <Group {...restProps}>{children}</Group>
};

Header.Dropdown = function FormDropdown ({children , ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
};

Header.HeaderLabelInput = function FormHeaderLabelInput ({children , ...restProps}){
    return <HeaderLabelInput {...restProps}>{children}</HeaderLabelInput>
};

Header.HeaderNav= function FormHeaderNav({children , ...restProps}){
    return <HeaderNav {...restProps}>{children}</HeaderNav>
};

Header.Landscape= function FormLandscape({children , ...restProps}){
    return <Landscape {...restProps}>{children}</Landscape>
};

Header.Potrait= function FormPotrait({children , ...restProps}){
    return <Potrait {...restProps}>{children}</Potrait>
};

Header.HeaderSearch = function FormHeaderSearch ({children , ...restProps}){
    return <HeaderSearch {...restProps}>{children}</HeaderSearch>
};

Header.Column = function HeaderColumn ({children , ...restProps}){
    return <Column {...restProps}>{children}</Column>
};

Header.HearderFormLabel = function FormHearderFormLabel ({children , ...restProps}){
    return <HearderFormLabel {...restProps}>{children}</HearderFormLabel>
};

Header.NavAnchor = function FormItem ({children , ...restProps}){
    return <NavAnchor {...restProps}>{children}</NavAnchor>
};

Header.ProfileText = function FormProfileText ({children , ...restProps}){
    return <ProfileText {...restProps}>{children}</ProfileText>
};

Header.ToggleNavigation = function FormToggleNavigation ({bg ,children , ...restProps}){
    return <ToggleNavigation {...restProps} tint={bg}>{children}</ToggleNavigation>
};

Header.ProfileLogo = function FormProfileLogo ({to , ...restProps}){
    return (
        <ReactRouterLink to={to}>

            <ProfileLogo {...restProps}/>

        </ReactRouterLink>
    )
};

Header.Pane = function HeaderPane ({children , ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
};

Header.Title = function HeaderTitle ({w , s , children , ...restProps}){
    return <Title {...restProps} weight={w} size={s}>{children}</Title>
};

Header.SubTitle = function HeaderSubTitle ({ w, s ,children , ...restProps}){
    return <SubTitle {...restProps} weight={w} size={s}>{children}</SubTitle>
};

Header.Image = function HeaderImage ({children , ...restProps}){
    return <Image {...restProps}>{children}</Image>
};

Header.LabButton = function HeaderLabButton ({children , ...restProps}){
    return <LabButton {...restProps}>{children}</LabButton>
};

Header.Cont = function HeaderCont ({children , ...restProps}){
    return <Cont {...restProps}>{children}</Cont>
};
