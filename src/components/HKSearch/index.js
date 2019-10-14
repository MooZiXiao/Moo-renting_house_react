import React, { Component, Fragment } from 'react'

import indexCss from './index.module.scss'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div className={indexCss.hkSearchWrap}>
                   <div className={indexCss.hkSearchLeft}>
                        <div className={indexCss.selectCity}>
                            <div className={indexCss.cityName}>
                                上海
                            </div>
                            <i className="iconfont icon-arrow"></i>
                        </div>
                        <div className={indexCss.searchInputWrap}>
                            <i className={'iconfont icon-seach ' + indexCss['icon-seach']}></i>
                            <div className={indexCss.searchInput}>
                                请输入小区或地址
                            </div>
                        </div>
                   </div>
                   <div className={indexCss.hkSearchRight}>
                        <i className={'iconfont icon-map ' + indexCss['icon-map']}></i>
                   </div>
                </div> 
            </Fragment>
        )
    }
}
