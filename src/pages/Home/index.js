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
        ],
        // 租房小组数据
        groupsData: [],
        // 最新资讯数据
        newsData: []
    }
    componentDidMount() {
        axios.get('/home/swiper')
        .then(res => {
            // console.log(res)
            this.setState({
                swiperData: res.data.body
            });
        })

        // 租房小组
        axios.get('/home/groups?area=AREA%7C88cff55c-aaa4-e2e0')
        .then(res => {
            // console.log(res)
            this.setState({
                groupsData: res.data.body
            });
        })

        // 最新资讯
        axios.get('/home/news?area=AREA%7C88cff55c-aaa4-e2e0')
        .then(res => {
            console.log(res)
            this.setState({
                newsData: res.data.body
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
                {/* 租房小组数据开始 */}
                <div className={indexCss.groupsWrap}>
                    <div className={indexCss.groupsTitle}>
                        <span className={indexCss.titleName}>租房小组</span>
                        <span className={indexCss.more}>更多</span>
                    </div>
                    {
                        this.state.groupsData.map(v => 
                            <div className={indexCss.groupsItem} key={v.id}>
                                <div className={indexCss.groupsInfo}>
                                    <div className={indexCss.infoName1}>{v.title}</div>
                                    <div className={indexCss.infoName2}>{v.desc}</div>
                                </div>
                                <div className={indexCss.groupsImg}>
                                    <img src={process.env.REACT_APP_API_URL + v.imgSrc} alt="" />
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* 租房小组数据结束 */}
                {/* 最新资讯开始 */}
                <div className={indexCss.newsWrap}>
                    <div className={indexCss.newsTitle}>最新资讯</div>
                    {
                        this.state.newsData.map(v => 
                            <div className={indexCss.newsItem} key={v.id}>
                                <div className={indexCss.newsImg}>
                                    <img src={process.env.REACT_APP_API_URL + v.imgSrc} alt="" />
                                </div>
                                <div className={indexCss.newsInfo}>
                                    <div className={indexCss.infoTitle}>{v.title}</div>
                                    <div className={indexCss.infoOthers}>
                                        <span className={indexCss.infoAuthor}>{v.from}</span>
                                        <span className={indexCss.infoDate}>{v.date}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/* 最新资讯结束 */}
                {/* 到底提示 */}
                <div className={indexCss.fotTip}>------ 我是底线 ------</div>
            </Fragment>
        )
    }
}
