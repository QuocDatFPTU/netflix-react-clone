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
    <div className="bg-black">
      <div className="flex justify-between ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix logo " />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s" alt="User logo " />
      </div>
    </div>
  );
}
