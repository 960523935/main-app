import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 20px;
  width: fit-content;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  background: ${(props) => props.theme.main};
  color: red;
`;

export default ({
  title = "这是另外一个组件，测试主题是否能通过 ProviderTheme 透传组件",
}) => {
  return <Div>{title}</Div>;
};
