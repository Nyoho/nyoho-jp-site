import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () =>
    <div>
        <div className='gloss-container'>
            <div className='gloss'></div>
        </div>
        <header>
            <h1>
                <img alt='Nyoho' src="../static/Nyoho-logo.svg" />
            </h1>
        </header>
        <div id='main-content' role='main'>
            <section id='links'>
                <div className='container'>
                  <h2>Links</h2>
                  <p>
                    <ul style={{display: 'grid', gap: '32px 10px', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'}}>
                      <li>
                        <a href='https://nyoho.jp/wiki/?%E5%BA%83%E5%B3%B6%E5%BC%81%E5%90%B9%E3%81%8D%E6%9B%BF%E3%81%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA'>
                          <FontAwesomeIcon icon="microphone" size='5x'/>
                          <div className='linktext'>広島弁吹き替え</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://washipo.nyoho.jp'>
                          <FontAwesomeIcon icon="microphone" size='5x'/>
                          <div className='linktext'>My Podcast</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://marupokesearch.nyoho.jp'>
                          <FontAwesomeIcon icon="map-marker-alt" size='5x'/>
                          <div className='linktext'>Pokémon Tool</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://twitter.com/NeXTSTEP2OSX'>
                          <FontAwesomeIcon icon={['fab', 'twitter']} size='5x'/>
                          <div className='linktext'>Twitter</div>
                        </a>
                      </li>
                      <li>
                        <a href='http://www.facebook.com/Nyoho'>
                          <FontAwesomeIcon icon={['fab', 'facebook']} size='5x'/>
                          <div className='linktext'>facebook</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://github.com/Nyoho'>
                          <FontAwesomeIcon icon={['fab', 'github']} size='5x'/>
                          <div className='linktext'>GitHub</div>
                        </a>
                      </li>
                      <li>
                        <a href='http://www.youtube.com/user/NyohoVideo/'>
                          <FontAwesomeIcon icon={['fab', 'youtube']} size='5x'/>
                          <div className='linktext'>YouTube</div>
                        </a>
                      </li>
                      <li>
                        <a href='http://www.flickr.com/photos/nyoho'>
                          <FontAwesomeIcon icon={['fab', 'flickr']} size='5x'/>
                          <div className='linktext'>flickr</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://ja.foursquare.com/nextstep2osx'>
                          <FontAwesomeIcon icon={['fab', 'foursquare']} size='5x'/>
                          <div className='linktext'>foursquare</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://annict.com/@Nyoho'>
                          <FontAwesomeIcon icon='tv' size='5x'/>
                          <div className='linktext'>Annict</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://atcoder.jp/users/Nyoho'>
                          <FontAwesomeIcon icon='code' size='5x'/>
                          <div className='linktext'>AtCoder</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://nyoho.jp/diary/'>
                          <FontAwesomeIcon icon='pencil-alt' size='5x'/>
                          <div className='linktext'>Diary</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://nyoho.jp/wiki/'>
                          <FontAwesomeIcon icon='book-open' size='5x'/>
                          <div className='linktext'>Wiki</div>
                        </a>
                      </li>
                      <li>
                        <a href='/30-years/'>
                          <FontAwesomeIcon icon={['far', 'clock']} size='5x'/>
                          <div className='linktext'>30 Years</div>
                        </a>
                      </li>
                      <li>
                        <a href='https://www.amazon.co.jp/registry/wishlist/2G8J2UATV9SV6/'>
                          <FontAwesomeIcon icon={['far', 'folder-open']} size='5x'/>
                          <div className='linktext'>Wish list</div>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
            </section>
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
                    <li>Programming Languages<ol>
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
                    <li><p>Natural Languages</p>
                        <ul>
                            <li>Dialects, especially the Hiroshima dialect</li>
                            <li>English</li>
                        </ul>
                    </li>
                    <li><p>Morphisms</p>
                        <ul>
                            <li>Frobenius</li>
                        </ul>
                    </li>
                    <li><p>Belongs to</p>
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
            </section>
        </div>
    </div>

export default Home
