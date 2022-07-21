import React from "react";
import{Container , 
    Content , 
    Logo , 
    Search , 
    Nav , 
    NavMenu , 
    NavlistWrap, 
    Navlist , 
    MenuIcons ,
    LabButton , 
    Dropdown , 
    ProfileText , 
    Cont  , Title , SubTitle , Image ,Pane , Group, Column} from "./styles/headerr"

export default function Headerr({bg ,children , ...restProps}){
    return <Container {...restProps} background ={bg}>{children}</Container>
}

Headerr.Content = function HeaderrContent({children , ...restProps}){
    return <Content {...restProps}>{children}</Content>
}

Headerr.Column = function HeaderrColumn({children , ...restProps}){
    return <Column {...restProps}>{children}</Column>
}

Headerr.Logo = function HeaderrLogo({children , ...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}

Headerr.Search = function HeaderrSearch({children , ...restProps}){
    return <Search{...restProps}>{children}</Search>
}

Headerr.Nav = function HeaderrNav({children , ...restProps}){
    return <Nav {...restProps}>{children}</Nav>
}

Headerr.NavMenu = function HeaderrNavMenu({children , ...restProps}){
    return <NavMenu {...restProps}>{children}</NavMenu>
}

Headerr.Navlist = function HeaderrNavlist({children , ...restProps}){
    return <Navlist {...restProps}>{children}</Navlist>
}

Headerr.NavlistWrap = function HeaderrNavlistWrap({children , ...restProps}){
    return <NavlistWrap {...restProps}>{children}</NavlistWrap>
}

Headerr.MenuIcons = function HeaderrMenuIcons({children , ...restProps}){
    return <MenuIcons{...restProps}>{children}</MenuIcons>
}

Headerr.LabButton = function HeaderrLabButton({children , ...restProps}){
    return <LabButton {...restProps}>{children}</LabButton>
}

Headerr.Dropdown = function HeaderrDropdown({children , ...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Headerr.Cont = function HeaderrCont({children , ...restProps}){
    return <Cont {...restProps}>{children}</Cont>
}

Headerr.ProfileText = function HeaderrProfileText({children , ...restProps}){
    return <ProfileText {...restProps}>{children}</ProfileText>
}

Headerr.Title = function HeaderTitle ({w , s , children , ...restProps}){
    return <Title {...restProps} weight={w} size={s}>{children}</Title>
};

Headerr.SubTitle = function HeaderSubTitle ({ w, s ,children , ...restProps}){
    return <SubTitle {...restProps} weight={w} size={s}>{children}</SubTitle>
};

Headerr.Image = function HeaderImage ({children , ...restProps}){
    return <Image {...restProps}>{children}</Image>
};

Headerr.Pane = function HeaderPane ({children , ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
};

Headerr.Group = function FormGroup ({children , ...restProps}){
    return <Group {...restProps}>{children}</Group>
};