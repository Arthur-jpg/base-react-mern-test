import styled from 'styled-components'

const Base = styled.div `

    
    background-color: rgb(0, 37, 85);
    padding-left: 100px;
    padding-right: 100px;
    height: 500px;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    #titulo {
      display: flex;
      flex-direction: column;
      gap: 10px;
      
    }
    #tituloreal {
      font-weight: bold;
      font-size: 54px;
    }
    #texto {
      font-size: 18px;
      width: 450px;
      font-weight: lighter;
    }
    p {
      color: white;
    }
    img {
      position: relative;
      top: 25px;
      width: 400px;
    }

  



`

export default Base