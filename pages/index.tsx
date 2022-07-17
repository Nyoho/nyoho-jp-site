import React from 'react'
import Head from 'next/head'
import SocialLinks from '../components/SocialLinks'
import Header from './header'

const Home = () =>
    <div>
        <Head>
          <title>Nyoho.jp</title>
        </Head>
        <div className='gloss-container'>
            <div className='gloss'></div>
        </div>
        <Header />
      <div id='main-content' role='main'>
          <SocialLinks />
          <section id='favorites'>
            <div className='container'>
                <h2 id="favorites">Favorites</h2>
                <ul>
                    <li>OS
                        <ol>
                            <li>NEXTSTEP, macOS, iOS</li>
                            <li>Linux</li>
                        </ol>
                    </li>
                    <li>Frameworks
                        <ol>
                            <li>App Kit, Cocoa</li>
                        </ol>
                    </li>
                    <li>Editor/Environment
                        <ol>
                            <li>Emacs</li>
                        </ol>
                    </li>
                    <li>Music
                        <ul>
                            <li>Trumpet</li>
                            <li>Wind band</li>
                            <li>Composition</li>
                            <li>Arrangement</li>
                        </ul>
                    </li>
                  <li>Programming Languages
                    <ol>
                        <li>Objective-C</li>
                        <li>Swift</li>
                        <li>Ruby</li>
                        <li>Haskell</li>
                        <li>BASIC</li>
                    </ol>
                    </li>
                    <li>Keyboards<ul>
                        <li>Happy Hacking Keyboard</li>
                        <li>Assignment<ul>
                            <li><a href="http://www.itmedia.co.jp/enterprise/articles/0704/24/news006.html">Masui special (assigning &#39;;&#39; key to RET)</a></li>
                            <li>The control key is in front of &#39;,&#39; key.</li>
                            <li>The right side of A key is &#39;;&#39;.</li>
                            <li>The right side of Z key is delete.</li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li>Natural Languages
                        <ul>
                            <li>Dialects, especially the Hiroshima dialect</li>
                            <li>English</li>
                        </ul>
                    </li>
                    <li>Morphisms
                        <ul>
                            <li>Frobenius</li>
                        </ul>
                    </li>
                    <li>Belongs to
                        <ul>
                            <li><a href="https://nshiroshima.github.io">Cocoa Study Hiroshima</a></li>
                            <li><a href="https://hiroshimarb.github.io">Hiroshima.rb</a></li>
                            <li>Hiroshima.el</li>
                            <li><a href="http://hi-lambda-oshima.github.io">Hiλoshima</a></li>
                            <li><a href="https://hirusthima.github.io">hirusthima</a></li>
                            <li><a href="https://elixiroshima.github.io">Elixiroshima</a></li>
                            <li>Hiroshima Git Study Group</li>
                            <li><a href="http://kamosui.net">賀茂吹奏楽団 (Kamo Wind Band)</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
          </section>
        </div>
    </div>

export default Home
