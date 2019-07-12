import * as React from 'react'
import {message, notification, Modal} from 'antd'
const { confirm } = Modal

export class ComponentExt<P = {}, S = {}> extends React.Component<P,S>{
  $message = message
  $notification = notification
  $confirm = confirm
}
