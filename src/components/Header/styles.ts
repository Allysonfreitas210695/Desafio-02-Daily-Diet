import styled from "styled-components/native";
import LogoSistemaImg from "@assets/logo.png";
import LogoAvatarImg from "@assets/avatar.png";

export const Container = styled.View`
  margin: 64px 24px 72px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoSistema = styled.Image.attrs(() => ({
  source: LogoSistemaImg,
}))`
  width: 82px;
  height: 37px;
`;

export const LogoAvatar = styled.Image.attrs(() => ({
  source: LogoAvatarImg,
}))`
  width: 40px;
  height: 40px;
`;
