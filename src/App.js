import React, { Component } from 'react';
import './App.css';


import Topo from './Components/Topo';
import Logo from './Components/Logo';
import Texto from './Components/Texto';
import Card from './Components/Card';
import Item from './Components/Item';
import Imagem from './Components/Imagem';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        {/* Parte Verde (CABEÇALHO) */}
        <div className="Banner1">	
            <div className='barra1'>
      	   	  <Topo />
        	  </div>

      	    <div>
              <Logo />
              <Texto />
      	    </div>
        </div>


        {/* Parte Branca (CONTEÚDO) */}
        <div className="Conteudo">

            <h3 className="subt1">Quem Somos?</h3>

              
            <div className="QuemSomos">
              <div className="qs">
                <p className="qs-txt">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                   
                </p>
              </div>
              <div className="qs2">
              	<img src="https://png.pngtree.com/element_origin_min_pic/16/12/03/0b00f081edd5b9dad2688ded61404d46.jpg" widht="300px;" height="350px;" />
              </div>	
            <div>               
           </div>  
          </div>  
        </div>


  		  {/* Planos */}

  			<div>
          <div className="Banner2">
            <h3 className="subt2"> Planos</h3>
              <div className="Cards">
                <Card valor="R$15,00" tipo="Mensal"/>
                <Card valor="R$25,00" tipo="Mensal"/>
                <Card valor="R$40,00" tipo="Mensal"/>
                <Card valor="R$80,00" tipo="Mensal"/>
              </div>       
          </div>
  			</div>




        <div>
          <div>
            <Imagem local=""/>
          </div>
        </div>	


      </div>
    );
  }
}

export default App;
