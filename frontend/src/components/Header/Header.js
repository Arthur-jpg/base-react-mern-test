import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../../images/heroimage.png';
import Base from './Style';


function Header(props) {
  return (
    <Base>
    
    <div id="titulo">
      <p id='tituloreal'>
        Portfólio de Projetos do Ibmec
      </p>
      <p id='texto'>
        Conheça os incríveis projetos realizados por alunos e professores do IBMEC
      </p>

    </div>
    <div id='imagem'>
      <img src={headerImage}></img>
    </div>
    
    </Base>
  )
}

export default Header


// const Header = () => {

//     const StyleHeader = styled(Box)(({ theme }) => (
//         {
//           display: "flex",
//           justifyContent: 'center',
//           minHeight: 400,
//           backgroundImage: `url(${headerImage})`,
//           backgroundSize: "small",
//           backgroundColor: theme.palette.secondary.main,

//         }

//     ));
//     return (
//         <>
//           <StyleHeader >

//           </StyleHeader>
//         </>
//     )
// }

// export default Header