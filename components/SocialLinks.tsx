import styles from './SocialLinks.module.sass'
import { FaClock, FaFolderOpen,
         FaMicrophone, FaMapMarkerAlt, FaTv, FaCode, FaPencilAlt, FaBookOpen, FaCameraRetro,
         FaTwitter, FaFacebook, FaGithub, FaYoutube, FaFoursquare } from 'react-icons/fa'

const SocialLinks = () => {
  return <section id='links' className={styles.links}>
           <div className='container'>
             <h2>Links</h2>
             <ul style={{display: 'grid', gap: '32px 10px', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))'}}>
               <li>
                 <a href='https://nyoho.jp/wiki/?%E5%BA%83%E5%B3%B6%E5%BC%81%E5%90%B9%E3%81%8D%E6%9B%BF%E3%81%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA'>
                   <FaMicrophone className={styles.icon} />
                   <div className='linktext'>広島弁吹き替え</div>
                 </a>
               </li>
               <li>
                 <a href='https://washipo.nyoho.jp'>
                   <FaMicrophone className={styles.icon} />
                   <div className='linktext'>My Podcast</div>
                 </a>
               </li>
               <li>
                 <a href='https://marupokesearch.nyoho.jp'>
                   <FaMapMarkerAlt className={styles.icon}/>
                   <div className='linktext'>Pokémon Tool</div>
                 </a>
               </li>
               <li>
                 <a href='https://twitter.com/NeXTSTEP2OSX'>
                   <FaTwitter className={styles.icon}/>
                   <div className='linktext'>Twitter</div>
                 </a>
               </li>
               <li>
                 <a href='http://www.facebook.com/Nyoho'>
                   <FaFacebook className={styles.icon}/>
                   <div className='linktext'>Facebook</div>
                 </a>
               </li>
               <li>
                 <a href='https://github.com/Nyoho'>
                   <FaGithub className={styles.icon}/>
                   <div className='linktext'>GitHub</div>
                 </a>
               </li>
               <li>
                 <a href='http://www.youtube.com/user/NyohoVideo/'>
                   <FaYoutube className={styles.icon}/>
                   <div className='linktext'>YouTube</div>
                 </a>
               </li>
               <li>
                 <a href='http://www.flickr.com/photos/nyoho'>
                   <FaCameraRetro className={styles.icon}/>
                   <div className='linktext'>flickr</div>
                 </a>
               </li>
               <li>
                 <a href='https://ja.foursquare.com/nextstep2osx'>
                   <FaFoursquare className={styles.icon}/>
                   <div className='linktext'>foursquare</div>
                 </a>
               </li>
               <li>
                 <a href='https://annict.com/@Nyoho'>
                   <FaTv className={styles.icon}/>
                   <div className='linktext'>Annict</div>
                 </a>
               </li>
               <li>
                 <a href='https://atcoder.jp/users/Nyoho'>
                   <FaCode className={styles.icon}/>
                   <div className='linktext'>AtCoder</div>
                 </a>
               </li>
               <li>
                 <a href='https://nyoho.jp/diary/'>
                   <FaPencilAlt className={styles.icon}/>
                   <div className='linktext'>Diary</div>
                 </a>
               </li>
               <li>
                 <a href='https://nyoho.jp/wiki/'>
                   <FaBookOpen className={styles.icon}/>
                   <div className='linktext'>Wiki</div>
                 </a>
               </li>
               <li>
                 <a href='/30-years/'>
                   <FaClock className={styles.icon}/>
                   <div className='linktext'>30 Years</div>
                 </a>
               </li>
               <li>
                 <a href='https://www.amazon.co.jp/registry/wishlist/2G8J2UATV9SV6/'>
                   <FaFolderOpen className={styles.icon}/>
                   <div className='linktext'>Wish list</div>
                 </a>
               </li>
             </ul>
        </div>
    </section>
}

export default SocialLinks
