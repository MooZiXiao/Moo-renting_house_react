import React, { Component, Fragment } from 'react'

import { Carousel } from 'antd-mobile';

import axios from '../../utils/request';

export default class Home extends Component {
    state = {
        swiperData: [],
        imgHeight: 176,
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
            </Fragment>
        )
    }
}
