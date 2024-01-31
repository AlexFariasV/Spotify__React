// src/MeuBotao.js
import React from 'react';
import './sidebar-footer.css';


/* ! início  Imagens  */

import logo from '../assets/icons/logo-spotify.png';

/* Fim imagens */

const NavFooter = () => {
    return (
        <body>
            <div class="sidebar">
                <nav class="sidebar__navigation">
                    <div>
                        <div class="logo">
                            <a href="">
                                <img src={logo} alt=" Logo Spotify" />
                            </a>
                        </div>
                        <ul>
                            <li>
                                <a href="">
                                    <span class=" fa fa-home"></span>

                                    <span> Início </span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="fa fa-search"></span>

                                    <span> Buscar </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="library">

                    <div class="library-content">
                        <div>
                            <button>
                                <span class="fa fas fa-book"></span>
                                <span>Sua Biblioteca </span>
                            </button>
                        </div>
                        <div>
                            <span class="fa fa-plus"></span>
                        </div>
                    </div>
                    <div class="section-playlist">
                        <section class="section-playlist-box1">
                            <span class="text title"> Crie sua primeira playlist </span>
                            <span class="text subtitle"> É fácil, vamos te ajudar. </span>
                            <button class="section-playlist__button">
                                <span>
                                    Criar playlist
                                </span>
                            </button>
                        </section>
                    </div>
                    <div class="cookies">
                        <a href="">Legal</a>
                        <a href="">Centro de Privacidade</a>
                        <a href="">Pólítica de privacidade</a>
                        <a href="">Cookies</a>
                        <a href="">Sobre anúncios</a>
                        <a href="">Acessibilidade</a>
                        <a href="">Notice at Collection</a>
                        <a href="">Cookies</a>
                    </div>
                    <div class="languages">
                        <button class="languages__button">
                            <span class="fa fa-globe "></span>
                            <span> Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
            <footer>
                <div class="content__footer">
                    <div class="content__texts__footer">
                        <span class="text__footer">Testar o Premium de Graça </span>
                        <span class="subtext__footer">Inscreva-se para curtir música ilimitada e podcasts só com alguns
                            anúncios. Não precisa de cartão de crédito. </span>
                    </div>
                    <div class="button__footer">
                        <button>Increva-se grátis</button>
                    </div>
                </div>
            </footer>
        </body>
    );
};

export default NavFooter;