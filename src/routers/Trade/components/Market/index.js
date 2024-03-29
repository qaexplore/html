import React, { Component } from 'react'
import { Checkbox, Tabs, Table, Input, Icon } from 'antd'
import { columnsUSDT, dataUSDT, columnsBTC, dataBTC, columnsETH, dataETH, columnsBCT, dataBCT } from '../coinsList'
import './index.less'
import { inject, observer } from 'mobx-react'

const { TabPane } = Tabs

@inject('trade')
@observer
class Market extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      activeKey: '1',
      dataUSDT: dataUSDT,
      dataBTC: dataBTC,
      dataETH: dataETH,
      dataBCT: dataBCT,
      selfCheckValue: false,
      activeKeyBefore: '1'
    }
  }
  // 币种改变 -- 根据自选框有无选中展示数据
  activeKeyChange = key => {
    this.setState({
      activeKey: key
    })
    if (this.state.searchText) {
      this.setState({
        searchText: ''
      })
      switch(this.state.activeKeyBefore) {
        case '1':
          // 定时器延迟更新数据避免用户看到页面闪烁
          setTimeout(() => {
            this.setState({
              dataBTC
            })
          }, 500)
          break
        case '2':
          setTimeout(() => {
            this.setState({
              dataUSDT
            })
          }, 500)
          break
        case '3':
          setTimeout(() => {
            this.setState({
              dataETH
            })
          }, 500)
          break
        case '4':
          setTimeout(() => {
            this.setState({
              dataBCT
            })
          }, 500)
          break
      }
    }
    this.setState({
      activeKeyBefore: key
    })
    if (this.state.selfCheckValue) {
      this.displayBySelfCheckAndKey(key)
    } else {
      this.setState({
        dataUSDT: dataUSDT,
        dataBTC: dataBTC,
        dataETH: dataETH,
        dataBCT: dataBCT
      })
    }
  }
  // 根据activeKey及自选按钮选中状态来设置展示的数据
  displayBySelfCheckAndKey = key => {
    switch(key) {
      case '1':
        let BTCCollected = dataBTC.filter(val => {
          return val.isCollected
        })
        this.setState({
          dataBTC: BTCCollected
        })
        break
      case '2':
        let USDTCollected = dataUSDT.filter(val => {
          return val.isCollected
        })
        this.setState({
          dataUSDT: USDTCollected
        })
        break
      case '3':
        let ETHCollected = dataETH.filter(val => {
          return val.isCollected
        })
        this.setState({
          dataETH: ETHCollected
        })
        break
      case '4':
        let BCTCollected = dataBCT.filter(val => {
          return val.isCollected
        })
        this.setState({
          dataBCT: BCTCollected
        })
        break
    }
  }
  // 搜索币种
  search = () => {
    this.setState({
      selfCheckValue: false
    })
    let arr, name, loadName
    switch(this.state.activeKey) {
      case '1':
        arr = dataBTC
        name = 'dataBTC'
        loadName = 'BTCLoading'
        break
      case '2':
        arr = dataUSDT
        name = 'dataUSDT',
        loadName = 'USDTLoading'
        break
      case '3':
        arr = dataETH
        name = 'dataETH'
        loadName = 'ETHLoading'
        break
      case '4':
        arr = dataBTC
        name = 'dataBCT'
        loadName = 'BCTLoading'
        break
    }
    if (this.state.searchText !== '') {
      // 过滤不匹配的元素
      let data = arr.filter(val => {
        return val.exchangePairs.toLowerCase().includes(this.state.searchText.toLowerCase())
      })
      this.setState({
        [name]: data
        // [loadName]: false
      })
    } else {
      this.setState({
        [name]: arr
        // [loadName]: false
      })
    }  
  }
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    }, () => {
      this.search()
    })
  }
  // 点击收藏按钮收藏
  rowClick = (record, rowkey) => {
    return {
      onClick: e => {
        const trade = this.props.trade
        if (e.target.className === 'collectStar') {
          record.isCollected = !record.isCollected
        } else {
          trade.currencyTrading.coinsType = record.exchangePairs
          switch(this.state.activeKey) {
            case '1':
              trade.currencyTrading.coinsTypeTitle = 'BTC'
              break
            case '2':
              trade.currencyTrading.coinsTypeTitle = 'USDT'
              break
            case '3':
              trade.currencyTrading.coinsTypeTitle = 'ETH'
              break
            case '4':
              trade.currencyTrading.coinsTypeTitle = 'BCT'
              break
          }
          trade.newDeal.newDealLoading = true
          trade.sendReq(5, 'deals.subscribe', [trade.currentCoinsType])
        }
      }
    }
  }
  // 自选 -- 显示已收藏
  selfCheckedData = e => {
    let checked = e.target.checked
    this.setState({
      searchText: '',
      selfCheckValue: checked
    })
    const { activeKey } = this.state
    if (checked) {
      this.displayBySelfCheckAndKey(activeKey)
    } else {
      this.setState({
        dataUSDT: dataUSDT,
        dataBTC: dataBTC,
        dataETH: dataETH,
        dataBCT: dataBCT
      })
    }
  }
  render() {
    const trade = this.props.trade
    // isUpdate为mobx中用来强制更新该页面
    let isUpdate = trade.market.isUpdate
    const loadingStyle = {
      spinning: trade.market.BTCLoading,
      tip: 'Loading...',
      indicator: <Icon type="loading" spin />
    }
    return (
      <div className="exchange-market">
        <header>
          <p>交易市场</p>
          <Input
            placeholder="搜索币种"
            prefix={ <Icon onClick={ this.search } type="search" style={{ color: '#9a9a9a', cursor: 'pointer' }} /> }
            className="coins-search"
            value={ this.state.searchText }
            // onPressEnter={ this.search }
            onChange={ this.handleChange }
          />
        </header>
        <main>
          <Tabs defaultActiveKey={ this.state.activeKey } onChange={ this.activeKeyChange } tabBarExtraContent={ <Checkbox checked={ this.state.selfCheckValue } onChange={ this.selfCheckedData } className="self-check">自选</Checkbox> }>
            <TabPane tab="BTC" key="1">
              <Table columns={ columnsBTC } dataSource={ this.state.dataBTC } scroll={{ y: 545 }} pagination={ false } onRow={ this.rowClick } loading={ loadingStyle } />
            </TabPane>
            <TabPane tab="USDT" key="2">
              <Table columns={ columnsUSDT } dataSource={ this.state.dataUSDT } scroll={{ y: 545 }} pagination={ false } onRow={ this.rowClick } />
            </TabPane>
            <TabPane tab="ETH" key="3">
              <Table columns={ columnsETH } dataSource={ this.state.dataETH } scroll={{ y: 545 }} pagination={ false } onRow={ this.rowClick } />
            </TabPane>
            <TabPane tab="BCT" key="4">
              <Table columns={ columnsBCT } dataSource={ this.state.dataBCT } scroll={{ y: 545 }} pagination={ false } onRow={ this.rowClick } />
            </TabPane>
          </Tabs>
        </main>
      </div>
    )
  }
}

export default Market