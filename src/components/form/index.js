import React from "react";
import { Container, PaneSpace , Line , Pane , CheckBox, FrameRight,Title2, Wraper, Error ,Title , Text , TextSmall ,TextSmall2 , Link , Input, Button , Base ,Frame , LogoImage, ButtonGoogle, TextSmallOr } from "../form/styles/form";

export default function Form({children , ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    )
}

Form.Error = function FormError({children , ...restProps}){

    return <Error {...restProps}>{children}</Error>

};

Form.CheckBox = function FormCheckBox({children , ...restProps}){

    return <CheckBox {...restProps}>{children}</CheckBox>

};



Form.TextSmallOr = function FormTextSmallOr({children , ...restProps}){

    return <TextSmallOr {...restProps}>{children}</TextSmallOr>

};


Form.PaneSpace = function FormPaneSpace({children , ...restProps}){

    return <PaneSpace {...restProps}>{children}</PaneSpace>

};

Form.ButtonGoogle = function FormButtonGoogle({children , ...restProps}){

    return <ButtonGoogle {...restProps}>{children}</ButtonGoogle>

};

Form.Wraper = function FormWraper({children , ...restProps}){

    return <Wraper {...restProps}>{children}</Wraper>

};

Form.Container = function FormContainer({children , ...restProps}){

    return <Container {...restProps}>{children}</Container>

};

Form.Line = function FormLine({children , ...restProps}){

    return <Line {...restProps}>{children}</Line>

};

Form.Pane = function FormPane({children , ...restProps}){

    return <Pane {...restProps}>{children}</Pane>

};

Form.Title = function FormTitle({children , ...restProps}){

    return <Title {...restProps}>{children}</Title>

};

Form.Title = function FormTitle({children , ...restProps}){

    return <Title {...restProps}>{children}</Title>

};

Form.Title2 = function FormTitle2({children , ...restProps}){

    return <Title2 {...restProps}>{children}</Title2>

};

Form.Text = function FormText({children , ...restProps}){

    return <Text {...restProps}>{children}</Text>

};

Form.TextSmall = function FormTextSmall({children , ...restProps}){

    return <TextSmall {...restProps}>{children}</TextSmall>

};

Form.TextSmall2 = function FormTextSmall2({children , ...restProps}){

    return <TextSmall2 {...restProps}>{children}</TextSmall2>

};

Form.Link = function FormLink({children , ...restProps}){

    return <Link {...restProps}>{children}</Link>

};

Form.Input = function FormInput({...restProps}){

    return <Input {...restProps}/>

};


Form.Button = function FormButton({children , ...restProps}){

    return <Button {...restProps}>{children}</Button>

};


Form.Base = function FormBase({children , ...restProps}){

    return <Base {...restProps}>{children}</Base>

};

Form.Frame = function FormFrame({children , ...restProps}){

    return <Frame {...restProps} >{children}</Frame>

};


Form.FrameRight = function FormFrameRight({children , ...restProps}){

    return <FrameRight {...restProps} >{children}</FrameRight>

};


Form.LogoImage = function FormLogoImage({children , ...restProps}){

    return <LogoImage {...restProps}>{children}</LogoImage>

};