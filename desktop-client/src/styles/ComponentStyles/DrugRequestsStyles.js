import styled from "styled-components";

//HOME COMPONENTS
export const DrugRequestCardWrapper = styled.ul`
  list-style-type: none;
  margin-bottom: 12px;
  border-bottom: 1px solid #d2d2d2;
  padding-bottom: 10px;
`;

export const DrugRequestCardItem = styled.li`
  display: flex;
  /* align-items: center; */
  justify-content: flex-start;
  flex-direction: column;
`;

export const DrugRequestTitle = styled.h1`
  font-size: 23px;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-weight: 320;
  color: black;
`;

export const ItemContainer = styled.div`
  font-size: 17.5px;
  padding-bottom: 5px;
  font-weight: 420;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const MoreSpan = styled.span`
  color: grey;
  font-size: 14px;
  margin-left: auto;
  color: #3182ce;
`;
