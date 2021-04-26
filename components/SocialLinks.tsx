import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SocialLinks.module.sass'

const SocialLinks = () => {
    return <section id='links' className={styles.links}>
    <div className='container'>
        <h2>Links</h2>
        <p>
            <ul style={{display: 'grid', gap: '32px 10px', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'}}>
                <li>
                    <a href='https://nyoho.jp/wiki/?%E5%BA%83%E5%B3%B6%E5%BC%81%E5%90%B9%E3%81%8D%E6%9B%BF%E3%81%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA'>
                        <FontAwesomeIcon icon="microphone" className='icon'/>
                        <div className='linktext'>広島弁吹き替え</div>
                    </a>
                </li>
                <li>
                    <a href='https://washipo.nyoho.jp'>
                        <FontAwesomeIcon icon="microphone" className='icon' />
                        <div className='linktext'>My Podcast</div>
                    </a>
                </li>
                <li>
                    <a href='https://marupokesearch.nyoho.jp'>
                        <FontAwesomeIcon icon="map-marker-alt" className='icon'/>
                        <div className='linktext'>Pokémon Tool</div>
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com/NeXTSTEP2OSX'>
                        <FontAwesomeIcon icon={['fab', 'twitter']} className='icon'/>
                        <div className='linktext'>Twitter</div>
                    </a>
                </li>
                <li>
                    <a href='http://www.facebook.com/Nyoho'>
                        <FontAwesomeIcon icon={['fab', 'facebook']} className='icon'/>
                        <div className='linktext'>Facebook</div>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/Nyoho'>
                        <FontAwesomeIcon icon={['fab', 'github']} className='icon'/>
                        <div className='linktext'>GitHub</div>
                    </a>
                </li>
                <li>
                    <a href='http://www.youtube.com/user/NyohoVideo/'>
                        <FontAwesomeIcon icon={['fab', 'youtube']} className='icon'/>
                        <div className='linktext'>YouTube</div>
                    </a>
                </li>
                <li>
                    <a href='http://www.flickr.com/photos/nyoho'>
                        <FontAwesomeIcon icon='camera-retro' className='icon'/>
                        <div className='linktext'>flickr</div>
                    </a>
                </li>
                <li>
                    <a href='https://ja.foursquare.com/nextstep2osx'>
                        <FontAwesomeIcon icon={['fab', 'foursquare']} className='icon'/>
                        <div className='linktext'>foursquare</div>
                    </a>
                </li>
                <li>
                    <a href='https://annict.com/@Nyoho'>
                        <FontAwesomeIcon icon='tv' className='icon'/>
                        <div className='linktext'>Annict</div>
                    </a>
                </li>
                <li>
                    <a href='https://atcoder.jp/users/Nyoho'>
                        <FontAwesomeIcon icon='code' className='icon'/>
                        <div className='linktext'>AtCoder</div>
                    </a>
                </li>
                <li>
                    <a href='https://nyoho.jp/diary/'>
                        <FontAwesomeIcon icon='pencil-alt' className='icon'/>
                        <div className='linktext'>Diary</div>
                    </a>
                </li>
                <li>
                    <a href='https://nyoho.jp/wiki/'>
                        <FontAwesomeIcon icon='book-open' className='icon'/>
                        <div className='linktext'>Wiki</div>
                    </a>
                </li>
                <li>
                    <a href='/30-years/'>
                        <FontAwesomeIcon icon={['far', 'clock']} className='icon'/>
                        <div className='linktext'>30 Years</div>
                    </a>
                </li>
                <li>
                    <a href='https://www.amazon.co.jp/registry/wishlist/2G8J2UATV9SV6/'>
                        <FontAwesomeIcon icon={['far', 'folder-open']} className='icon'/>
                        <div className='linktext'>Wish list</div>
                    </a>
                </li>
            </ul>
        </p>
    </div>
         </section>
}

export default SocialLinks
