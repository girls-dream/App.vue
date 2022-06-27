
import './banner.js'
import './tab.js'
// import $ from 'jquery';
// $('#swiper').css('background-color', 'red')
import './styles/index.css'
import './styles/index.less'

// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// 引入字体图标文件
import './assets/fonts/iconfont.css'

class App {
  static a = 123
}

console.log(App.a)

