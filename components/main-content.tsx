import SocialLinks from './SocialLinks'
import { getData } from '../lib/api'

type Props = {
  content: string
}

export default function MainContent({ content }: Props) {
  return (
    <div id='main-content' role='main'>
      <SocialLinks />
      <section id='favorites'>
        <div className='container'>
          <h2 id="favorites">Favorites</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </div>
  )
}
