import styled from "styled-components";

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`;
export const Titulo = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const Tag = styled.span`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: #e1a32a;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  margin-top: 16px;
`;
export const Descricao = styled.textarea`
  color: #888888;
  font-size: 14px0;
  line-height: 24px;
  font-family: "Roboto monospace", monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`;
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;
export const Botao = styled.button`
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  background-color: #2f3640;
  border-radius: 18px;
  margin-right: 8px;
`;
