import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody, 
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles'

import avatar from '../../assets/avatar.png'


export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@matheussousa</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>
                        Matheus Sousa
                    </UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />

                        <Feather color='#fff' name='lock' size={14} />
                        <Date>há 2 anos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons color='#fff' name='comment-outline' size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign color='#fff' name='hearto' size={14} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    )
}