import React, { Component } from 'react';
import './App.css';


import Topo from './Components/Topo';
import Logo from './Components/Logo';
import Texto from './Components/Texto';
import Card from './Components/Card';
import Item from './Components/Item';


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
              <div className="border"/>

              
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
               <div className="border"/>
                <div className="Cards">
                  <Card valor="R$15,00" tipo="Mensal"/>
                  <Card valor="R$25,00" tipo="Mensal"/>
                  <Card valor="R$40,00" tipo="Mensal"/>
                  <Card valor="R$80,00" tipo="Mensal"/>
                </div>       
            </div>
  			 </div>



        <h3 className="subt1">Clinicas</h3>
        <div className="border"/>
        <div className="Mapas">
          <div className="map-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.763958547689!2d-40.307877685610535!3d-12.531790154523295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76abe1f075f6183%3A0x5b2fc3a6e4b7c225!2sProbicho!5e0!3m2!1spt-BR!2sbr!4v1543786605918" className="maps"></iframe>
            <h3 className="Label2">Itaberaba-BA ( Google Maps )</h3>
          </div>

          <div className="map-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.8171309203276!2d-40.312651885610656!3d-12.528270554454139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76a95ff337e7317%3A0x48340925b633dbb!2sClinica+veterin%C3%A1ria+ANIMED!5e0!3m2!1spt-BR!2sbr!4v1543790485471" className="maps"></iframe>
            <h3 className="Label2">Itaberaba-BA ( Google Maps )</h3>
          </div>
        </div>	


        


      </div>
    );
  }
}

export default App;
