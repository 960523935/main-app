import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Demo from "./components/demo";
import Demo2 from "./components/demo2";

const themeMap = new Map([
  ["green", { main: "green" }],
  ["black", { main: "#000" }],
  ["orange", { main: "#ff7700" }],
]);

const Title = styled.h1`
  color: ${(props) => props.theme.main};
`;

const Div = styled.div`
  margin: 20px;
  display: flex;
  width: 300px;
  justify-content: space-evenly;
  background: ${(props) => props.theme.main};
  color: #fff;
`;

const Btn = styled.button`
  cursor: pointer;
  padding: 2px 6px;
  color: ${(props) => props.theme.main};
  border: 1px solid ${(props) => props.theme.main};
`;

export default () => {
  const [theme, setTheme] = useState(themeMap.get("orange"));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Title>详情页</Title>
        <Div>
          <Div>123</Div>
          <Div>456</Div>
        </Div>
        <Demo title="这是另外一个组件，测试主题是否能通过 ProviderTheme 透传组件" />
      </ThemeProvider>
      <Demo title="这是另外一个组件，放在 ProviderTheme 组件外边，就拿不到主题" />
      <Demo2 />
      <Div>
        {[...themeMap.keys()].map((item) => {
          const theme = themeMap.get(item);
          return (
            <Btn theme={theme} onClick={() => setTheme(theme)} key={item}>
              {item}
            </Btn>
          );
        })}
      </Div>
    </div>
  );
};
