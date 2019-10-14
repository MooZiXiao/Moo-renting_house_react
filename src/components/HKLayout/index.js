import React from 'react';
import { TabBar } from 'antd-mobile';

import { withRouter } from 'react-router-dom'

class HKLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab'
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={this.props.location.pathname === '/'}
            onPress={() => this.props.history.push('/')}
          >
            { this.props.location.pathname === '/' && this.props.children }
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="Koubei"
            selected={this.props.location.pathname === '/List'}
            onPress={() => this.props.history.push('/List')}
          >
            { this.props.location.pathname === '/List' && this.props.children }
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="Friend"
            dot
            selected={this.props.location.pathname === '/News'}
            onPress={() => this.props.history.push('/News')}
          >
            { this.props.location.pathname === '/News' && this.props.children }
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={this.props.location.pathname === '/My'}
            onPress={() => this.props.history.push('/My')}
          >
            { this.props.location.pathname === '/My' && this.props.children }
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(HKLayout)