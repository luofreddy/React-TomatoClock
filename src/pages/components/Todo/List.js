/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Item from './Item';

const ListWrap = styled.div`
  margin:10px 1em;
  background-color: #ddd;
  height: 45%;
  overflow-x:hidden;
  overflow-y: auto;
`
const Title = styled.div`
  color: #ddd;
  font-size: large;
  font-weight: bold;
  margin: 0 1em;
`

const List = ({ Listdata}) => {
  return (
    <>
    <Title>Work List :</Title>
    <ListWrap>
      {     
      Listdata.map(item => {
        const { id, note, } =item
        return <Item key={ id } id={ id }note ={note}/>
      })}
      
    </ListWrap>
    </>
  );
};

export default List;