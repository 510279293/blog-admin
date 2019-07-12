import * as React from 'react'
import marked from 'marked'
import {ComponentExt} from '@utils/reactExt'
import cNames from 'classnames'
import * as styles from  './index.scss'

class MdEditor extends ComponentExt{
  constructor(props: any){
    super(props)
    this.state = {
      onoff: false,
      panelClass: 'md-panel',
      mode: 'split',
      _isDirty: true,
      isFullScreen: false,
      result: marked(props.content || '')
    }
  }
  componentDidUpdate(){
    if(!this.state.onoff && this.props.content){
      this.setState({
        onoff: true,
        result: marked(this.props.content || '')
      })
      this.textControl.value = this.props.content
    }
  }
  componentDidMount(){
    this.textControl = this.refs.editor
    this.previewControl = this.refs.preview
    this.textControl.value = this.props.content
  }
  componentWillUnmount(){
    this.textControl = null
    this.previewControl = null
  }
  render(){
    // const panelClass = cNames([ 'md-panel', { 'fullscreen': this.state.isFullScreen } ])
    const panelClass = `${styles['md-panel']} ${this.state.isFullScreen ? styles['fullscreen'] : ''}`
    // const editorClass = cNames([ 'md-editor', { 'expand': this.state.mode === 'edit' } ])
    const editorClass = `${styles['md-editor']} ${this.state.mode === 'edit' ? styles['expand'] : ''}`
    // const previewClass = cNames([ 'md-preview', 'markdown', { 'expand': this.state.mode === 'preview', 'shrink': this.state.mode === 'edit' } ])
    const previewClass = `${styles['md-preview']} ${styles['markdown']} ${this.state.mode === 'preview' ? styles['expand'] : ''} ${this.state.mode === 'edit' ? styles['shrink'] : ''}`
    return (
      <div className={panelClass}>
        <div className={styles['md-menubar']}>
          {this._getModeBar()}
          {this._getToolBar()}
        </div>
        <div className={editorClass}>
          <textarea 
            ref="editor" 
            name="content"
            onChange={this._onChange.bind(this)}>
          </textarea>{/* style={{height: this.state.editorHeight + 'px'}} */}
        </div>
        <div className={previewClass} ref="preview" dangerouslySetInnerHTML={{ __html: this.state.result }}></div>
        <div className={styles['md-spliter']}></div>
      </div>
    )
  }
  isDirty () {
    return this.state._isDirty || false
  }
  getValue () {
    return this.state.content
  }
  // widgets constructors
  _getToolBar () {
    let tbbtn = styles['tb-btn']
    let btnspli = `${styles['tb-btn']} ${styles['spliter']}`
    return (
      <ul className={`${styles['md-toolbar']} ${styles['clearfix']}`} style={{borderBottom: "1px solid #ccc"}}>
        <li className={tbbtn}><a title="加粗" onClick={this._boldText.bind(this)}><i className="
        iconfont iconjiacu-"></i></a></li>{/* bold */}
        <li className={tbbtn}><a title="斜体" onClick={this._italicText.bind(this)}><i className="iconfont iconxieti"></i></a></li>{/* italic */}
        <li className={btnspli}></li>
        <li className={tbbtn}><a title="链接" onClick={this._linkText.bind(this)}><i className="iconfont iconlianjie"></i></a></li>{/* link */}
        <li className={tbbtn}><a title="引用" onClick={this._blockquoteText.bind(this)}><i className="iconfont iconyinyong"></i></a></li>{/* blockquote */}
        <li className={tbbtn}><a title="代码段" onClick={this._codeText.bind(this)}><i className="iconfont iconcode"></i></a></li>{/* code */}
        <li className={tbbtn}><a title="图片" onClick={this._pictureText.bind(this)}><i className="iconfont icontupian"></i></a></li>{/* picture-o */}
        <li className={btnspli}></li>
        <li className={tbbtn}><a title="有序列表" onClick={this._listOlText.bind(this)}><i className="iconfont iconyouxuliebiao"></i></a></li>{/* list-ol */}
        <li className={tbbtn}><a title="无序列表" onClick={this._listUlText.bind(this)}><i className="iconfont iconwuxuliebiao"></i></a></li>{/* list-ul */}
        <li className={tbbtn}><a title="标题" onClick={this._headerText.bind(this)}><i className="iconfont iconwenanbiaoti"></i></a></li>{/* header */}
        {this._getExternalBtn()}
      </ul>
    )
  }
  _getExternalBtn () {
    return React.Children.map(this.props.children, (option) => {
      if (option.type === 'option') {
        return <li className={styles['tb-btn']}><a {...option.props}>{option.props.children}</a></li>
      }
    })
  }
  _getModeBar () {
    const checkActive = (mode) => cNames({ active: this.state.mode === mode })
    let mdbar = `${styles['md-modebar']}`
    let btn = `${styles['tb-btn']}`
    let pullRight = `${styles['pull-right']}`
    let spli = `${styles['spliter']}`
    return (
      <ul className={mdbar}>
        <li className={btn + ' ' + pullRight}>
          <a className={checkActive('preview')} onClick={this._changeMode('preview')} title="预览模式">
          <i className="iconfont iconyulan"></i>
          </a>
        </li> { /* preview mode */ }
        <li className={btn + ' ' + pullRight}>
          <a className={checkActive('split')} onClick={this._changeMode('split')} title="分屏模式">
            <i className="iconfont iconfenpingshezhi"></i>
          </a>
        </li> { /* split mode */ }
        <li className={btn + ' ' + pullRight}>
          <a className={checkActive('edit')} onClick={this._changeMode('edit')} title="编辑模式">
            <i className="iconfont iconbianji"></i>
          </a>
        </li> { /* edit mode */ }
        <li className={btn + ' ' + pullRight+' '+spli}></li>
        <li className={btn + ' ' + pullRight}><a title="全屏模式" onClick={this._toggleFullScreen.bind(this)}><i className="iconfont iconquanpingzuidahua"></i></a></li> {/* full-screen */}
      </ul>
    )
  }
  // event handlers
  _onChange (e) {
    const self = this;
    this.setState({
      _isDirty: true
    })
    if (this._ltr) clearTimeout(this._ltr)
    this._ltr = setTimeout(() => {
      this.setState({ result: marked(this.textControl.value) }) // change state
      this.props.editorChange(this.textControl.value, this.state.result)
    }, 300)
  }
  _changeMode (mode) {
    return (e) => {
      this.setState({ mode })
    }
  }
  _toggleFullScreen (e) {
    this.setState({ isFullScreen: !this.state.isFullScreen })
  }
  // default text processors
  _preInputText (text, preStart, preEnd) {
    const start = this.textControl.selectionStart
    const end = this.textControl.selectionEnd
    const origin = this.textControl.value

    if (start !== end) {
      const exist = origin.slice(start, end)
      text = text.slice(0, preStart) + exist + text.slice(preEnd)
      preEnd = preStart + exist.length
    }
    this.textControl.value = origin.slice(0, start) + text + origin.slice(end)
    // pre-select
    this.textControl.setSelectionRange(start + preStart, start + preEnd)
    this.setState({ result: marked(this.textControl.value) }) // change state
  }
  _boldText () {
    this._preInputText("**加粗文字**", 2, 6)
  }
  _italicText () {
    this._preInputText("_斜体文字_", 1, 5)
  }
  _linkText () {
    this._preInputText("[链接文本](www.yourlink.com)", 1, 5)
  }
  _blockquoteText () {
    this._preInputText("> 引用", 2, 4)
  }
  _codeText () {
    this._preInputText("```\ncode block\n```", 4, 14)
  }
  _pictureText () {
    this._preInputText("![alt](www.yourlink.com)", 2, 5)
  }
  _listUlText () {
    this._preInputText("- 无序列表项0\n- 无序列表项1", 2, 8)
  }
  _listOlText () {
    this._preInputText("1. 有序列表项0\n2. 有序列表项1", 3, 9)
  }
  _headerText () {
    this._preInputText("## 标题", 3, 5)
  }
}

export default MdEditor