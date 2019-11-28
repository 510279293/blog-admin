import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import * as styles from './index.scss'
import {getUrlParams} from '@utils/util.js'
import {addArt,tagList,artList} from '@api/index'
class ArtPre extends ComponentExt{
  constructor(props){
    super(props)
    this.state = {
      art: {}
    }
  }
  async componentDidMount(){
    let search = this.props.location.search
    let artId = getUrlParams(search, 'artId')
    if(artId){
      const res = await artList({id:artId})
      this.setState({
        art: res.data[0]
      })
    }
    console.log(res)
  }
  componentDidUpdate(){
    window.initHtml();
  }
  render(){
    return(<div className={styles['pre_art']}>
      <div className="con-txt marked-box" dangerouslySetInnerHTML={{__html:this.state.art.editContent}}></div>
    </div>)
  }
}

export default ArtPre;