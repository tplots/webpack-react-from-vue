import React from 'react';

class Nav extends React.Component {
	render() {
		return (
			<nav>
				<div className="nav">
					<div className="overlay"></div>
					<div className="avatar">
						<a href="/"><img src="./../../images/logo.png" /></a>
					</div>
					<h2 className="title">PLOTS</h2>
					<p className="subtitle">漫漫人生路，总会错几步。</p>
					<ul className="menu clearfix">
						<li><a href="/">文章</a></li>
						<li><a href="/">文章</a></li>
						<li><a href="/">文章</a></li>
					</ul>
					<div className="weibo">
						<iframe width="100%" height="400" className="share_self"  frameBorder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=400&fansRow=2&ptype=1&speed=0&skin=1&isTitle=0&noborder=1&isWeibo=1&isFans=0&uid=2964465453&verifier=e9b058c2&dpc=1"></iframe>
					</div>
				</div>

			</nav>
		)
	}
}

//导出组件
export default Nav;