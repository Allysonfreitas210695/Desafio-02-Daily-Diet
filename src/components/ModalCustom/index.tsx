import React from 'react';
import { Container, Content, TitleModal, ViewBackground, ViewButtonsActions } from './styles';
import { Button } from '@components/Button';

type Props = {
    title: string;
    visible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onPressConfirmed: () => void;
}

export function ModalCustom({ title, visible, setModalVisible, onPressConfirmed }: Props) {
    return (
        <Container
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={() => setModalVisible(!visible)}
        >
            <ViewBackground>
                <Content>
                    <TitleModal>{title}</TitleModal>
                    <ViewButtonsActions>
                        <Button
                            variant="light"
                            onPress={() => setModalVisible(!visible)}
                            isActive={false}
                            title="Cancelar"
                            style={{
                                width: 135,
                            }}
                        />
                        <Button
                            variant="dark"
                            onPress={onPressConfirmed}
                            isActive={false}
                            title="Sim, excluir"
                            style={{
                                width: 135,
                            }}
                        />
                    </ViewButtonsActions>
                </Content>
            </ViewBackground>
        </Container>
    );
}
