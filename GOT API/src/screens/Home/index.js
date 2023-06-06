import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    AddressArea,
    Text
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Home() {
    const [nome, setnome] = useState('');
    const [address, setAddress] = useState(null);

    async function handleBuscar() {
        try {
            const { status, data } = await api.get(`${nome}f09a90cbeamsh9ae56a390f806b3p10bb28jsn92a613ea8a36`);

            if (status != 200 || data.erro) {
                Alert.alert('Buscar', 'Digite um nome valido.');
            } else {
                setAddress(data);
            }

        } catch (error) {
            Alert.alert('Buscar', 'Digite um nome válido');
        }
    };

    async function handleLimpar() {
        setAddress(null);
        setnome('');
    }

    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                {!address &&
                    <Input
                        keyboardType="string"
                        maxLength={50}
                        onChangeText={setnome}
                        onSubmitEditing={handleBuscar}
                        placeholder="Digite o nome que deseja buscar"
                        placeholderTextColor="#2F48D4"
                        value={nome}
                    />
                }

                <Button
                    activeOpacity={0.8}
                    onPress={address ? handleLimpar : handleBuscar}>
                    <ButtonText>
                        {address ? 'Limpar' : 'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>

            {address &&
                <AddressArea>
                    <Text>NOME: {nome}</Text>
                    <Text>{address.logradouro}</Text>
                    <Text>nome completo: {address.fullName}</Text>
                    <Text>titulo: {address.title}</Text>
                    <Text>Familia: {address.family}</Text>
                    <Text>image: {address.image}</Text>
                    <Text>imageUrl: {address.imageUrl}</Text>
                </AddressArea>
            }
        </Container>
    );
}