import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('counterStore')
@observer
class Index extends Component {

  constructor() {
    super()
    this.state = {
      arr: [1, 2, 3, 4],
      current: 0
    }
  }

  config = {
    navigationBarTitleText: '爱家居,给你家的感觉'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleClick = (value) => {
    this.setState({
      current: value
    })
  }
  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render() {
    return (
      <View className='wrap'>
        <Swiper
          className='swiper'
          indicatorColor='#666'
          indicatorActiveColor='#fff'
          vertical={false}
          circular
          indicatorDots
          autoplay={true}
        >
          {this.state.arr.map(item => <SwiperItem className='swiperItem' key={item} >
            <Image className='image' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548081867666&di=edd068e12d5f7bd030a7ff9dc27f9f86&imgtype=0&src=http%3A%2F%2Fwww.luaninfo.com%2FNews%2Flanews%2F2017%2F04%2F35%2Fuploads%2Fimage%2Fcustomer%2F58828%2F%25E4%25B8%25AD%25E6%25BA%2590%25E7%25A6%258F%25E9%2597%25A8%25E7%25AA%2597%25E5%259B%25BE%25E7%2589%2587%2F0c4a2611baa7.jpg'></Image>
          </SwiperItem>)}
        </Swiper>
        <View className='tab'>
          <AtTabBar
            fontSize='10'
            iconSize='26'
            selectedColor='#ce4300'
            tabList={[
              { title: '世界设计', iconType: 'clock', },
              { title: '欧标制造', iconType: 'camera' },
              { title: '免费送装', iconType: 'folder', },
              { title: '7日退换', iconType: 'folder', }
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </View>
        <View className='newdispatch'>
          <Text className='title'>新品发布</Text>
        </View>
      </View>


    )
  }
}

export default Index 
