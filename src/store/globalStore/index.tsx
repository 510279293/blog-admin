import {observable, action} from 'mobx'

export class GlobalStore {
  @observable 
  num: number = 0

  @action
  increase = (num: number) => {
    this.num += num
  }

  @action
  decrease = (num: number) => {
    this.num -= num
  }
}

export default new GlobalStore()