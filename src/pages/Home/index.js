import React, { Component, Fragment } from 'react'

// 引入 scss
import indexCss from './index.module.scss'

import { Carousel } from 'antd-mobile';

import axios from '../../utils/request';

import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'

export default class Home extends Component {
    state = {
        // 轮播图数据
        swiperData: [],
        // 组件轮播图高
        imgHeight: 176,
        // 导航数据
        navData: [
            {
                id: 0,
                text: '整租',
                imgSrc: nav1
            },
            {
                id: 1,
                text: '合租',
                imgSrc: nav2
            },
            {
                id: 2,
                text: '地图找房',
                imgSrc: nav3
            },
            {
                id: 3,
                text: '去出租',
                imgSrc: nav4
            }
        ]
    }
    componentDidMount() {
        axios.get('/home/swiper')
        .then(res => {
            // console.log(res)
            this.setState({
                swiperData: res.data.body
            });
        })
    }
    render() {
        return (
            <Fragment>
                {/* 轮播图 */}
                {this.state.swiperData.length > 0 && <Carousel
                autoplay
                infinite
                >
                {this.state.swiperData.map(val => (
                    <a
                    key={val.id}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={process.env.REACT_APP_API_URL + val.imgSrc}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>}
                {/* 轮播图结束 */}
                {/* 导航开始 */}
                <div className={indexCss.navWrap}>
                    {
                        this.state.navData.map(v => <div className={indexCss.navItem} key={v.id}>
                            <img src={v.imgSrc} alt="" />
                            <div>{v.text}</div>
                        </div>)
                    }
                </div>
                {/* 导航结束 */}
            </Fragment>
        )
    }
}
