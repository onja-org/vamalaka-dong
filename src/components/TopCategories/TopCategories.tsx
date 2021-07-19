import React from 'react'
import styled, { css } from 'styled-components'
import { fonts } from '../../globalStyles/fonts'

const categoriesStyle = css`
  ${fonts}
  font-family: Futura Std;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #041d42;
`

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Header = styled.h1`
  ${categoriesStyle}
  padding-bottom: 15px;
  margin-top: 0;
  margin-bottom: 0;
`

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Button = styled.button`
  ${categoriesStyle}
  background-color: #ffffff;
  text-transform: capitalize;
  border: 0.5px solid #158cb1;
  box-sizing: border-box;
  padding-top: 9px;
  padding-left: 28px;
  padding-bottom: 10px;
  padding-right: 28px;
  cursor: pointer;
  width: 214px;
  flex-basis: 100%;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 5px;
`

export interface TopCategoriesProps {
  names?: any
  title?: string
  onClick: () => void
}

const TopCategories: React.FC<TopCategoriesProps> = ({
  names,
  title,
  onClick,
  ...props
}) => {
  return (
    <CategoryContainer>
      <Header>{title}</Header>
      <CategoryList>
        {names.map((item: string) => {
          return (
            <Button type='button' onClick={() => ''} {...props}>
              {item}
            </Button>
          )
        })}
      </CategoryList>
    </CategoryContainer>
  )
}

export default TopCategories
