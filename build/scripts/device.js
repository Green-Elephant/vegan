/**
 * Created by GreenElephaantt on 29.06.2017.
 */


  var device={},
    find,
    userAgent;

find = (needle) =>{return userAgent.indexOf(needle) !== -1}
  // The client user agent string.
  // Lowercase, so we can use the more efficient indexOf(), instead of Regex
  userAgent = window.navigator.userAgent.toLowerCase();

  // Main functions
  // --------------

  device.ios = function () {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function () {
    return !device.windows() && find('iphone');
  };

  device.ipod = function () {
    return find('ipod');
  };

  device.ipad = function () {
    return find('ipad');
  };

  device.android = function () {
    return !device.windows() && find('android');
  };

  device.androidPhone = function () {
    return device.android() && find('mobile');
  };

  device.androidTablet = function () {
    return device.android() && !find('mobile');
  };

  device.blackberry = function () {
    return find('blackberry') || find('bb10') || find('rim');
  };

  device.blackberryPhone = function () {
    return device.blackberry() && !find('tablet');
  };

  device.blackberryTablet = function () {
    return device.blackberry() && find('tablet');
  };

  device.windows = function () {
    return find('windows');
  };

  device.windowsPhone = function () {
    return device.windows() && find('phone');
  };

  device.windowsTablet = function () {
    return device.windows() && (find('touch') && !device.windowsPhone());
  };

  device.fxos = function () {
    return (find('(mobile;') || find('(tablet;')) && find('; rv:');
  };

  device.fxosPhone = function () {
    return device.fxos() && find('mobile');
  };

  device.fxosTablet = function () {
    return device.fxos() && find('tablet');
  };

  device.meego = function () {
    return find('meego');
  };

  device.mobile = function () {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function () {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.desktop = function () {
    return !device.tablet() && !device.mobile();
  };

  //add ads on page
  if(device.desktop()){//<a href="https://goo.gl/Sg4Dv4"><img src="images/donate-button.jpg" style="width: 100%"></a>
    //where i need to put ads 4 desktop?
  }else{
    //where i need to put ads 4 mobile?


    //add donate button at the end of the page
    let donate=document.getElementById('side-ads'), donatePhone=donate.cloneNode(true);
    donate.parentNode.removeChild(donate);
    donatePhone.style.display='block';
    donatePhone.style.alignContent='center';
    donatePhone.id='donatePhone';
    donatePhone.classList.remove('hidden-xs','side-ads');
    donatePhone.getElementsByClassName('ui segment ads')[0].style.display='block';
    donatePhone.getElementsByClassName('ui segment ads')[0].style.marginBottom='10px';
    /*donatePhone.getElementsByClassName('ui segment ads')[0].style.width='178px';
    donatePhone.getElementsByClassName('ui segment ads')[0].style.height='328px';
    donatePhone.getElementsByTagName('img')[0].style.width='150px';//width:150px;height:300px
    donatePhone.getElementsByTagName('img')[0].style.height='300px';//width:150px;height:*/
    window['main-container'].insertBefore(donatePhone,window['main-container'].children[2])
  }
