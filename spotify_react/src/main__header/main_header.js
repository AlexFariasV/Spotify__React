// src/MeuBotao.js
import React from 'react';
import './main-content-header-rem.css';
import './main-content-header.css';


/* ! início  Imagens  */

import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png';
import jpeg_plalist_pri from '../assets/playlist/1.jpeg';
import jpeg_plalist_seg from '../assets/playlist/2.jpeg';
import jpeg_plalist_ter from '../assets/playlist/3.jpeg';
import jpeg_plalist_quart from '../assets/playlist/4.jpeg';
import jpeg_plalist_quint from '../assets/playlist/5.jpeg';
import jpeg_plalist_sext from '../assets/playlist/6.jpeg';
import jpeg_plalist_seti from '../assets/playlist/7.jpeg';
import jpeg_plalist_oita from '../assets/playlist/8.jpeg';
import jpeg_plalist_nono from '../assets/playlist/9.jpeg';
import jpeg_plalist_decim from '../assets/playlist/10.jpeg';
import jpeg_plalist_decimo_pri from '../assets/playlist/11.jpeg';
import jpeg_plalist_decimo_Segun from '../assets/playlist/12.jpeg';
import jpeg_plalist_decimo_tercei from '../assets/playlist/13.jpeg';
import jpeg_plalist_decimo_quart from '../assets/playlist/14.jpeg';
import jpeg_plalist_decimo_quinto from '../assets/playlist/15.jpeg';




/*! Fim imagens  */


const main_header = () => {
  return (
    <main>
      <div class="main-container">
        <nav class="header__navigation">
          <div class="navigation">
            <button class="arrow-left">
              <img src={smallLeft} alt="Seta esquerda">
            </button>
            <button class="arrow-right">
              <img src={smallRight} alt="Seta direita">
            </button>
            <div class="header__search">
              <img src={search} alt="">
                <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
            </div>
          </div>
          <div class="header__login">
            <button class="subscribe">Inscreva-se</button>
            <button class="login">Entrar</button>
          </div>
        </nav>


        <div class="playlist-container">
          <div id="result-playlists">
            <div class="playlist">

              <h1 id="greeting"></h1>
              <h2 class="session">Navegar por todas as seções</h2>
            </div>


            <div class="offer__scroll-container">
              <div class="offer__list">
                <section class="offer__list-item">

                  <a href="" class="cards">
                    <div class="cards card1">
                      <img src={jpeg_plalist_pri} alt="" />
                      <span>Boas festas</span>
                    </div>
                  </a>

          

                  <a href="" class="cards">
                    <div class="cards card2">
                      <img src={jpeg_plalist_seg} alt="" />
                      <span>Feitos para você</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card3">
                      <img src={jpeg_plalist_ter} alt="" />
                      <span>Lançamentos</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card4">
                      <img src={jpeg_plalist_quart} alt="" />
                      <span>Creators</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card5">
                      <img src={jpeg_plalist_quint} alt="" />
                      <span>Para treinar</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card6">
                      <img src={jpeg_plalist_sext} alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card7">
                      <img src={jpeg_plalist_seti} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card8">
                      <img src={jpeg_plalist_oita} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card9">
                      <img src={jpeg_plalist_nono} alt="" />
                      <span>Funk</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card10">
                      <img src={jpeg_plalist_decim} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card11">
                      <img src={jpeg_plalist_decimo_pri} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card12">
                      <img src={jpeg_plalist_decimo_Segun} alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card13">
                      <img src={jpeg_plalist_decimo_tercei} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card14">
                      <img src={jpeg_plalist_decimo_quart} alt="" />
                      <span>Relax</span>
                    </div>
                  </a>


                  <a href="" class="cards">
                    <div class="cards card15">
                      <img src={jpeg_plalist_decimo_quinto} alt="" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                  
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default main_header;