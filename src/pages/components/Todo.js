/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Edit from './Todo/Edit';
import List from './Todo/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect, useCallback} from 'react';

const TodoWarp = styled.div`
  height: 100vh;
  width: 40%;
  background-color: #272727;
`
const Profile =styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin:auto;

  & .item{
    width: 20%;
    cursor: pointer;
    position: relative;
    
    
    & img{
      width: 100%;

    }
  }

`
const Todo = ({setCurrentTask,setComment}) => {
  const [work, setWork]=useState([]);
  
  
  useEffect(()=>{
    setComment(work)
  },[work])
  
  return (
    <TodoWarp>
      <Edit setWork={ setWork }></Edit>
      {/* <List Listdata={ work } delWork={ setWork }></List> */}
      <List Listdata={ work } delWork={ setWork } setCurrentTask={setCurrentTask}></List> 
      <Profile>
        <div className='item'>
          <div className='next'><a href="https://freddy10-github.github.io/"  target="_blank" ><FontAwesomeIcon icon={fab.faBlogger} size='6x' color='#777'/></a></div>          
        </div>
        <div className='item'>
          <div className='next'><a href="https://github.com/Freddy10-github"  target="_blank" ><FontAwesomeIcon icon={fab.faGithub} size='6x' color='#777'/></a></div>          
        </div>
        <div className='item'>
          <div className='next'><a href="https://www.linkedin.com/in/freddy-lo/"  target="_blank" ><FontAwesomeIcon icon={fab.faLinkedin} size='6x' color='#777'/></a></div>          
        </div>
      </Profile>
    </TodoWarp>
  );
};

export default Todo;