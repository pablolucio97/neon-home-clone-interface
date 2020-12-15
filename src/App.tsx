import React, {useEffect, useState} from 'react';
import {SiFacebook, SiInstagram, SiLinkedin, SiTwitter, SiYoutube} from 'react-icons/si'
import {MdMenu} from 'react-icons/md'

import './styles.css'
import banner from './assets/img/banner.png'
import card1 from './assets/img/card1.png'
import card2 from './assets/img/card2.png'
import card3 from './assets/img/card3.png'
import mobile from './assets/img/mobile.png'
import appstore from './assets/img/appstore.svg'
import googleplay from './assets/img/googleplay.svg'
import abcd from './assets/img/abcd.png'
import logo from './assets/img/logo.png'


function App() {


  const [showMenu, setShowMenu] = useState(0)
  const [showDividerBottom, setShowDividerBottom] = useState(0)

//WATCH WINDOW WIDTH
 useEffect(() => {
  const watchWidth = setInterval(() => {
    var getWidth = window.innerWidth
    setShowMenu(getWidth)
    setShowDividerBottom(getWidth)
  },100)
  return () => {
    clearInterval(watchWidth)
  }
 },[])




  return (
    <div className='main-container'>
      <header>
        <div className="logo">
          <img src={logo} alt="neon-logo"/>
        </div>
      {
        showMenu > 1260?
        <div className="nav">
        <a href="#">conta</a>
        <a href="#">pejota</a>
        <a href="#">perguntas</a>
        <a href="#">tarifas</a>
        <a href="#">#focanodinheiro</a>
        <a href="#">conheça a neon</a>
        <button id='menu-btn'>Abra sua conta</button>
      </div>
      : 
      <button style={{width: 40}}><MdMenu size={24}/></button>
      }
      </header>
      <div className="container-wrapper">
        <div className="sub-wrapper">
        <div className="main-description">
          <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
          <p>Neon, conta grátis e cartão sem anuidade. Abra sua conta, é só baixar o app!</p>
          <button id='menu-btn'>Abra sua conta</button>
        </div>
          <div className="img-container">
            <img src={banner} alt="banner"/>
          </div>
        </div>
        </div>
        <div className="middle-content">
          <div className="video-container">
            <iframe width={710} height={399} src="https://www.youtube.com/embed/cEM7Ff_d1BU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          <div className="middle-content-container">
            <h3>Resolva sua vida direto no app!</h3>
            <div className="cards-container">
              <div className="card1">
                <img src={card1} alt="neon-imgs"/>
                <h3>Crédito</h3>
                <p>Sua conta digital tem cartão de crédito sem anuidade nem complicação.</p>
              </div>
              <div className="card2">
                <img src={card2} alt="neon-imgs"/>
                  <h3>Sem taxas</h3>
                  <p>Você não paga nada por transferências, boletos de depósito e outros serviços no app.</p>
              </div>
              <div className="card3">
                <img src={card3} alt="neon-imgs"/>
                <h3>Investimentos</h3>
                  <p>Rendem mais que a poupança e você resgata quando quiser.</p>
              </div>
            </div>
              <button>Todos os produtos</button>
          </div>
        </div>
        <div className="mobile-adv-container">
          <div className="mobile-store-description">
            <h3>Que tal abrir uma conta digital para ver como a gente faz a sua vida mais simples?</h3>
            <div className="stores-container">
              <img src={googleplay} alt="btn-goole-play"/>
              <img src={appstore} alt="btn-app-store"/>
            </div>
          </div>
          <img src={mobile} alt="neon-mobile" width={400} height={800}/>
        </div>
        <footer>
            <div className="footer-container">
                <div className="social-icons">
                <button className='facebook'><SiFacebook size={20} color='#fff'/></button>
                  <button className='linkedin'><SiLinkedin size={20} color='#fff'/></button>
                  <button className='twitter'><SiTwitter size={20} color='#fff'/></button>
                  <button className='instagram'><SiInstagram size={20} color='#fff'/></button>
                  <button className='youtube'><SiYoutube size={20} color='#fff'/></button>
              </div>
              <div className="internal-links">
                <a href="#">termos de uso</a>
                <a href="#">política de privacidade</a>
                <a href="#">carreira</a>
                <a href="#">ouvidoria</a>
              </div>
              <div className="contact">
                <div className="email1">
                  <span>Atendimento: </span>
                  <p>oi@neon.com.br (24 horas)</p>
                </div>
                <div className="email2">
                  <span>Imprensa: </span>
                  <p> imprensa@neon.com.br</p>
                </div>
              </div>
                {showDividerBottom < 860? 
                
                <div className="bottom-footer">
                <div className="left-content divider">
                  <p>Neon Pagamentos S.A. – CNPJ 20.855.875/0001-82 R. Hungria, 1400 – Jardim Europa, São Paulo – SP, 01455-000 Neon Pagamentos® 2018</p>
                  <br/>
                  <p>Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo. A gente também. Por isso o time Neon está sempre trabalhando para fazer a conta digital perfeita para você ; )</p>
                </div>
                <div className="right-content">
                  <img src={abcd} alt="abcd assoication"/>
                  <p>Esta empresa é membro da ABCD e, como tal, atende às Orientações de Conduta constantes em seu Código de Ética e Autorregulação</p>
                </div>
                </div>  
                
                : 

                <div className="bottom-footer ">
                <div className="left-content">
                  <p>Neon Pagamentos S.A. – CNPJ 20.855.875/0001-82 R. Hungria, 1400 – Jardim Europa, São Paulo – SP, 01455-000 Neon Pagamentos® 2018</p>
                  <br/>
                  <p>Oi! Leu até aqui? Você se preocupa com os mínimos detalhes, mesmo. A gente também. Por isso o time Neon está sempre trabalhando para fazer a conta digital perfeita para você ; )</p>
                </div>
                <div className="right-content">
                  <img src={abcd} alt="abcd assoication"/>
                  <p>Esta empresa é membro da ABCD e, como tal, atende às Orientações de Conduta constantes em seu Código de Ética e Autorregulação</p>
                </div>
                </div>   
                }
              
            </div>
        </footer> 
    </div>
  );
}

export default App;
