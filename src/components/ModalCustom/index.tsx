import React from 'react';
import { Container, Content, TitleModal, ViewButtonsActions } from './styles';
import { Text, View } from 'react-native';
import { Button } from '@components/Button';

type Props = {
    title: string;
    visible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ModalCustom({ title, visible, setModalVisible}: Props){
  return (
    <Container 
            transparent={true}
            visible={visible}
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }}
            onRequestClose={() => setModalVisible(!visible)}
            animationType="fade"

            >
                
         <Content> 
                <TitleModal>{title}</TitleModal>

                <ViewButtonsActions>
                    <Button
                        variant='light'
                        onPress={() => setModalVisible(!visible)}
                        isActive={false}
                        title="Cancelar"
                        style={{
                            width: 135
                        }}
                    />
                    <Button
                        variant='dark'
                        onPress={() => console.log("cancel")}
                        isActive={false}
                        title="Sim, exluir"
                        style={{
                            width: 135
                        }}
                    />
                </ViewButtonsActions>
        </Content>

    </Container>);
};