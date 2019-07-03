import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'

class ArtDraft extends ComponentExt{
  render(){
    return(<div className={`${styles['draft-test']} ${styles['ff-f']}`}>
      ArtDraft
    </div>)
  }
}
export default ArtDraft
