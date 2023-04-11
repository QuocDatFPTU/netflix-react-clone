import React from "react";
import styled from "styled-components";

type Props = {};

const Container = styled.div`
  display: flex;
`;

const LogoImage = styled.img``;

const UserImage = styled.img``;
export function Header({}: Props) {
  return (
    <div className="nav">
      <div className="flex justify-between "></div>
    </div>
  );
}
