import React, { Component } from 'react'
import './index.less'
import { Layout, Input, Icon, Tabs, Table, Select, Steps, Button, Checkbox, message } from 'antd'
import { columnsUSDT, dataUSDT, columnsBTC, dataBTC, columnsETH, dataETH, columnsBCT, dataBCT } from '../components/coinsList'
import { exchangeColumns, exchangeData } from '../components/currentExchangeList'
import { historyEntrustColumns, historyEntrustData } from '../components/historyEntrustList'
import { entrustMessageColumns1, entrustMessageData1, entrustMessageColumns2, entrustMessageData2 } from '../components/entrustMessageList'
import star2 from '../images/star2.png'

import Market from '../components/Market'
import CoinsTypeData from '../components/CoinsTypeData'
import Kline from '../components/Kline'
import EntrustInformation from '../components/EntrustInformation'
import Transaction from '../components/Transaction'
import TypeHeader from '../components/TypeHeader'
import CurrentEntrust from '../components/CurrentEntrust'
import HistoryEntrust from '../components/HistoryEntrust'
import NewDeal from '../components/NewDeal'

const { Header, Footer, Sider, Content } = Layout

let ws = null

class Trade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      activeKey: '1',
      dataUSDT: dataUSDT,
      dataBTC: dataBTC,
      dataETH: dataETH,
      dataBCT: dataBCT,
      USDTLoading: false,
      BTCLoading: true,
      ETHLoading: false,
      BCTLoading: false,
      exchangeData: exchangeData, // 最近交易
      currentExchangeLoading: true
    }
  }
  componentDidMount() {
    this.WebSocketInit()
  }
  WebSocketInit = () => {
    let _this = this
    if ("WebSocket" in window) {
    // 您的浏览器支持websocket
      if (ws === null) {
        ws = new WebSocket('wss://socket.coinex.com/')
      }
      ws.onopen = function() {
        message.success('websocket已连接')
        let data1 = {
          id: 1,
          method: 'server.ping',
          params: []
        }
        let data2 = {
          id: 2,
          method: 'state.subscribe',
          params: []
        }
        let data3 = {
          id: 3,
          method: 'state.subscribe',
          params: ['BTCUSDT', 20, '1']
        }
        // 最近成交记录 -- 模板
        let data4 = {
          id: 4,
          method: 'deals.query',
          params: ['BTCUSDT', 34, 0]
        }
        // 最新成交
        let data5 = {                                                                          
          id: 5,
          method: 'deals.subscribe',
          params: ['BTCUSDT']
        }
        let data6 = {                                                                          
          id: 6,
          method: 'kline.query',
          params: ['BTCUSDT', 1559268744, 1560564804, 900]
        }
        let data7 = {                                                                          
          id: 7,
          method: 'kline.subscribe',
          params: ['BTCUSDT', 900]
        }
        ws.send(JSON.stringify(data1))
        ws.send(JSON.stringify(data2))
        ws.send(JSON.stringify(data5))
      }
      ws.onmessage = function(res) {
        _this.updateMarket(res)
      }
      ws.onclose = function(res) {
        message.warn('websocket连接关闭')
      }
    } else {
      message.error('您的浏览器不支持websocket')
    }
  }
  loadNewDeal = () => {
    this.setState({
      currentExchangeLoading: true
    })
  }
  // 接收websocket数据设置币币交易 -- 交易市场数据展示
  updateMarket = res => {
    let data = JSON.parse(res.data)
    // 交易市场 -- data2
    if (data.method === 'state.update') {
      let params = data.params[0]
      // 循环获取的数据更新本地数据
      dataBTC.forEach((val, i) => {
        let keyArr = Object.keys(params)
        let name = val.exchangePairs + 'BTC'
        if (keyArr.includes(name)) {
          let obj = params[name]
          val.newPrice = obj.last
        }
      })
      this.setState({
        BTCLoading: false,
        dataBTC
      })
    }
    // 最近成交 -- data5
    if (data.method === 'deals.update') {
      if (data.params[1].length > 50) {
        let arr = []
        data.params[1].forEach((val, i) => {
          arr[i] = {
            key: `${val.id}`,
            time: val.time,
            price: val.price,
            amount: val.amount,
            type: val.type
          }
        })
        this.setState({
          currentExchangeLoading: false,
          exchangeData: arr
        })
      } else {
        let arr = []
        data.params[1].forEach((val, i) => {
          arr[i] = {
            key: `${val.id}`,
            time: val.time,
            price: val.price,
            amount: val.amount,
            type: val.type
          }
        })
        this.setState({
          exchangeData: arr.concat(this.state.exchangeData)
        })
      }
    }
  }
  // 精度小数点
  accuracyChange = val => {
    // console.log(val)
  }
  render() {
    return (
      <div className="trade">
        <Layout className="trade-layout">
          {/* 左边交易市场栏 */}
          <Sider width="20.4545%" className="trade-sider" theme="light">
            {/* 交易市场 */}
            <Market BTCLoading={ this.state.BTCLoading } loadNewDeal={ this.loadNewDeal } ws={ ws } />
            <div className="line" style={{ height: 12, backgroundColor: '#eef1f7' }}></div>
            {/* 最新成交 */}
            <NewDeal currentExchangeLoading={ this.state.currentExchangeLoading } exchangeData={ this.state.exchangeData } />
          </Sider>
          {/* 右边内容 */}
          <Layout className="trade-right-layout">
            {/* 右侧头部 -- 币种数据展示 */}
            <TypeHeader />
            <Content className="trade-right-layout-content">
              <Layout className="trade-right-layout-content-layout">
                <Content className="trade-right-layout-content-layout-content">
                  {/* k线 */}
                  <Kline></Kline>
                  {/* 限价交易 */}
                  <Transaction />
                </Content>
                <Sider width="28.0979%" className="trade-right-layout-content-layout-sider" theme="light">
                  {/* 委托信息 */}
                  <EntrustInformation />
                </Sider>
                {/* Sider-width-390px */}
              </Layout>
            </Content>
            <Footer className="right-footer">
              {/* 当前委托 */}
              <CurrentEntrust />
              {/* 历史委托 */}
              <HistoryEntrust />
              {/* 币种资料 */}
              <CoinsTypeData />
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Trade