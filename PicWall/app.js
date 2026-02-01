const config = {
  layers: 5,
  imgsPerLayer: 40,
  autoRotateSpeed: 0.1,
  minScale: 0.6,
  maxScale: 2.0,
  baseRingRadius: 210,
  dragSensitivity: 0.3,
  fixedImgGap: 2,
  baseImgHeight: 78,
  baseLayerOffsets: {
    layer1: -200,
    layer2: -100,
    layer3: 0,
    layer4: 100,
    layer5: 200
  },
  bigImgMinZoom: 1.0,
  bigImgMaxZoom: 3.0,
  bigImgZoomStep: 0.1
};

// 使用多种来源的图片资源，提高加载成功率
const imagePaths = [
"https://i0.hdslb.com/bfs/openplatform/034845a597ed4c48f981a875f3563f07437be801.jpg",
"https://i0.hdslb.com/bfs/openplatform/2d0890cbc4be13c9cddaff678cdc5c59a802d0b5.jpg",
"https://i0.hdslb.com/bfs/openplatform/cf5381c2572dfae734c27b74b29c35ab43dd15c6.jpg",
"https://i0.hdslb.com/bfs/openplatform/c007da82faaf14fb7722f9d353dff5577e537015.jpg",
"https://i0.hdslb.com/bfs/openplatform/ef8d38d4b93345619818295a29fc5276844dc225.jpg",
"https://i0.hdslb.com/bfs/openplatform/c8e2f7b4ece6aaa8bc5d00ad516dda647904ff0f.jpg",
"https://i0.hdslb.com/bfs/openplatform/61d852a39091d5a8f2cd2467be1c2149bda6c323.jpg",
"https://i0.hdslb.com/bfs/openplatform/f1d189f6bc80b6626435bc36a6becb9d87304a5d.jpg",
"https://i0.hdslb.com/bfs/openplatform/c0ca09077eb8666e9a70366404635c1413817361.jpg",
"https://i0.hdslb.com/bfs/openplatform/992b84ff5171abf5790f533fda70f1fe6b1483c1.jpg",
"https://i0.hdslb.com/bfs/openplatform/287e269909e04301f6bc1eed7cdc9245413158d2.jpg",
"https://i0.hdslb.com/bfs/openplatform/0f3c477e6dbed8e6bbc4953522faa7e879909528.jpg",
"https://i0.hdslb.com/bfs/openplatform/b8068b86440e1ba1f5bd3a9df4dda447e1a694c6.jpg",
"https://i0.hdslb.com/bfs/openplatform/ecd774dbc1b895d1ddf352809f6178fd1717777c.jpg",
"https://i0.hdslb.com/bfs/openplatform/694eda751ecc60ab2c5490e0ce563eb45970fe41.jpg",
"https://i0.hdslb.com/bfs/openplatform/f1e032ab9ee2e17205b6c76a61d59056b551c6e2.jpg",
"https://i0.hdslb.com/bfs/openplatform/61c7466e568f2167dd55ae5425f293f156c43176.jpg",
"https://i0.hdslb.com/bfs/openplatform/eecfd382df7321e0793dc2718f4722179c709c93.jpg",
"https://i0.hdslb.com/bfs/openplatform/3256a9a8754fa49f8bf08d2b294115797b3eae69.jpg",
"https://i0.hdslb.com/bfs/openplatform/956890a70b0b35ffdc97ed17592c6db08b8f7f68.jpg",
"https://i0.hdslb.com/bfs/openplatform/0d61807a238aa80a0d4d6fcfffe6d70fa56e0817.jpg",
"https://i0.hdslb.com/bfs/openplatform/537cd76075610543561077a121809b790619b232.jpg",
"https://i0.hdslb.com/bfs/openplatform/95c8da4881e3b576826bd40023adf1aa707ca73d.jpg",
"https://i0.hdslb.com/bfs/openplatform/5bd33b97a78948062189d6fb8b3e8d9e2b840776.jpg",
"https://i0.hdslb.com/bfs/openplatform/f16171d47e14e15e27ee63ceac443ea34754a483.jpg",
"https://i0.hdslb.com/bfs/openplatform/4e5e111c172d1aa6d5ce5d07d2f53258f35d3c9b.jpg",
"https://i0.hdslb.com/bfs/openplatform/bcb087464667409dad87d6f733596aa855c70d73.jpg",
"https://i0.hdslb.com/bfs/openplatform/dbfa7acd604918407fcf22834260bbe10441c8da.jpg",
"https://i0.hdslb.com/bfs/openplatform/9819567a7ba4d9462b7d71c5340a63dae64129c8.jpg",
"https://i0.hdslb.com/bfs/openplatform/cf5381c2572dfae734c27b74b29c35ab43dd15c6.jpg",
"https://i0.hdslb.com/bfs/openplatform/5c864440c5de588ab7c013c480ea29e0ade82ffa.jpg",
"https://i0.hdslb.com/bfs/openplatform/38c0135bcc9859c8d0f1415f1be2e64f10948fba.jpg",
"https://i0.hdslb.com/bfs/openplatform/5e472542f1b68d80de44117b2401472b07fc67dc.jpg",
"https://i0.hdslb.com/bfs/openplatform/598c0e471135e7fd954b3ec435f94b94ea429665.jpg",
"https://i0.hdslb.com/bfs/openplatform/245904a71278d4eb34e7e1c7fa3c2b4ae7f28088.jpg",
"https://i0.hdslb.com/bfs/openplatform/45018f92b298e1dae299169ff36952dd28c6a835.jpg",
"https://i0.hdslb.com/bfs/openplatform/6d86e9163e14023387c752abb2a3b80cfc9912ae.jpg",
"https://i0.hdslb.com/bfs/openplatform/efedb66115368e486e0976b3973def187308494b.jpg",
"https://i0.hdslb.com/bfs/openplatform/c06774d14125719859b5dfa323ba0d449694e04a.jpg",
"https://i0.hdslb.com/bfs/openplatform/138888e8379deca4afafdb6898dbd047736a9999.jpg",
"https://i0.hdslb.com/bfs/openplatform/6dce2d18d5583c0fcca193e60f449a7c07052faf.jpg",
"https://i0.hdslb.com/bfs/openplatform/d773fa0e7875843f3c528104445405d1e05c8177.jpg",
"https://i0.hdslb.com/bfs/openplatform/90d2ec6fa85d6909970f5219de7fa25316c1f663.jpg",
"https://i0.hdslb.com/bfs/openplatform/0ebd48346d52f71533453c875d0f647d49219cd0.png",
"https://i0.hdslb.com/bfs/openplatform/10eabaac13e5aaf44056290a229527e988d5bbb6.jpg",
"https://i0.hdslb.com/bfs/openplatform/d39d9d915b28c1850152aa5b56b14a87b7eb8ce9.jpg",
"https://i0.hdslb.com/bfs/openplatform/a37e27da561aee18114dc905e519aad754ac50b0.jpg",
"https://i0.hdslb.com/bfs/openplatform/d93a6bbd7283049d6d4b1a9d8020f98fbebbed98.jpg",
"https://i0.hdslb.com/bfs/openplatform/f1d189f6bc80b6626435bc36a6becb9d87304a5d.jpg",
"https://i0.hdslb.com/bfs/openplatform/7f0be72e2e209519a005f1acbc280070a044a7eb.jpg",
"https://i0.hdslb.com/bfs/openplatform/d8b2614668d704e266c4aceea6aa88e9187fdb29.jpg",
"https://i0.hdslb.com/bfs/openplatform/f16171d47e14e15e27ee63ceac443ea34754a483.jpg",
"https://i0.hdslb.com/bfs/openplatform/30558754bd6325ae4302bbb882f8a8adc9353f9c.jpg",
"https://i0.hdslb.com/bfs/openplatform/e14ccd278617243bfa5ee84c1e351bf5cdf50e2a.jpg",
"https://i0.hdslb.com/bfs/openplatform/c12b213dd0dbb3c14a4caa6f21f591c57478a5c6.jpg",
"https://i0.hdslb.com/bfs/openplatform/e1a47ac1305e48a57bf7ab1cd4455b8d06e28131.jpg",
"https://i0.hdslb.com/bfs/openplatform/ed5730f768a6d63f3c2db744f206e046f658471b.jpg",
"https://i0.hdslb.com/bfs/openplatform/e7e45ba11cf85b20e2352d9fed927f636380ebb2.jpg",
"https://i0.hdslb.com/bfs/openplatform/c1f72bed5f2e586385225086e48c3f438949fb2a.jpg",
"https://i0.hdslb.com/bfs/openplatform/3db6e31a9d7c740d8f274bd9da1d1c944326c648.jpg",
"https://i0.hdslb.com/bfs/openplatform/0b29e31360f61042a347cee25b36d9f0edd3f882.jpg",
"https://i0.hdslb.com/bfs/openplatform/1226640651a3b5d9abc212e796d15b24ef5b49fa.jpg",
"https://i0.hdslb.com/bfs/openplatform/bef66c0def5756c55701e7fb6a3bff9a624b9a64.jpg",
"https://i0.hdslb.com/bfs/openplatform/ca3958b615923b711a5c05ce73105487620f4685.jpg",
"https://i0.hdslb.com/bfs/openplatform/74d638cdb0be00c385fc7b456cccfa49f52343e7.jpg",
"https://i0.hdslb.com/bfs/openplatform/d045c93d3a3be2c43b180e9b28aee796be7e3449.png",
"https://i0.hdslb.com/bfs/openplatform/f1d189f6bc80b6626435bc36a6becb9d87304a5d.jpg",
"https://i0.hdslb.com/bfs/openplatform/a73f226bfd34579e39c32b6ad2ac2e24df7cc6bb.jpg",
"https://i0.hdslb.com/bfs/openplatform/ea7062c517934c471bfd7a0643fe22397f09a214.jpg",
"https://i0.hdslb.com/bfs/openplatform/eb04a7a6e2d391db03a18777e05100f2eded3861.jpg",
"https://i0.hdslb.com/bfs/openplatform/6b3a106cb5ec3b895f1ef5b260b8a62afba93248.jpg",
"https://i0.hdslb.com/bfs/openplatform/9a364643e53e44f41d110598bdc9fa5396a8b782.jpg",
"https://i0.hdslb.com/bfs/openplatform/ed5730f768a6d63f3c2db744f206e046f658471b.jpg",
"https://i0.hdslb.com/bfs/openplatform/d045c93d3a3be2c43b180e9b28aee796be7e3449.png",
"https://i0.hdslb.com/bfs/openplatform/e501597124475df47400cb654ee3f72f2c988b55.jpg",
"https://i0.hdslb.com/bfs/openplatform/82ad27cd2e6a607b553db0d2d160c87944f888cb.jpg",
"https://i0.hdslb.com/bfs/openplatform/2b4d8547e5f7ce6283473e866bd7c545e8d39eef.jpg",
"https://i0.hdslb.com/bfs/openplatform/0ebd48346d52f71533453c875d0f647d49219cd0.png",
"https://i0.hdslb.com/bfs/openplatform/f9ff1b4901176adda98058bbdbf272fc4b443756.jpg",
"https://i0.hdslb.com/bfs/openplatform/a18908fdc121f0f7716f05d85d3823f11072b254.jpg",
"https://i0.hdslb.com/bfs/openplatform/2fc3f4f43e5a0139442d97292fc328de5c1c6bcf.jpg",
"https://i0.hdslb.com/bfs/openplatform/3fc59b7bc136cde22b2633e26b36f12dc2b387c8.jpg",
"https://i0.hdslb.com/bfs/openplatform/0bd6c6278ad99381df71c703bf4c17f1fd9397fd.jpg",
"https://i0.hdslb.com/bfs/openplatform/0be2efab98c30e946a7317657033877efa48e07a.jpg",
"https://i0.hdslb.com/bfs/openplatform/f159138a1e270e21ef7428173c0525d7952cff8f.jpg",
"https://i0.hdslb.com/bfs/openplatform/088445d09aa180dfa71f96ba466aa5adea0f54e3.jpg",
"https://i0.hdslb.com/bfs/openplatform/c0ca09077eb8666e9a70366404635c1413817361.jpg",
"https://i0.hdslb.com/bfs/openplatform/33d14d8bd20a88b2d9fa6512f310be8688f43d91.jpg",
"https://i0.hdslb.com/bfs/openplatform/55e378b193a0fa2749b824cf197524825a133edb.jpg",
"https://i0.hdslb.com/bfs/openplatform/2600427fe65c90bb22d32f44a37a3cc3637d3bfe.jpg",
"https://i0.hdslb.com/bfs/openplatform/508766366810ce2bc12d662866b8227a63c96623.png",
"https://i0.hdslb.com/bfs/openplatform/ca3958b615923b711a5c05ce73105487620f4685.jpg",
"https://i0.hdslb.com/bfs/openplatform/8a5a7473225e3a3310fa118f9d36e72e83883fdf.jpg",
"https://i0.hdslb.com/bfs/openplatform/55e378b193a0fa2749b824cf197524825a133edb.jpg",
"https://i0.hdslb.com/bfs/openplatform/7a85815b2f8794914e081cb0b858390cde02b42d.jpg",
"https://i0.hdslb.com/bfs/openplatform/8ae193f5525d7ee1d9cb6396c80215f53bec5393.png",
"https://i0.hdslb.com/bfs/openplatform/867024a587bba7fd25c3d2a38aa01a3fccb9435f.jpg",
"https://i0.hdslb.com/bfs/openplatform/a6864ba43f54db39b2fb598c4605def94697d029.jpg",
"https://i0.hdslb.com/bfs/openplatform/f3352a05030b6541093c8915d8ddfc4b392e87f1.jpg",
"https://i0.hdslb.com/bfs/openplatform/6fd8df12c3383d980055d0360d44b78b74be9e7b.jpg",
"https://i0.hdslb.com/bfs/openplatform/467b8fe780bb26a4585c778da80751f3811610ca.jpg",
"https://i0.hdslb.com/bfs/openplatform/dd7034712470bd7242ff9ab48fbecb24e95fc6aa.jpg",
"https://i0.hdslb.com/bfs/openplatform/a18908fdc121f0f7716f05d85d3823f11072b254.jpg",
"https://i0.hdslb.com/bfs/openplatform/c90eec1e9301fe7ee80331b01cfcc3e8ceda32a4.jpg",
"https://i0.hdslb.com/bfs/openplatform/c773d73b1b2aef169223c0d3cfa9e7b7e4289b08.jpg",
"https://i0.hdslb.com/bfs/openplatform/6fd8df12c3383d980055d0360d44b78b74be9e7b.jpg",
"https://i0.hdslb.com/bfs/openplatform/20282720ea6d0eb315aa21371bac5e384a144619.jpg",
"https://i0.hdslb.com/bfs/openplatform/66ea51a14a9e3ef28cdcdd02418743cb3b6411ae.jpg",
"https://i0.hdslb.com/bfs/openplatform/ff0ab35f8dfb5ec81a715c40bdf4f9e72680b4d1.jpg",
"https://i0.hdslb.com/bfs/openplatform/8a62a29a46723eed73683699faef6d2b594ced40.jpg",
"https://i0.hdslb.com/bfs/openplatform/2443405f4fb3e213766fa8cb188ec5b6ff76d7bb.jpg",
"https://i0.hdslb.com/bfs/openplatform/7af0e5bbd497b518095766cd5236db901bb1acc8.jpg",
"https://i0.hdslb.com/bfs/openplatform/85864ef319e7f3518c07925b9fc14d84e9d572cc.jpg",
"https://i0.hdslb.com/bfs/openplatform/e7649c582216dd4064554a9a75f2ed8b830bdb47.jpg",
"https://i0.hdslb.com/bfs/openplatform/0b29e31360f61042a347cee25b36d9f0edd3f882.jpg",
"https://i0.hdslb.com/bfs/openplatform/adfb372c684c4ae9de14b76387ee6ec5f8ec0de0.jpg",
"https://i0.hdslb.com/bfs/openplatform/ad0bcf94a1bb81ae0afb630007a320af5c55321c.jpg",
"https://i0.hdslb.com/bfs/openplatform/0dbb5af99b6b3037acc2d2d99a78504a44a51e57.jpg",
"https://i0.hdslb.com/bfs/openplatform/889b9579d03a1db614d5fec4b558298209a2b34c.jpg",
"https://i0.hdslb.com/bfs/openplatform/f9ff1b4901176adda98058bbdbf272fc4b443756.jpg",
"https://i0.hdslb.com/bfs/openplatform/37a8a18403ab74cd70e184024f3551149bd04e3f.jpg",
"https://i0.hdslb.com/bfs/openplatform/8586a6ab333ef858a3d76d7c7074c3b1b185b50f.jpg",
"https://i0.hdslb.com/bfs/openplatform/c5d18bb8236d3ba52e20d97aafb886209148db7b.jpg"
];

// 全局状态
let currentRotateX = 15;
let currentRotateY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;
let startRotateX = 0;
let startRotateY = 0;
let currentScale = 1;
let isRotating = true;
let isClickDrag = false;
let originalImagePaths = [...imagePaths]; // 保存原始图片路径，避免被修改

// 图片加载状态管理
let totalImages = 0;
let loadedImages = 0;
let loadingPromises = [];

// DOM元素
const cylinder = document.getElementById('cylinder');
const perspectiveWrapper = document.getElementById('perspectiveWrapper');
const layers = {
  layer1: document.getElementById('layer1'),
  layer2: document.getElementById('layer2'),
  layer3: document.getElementById('layer3'),
  layer4: document.getElementById('layer4'),
  layer5: document.getElementById('layer5')
};
const imgPopup = document.getElementById('imgPopup');
const bigImg = document.getElementById('bigImg');
const closeBtn = document.getElementById('closeBtn');
const loading = document.getElementById('loading');
const imgCount = document.getElementById('imgCount');
const scaleRange = document.getElementById('scaleRange');
const scaleValue = document.getElementById('scaleValue');
const scaleControl = document.getElementById('scaleControl');
// 取消移动端缩放按钮，直接注释创建逻辑
// const scaleToggleBtn = document.createElement('button');

// 设备检测
function detectMobileDevice() {
  try {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
           window.matchMedia && window.matchMedia('(pointer: coarse)').matches ||
           ('ontouchstart' in window) ||
           window.innerWidth <= 800;
  } catch (e) { 
    console.error('检测移动设备失败:', e);
    return false; 
  }
}
let isMobileDevice = detectMobileDevice();

// 全局错误捕获
window.addEventListener('error', (e) => {
  try {
    console.error('Global error captured:', e.message, e.filename + ':' + e.lineno + ':' + e.colno, e.error && e.error.stack);
  } catch (err) { 
    console.error('Error logging global error', err); 
  }
});
window.addEventListener('unhandledrejection', (e) => {
  try {
    console.error('Unhandled promise rejection:', e.reason && (e.reason.stack || e.reason));
  } catch (err) { 
    console.error('Error logging unhandledrejection', err); 
  }
});

/**
 * 移除移动端缩放按钮初始化（取消创建）
 */
// function initScaleToggleBtn() { 注释掉该函数
//   if (!isMobileDevice || !scaleControl) return;
//   scaleToggleBtn.id = 'scaleToggleBtn';
//   scaleToggleBtn.className = 'scale-toggle-btn';
//   scaleToggleBtn.textContent = '缩放';
//   scaleToggleBtn.setAttribute('aria-label', '显示/隐藏缩放控件');
//   document.body.appendChild(scaleToggleBtn);
//   scaleToggleBtn.addEventListener('click', () => {
//     scaleControl.classList.toggle('mobile-open');
//     scaleToggleBtn.textContent = scaleControl.classList.contains('mobile-open') ? '收起' : '缩放';
//   });
//   document.addEventListener('click', (e) => {
//     if (isMobileDevice && scaleControl.classList.contains('mobile-open') &&
//         !scaleControl.contains(e.target) && e.target !== scaleToggleBtn) {
//       scaleControl.classList.remove('mobile-open');
//       scaleToggleBtn.textContent = '缩放';
//     }
//   });
// }

/**
 * 初始化图片（修复移动端点击）
 */
// 更新加载进度
function updateLoadingProgress() {
  if (loading && totalImages > 0) {
    loading.textContent = `加载中... ${Math.round((loadedImages / totalImages) * 100)}% (${loadedImages}/${totalImages})`;
  }
}

// 隐藏加载指示器
function hideLoadingIndicator() {
  setTimeout(() => {
    if (loading) {
      loading.style.display = 'none';
    }
  }, 500); // 给一点时间让用户看到进度完成
}

function initImages() {
  console.log('=== 核心DOM元素检测 ===');
  console.log('perspectiveWrapper:', perspectiveWrapper);
  console.log('cylinder:', cylinder);
  console.log('layer1:', layers.layer1);
  console.log('layer2:', layers.layer2);
  console.log('layer3:', layers.layer3);
  console.log('layer4:', layers.layer4);
  console.log('layer5:', layers.layer5);
  console.log('imgPopup:', imgPopup);
  console.log('bigImg:', bigImg);
  console.log('closeBtn:', closeBtn);

  if (!cylinder || !perspectiveWrapper || Object.values(layers).some(l => !l)) {
    loading.textContent = 'DOM元素加载失败，请检查HTML结构';
    console.error('初始化图片失败：核心DOM元素缺失 →', {
      cylinder: !!cylinder,
      perspectiveWrapper: !!perspectiveWrapper,
      layers: Object.values(layers).map(l => !!l)
    });
    return;
  }

  if (imagePaths.length === 0) {
    loading.textContent = '请先在imagePaths数组里添加图片路径！';
    return;
  }

  // 重置计数器
  totalImages = 0;
  loadedImages = 0;
  
  Object.values(layers).forEach(layer => layer.innerHTML = '');

  const ringRadius = config.baseRingRadius * currentScale;
  const imgWidth = calcImgWidth(ringRadius);
  const imgHeight = config.baseImgHeight * currentScale;

  updateLayerOffsets();

  Object.keys(layers).forEach((layerKey, layerIdx) => {
    const layer = layers[layerKey];
    const angleStep = 360 / config.imgsPerLayer;

    for (let i = 0; i < config.imgsPerLayer; i++) {
      const img = document.createElement('img');
      img.className = 'cylinder-img';

      // 确保有足够的图片可用，循环使用
      const randomIdx = Math.floor(Math.random() * originalImagePaths.length);
      let imgUrl = originalImagePaths[randomIdx];
      img.alt = `pic/${randomIdx + 1}`;
      
      let retryCount = 0;
      const maxRetries = 3;
      
      // 图片加载函数，支持重试
      const loadImage = () => {
        // 设置超时处理
        img.timeoutId = setTimeout(() => {
          if (img.complete) return; // 如果图片已经加载完成则跳过
          
          retryCount++;
          
          if (retryCount <= maxRetries) {
            // 重试加载，使用不同的图片
            const newRandomIdx = Math.floor(Math.random() * originalImagePaths.length);
            imgUrl = originalImagePaths[newRandomIdx];
            loadImage();
          } else {
            // 多次重试失败后，显示占位图
            console.warn('图片加载超时，已重试', maxRetries, '次:', imgUrl);
            
            // 使用base64编码的占位图，避免额外请求
            const placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdW5pY29kZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2NjY2MiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmFkLXVuaWNvZGUpIi8+PHJlY3QgeD0iNDAiIHk9IjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmMGYwZjAiLz48cGF0aCBkPSJNNjAgMjBjLTUuNSAwLTEwIDQuNS0xMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwLTQuNS0xMC0xMC0xMHoiIGZpbGw9IiNmMGYwZjAiLz48c3Ryb2tlIHdpZHRoPSIyIiBmaWxsPSIjZjBmMDBmIi8+PC9zdmc+';
            img.src = placeholder;
            img.dataset.bigSrc = placeholder;
            img.style.opacity = '0.5';
            img.style.pointerEvents = 'none';
            
            // 即使是占位图也算作已加载
            loadedImages++;
            updateLoadingProgress();
            
            // 检查是否所有图片都已加载完成
            if (loadedImages >= totalImages) {
              hideLoadingIndicator();
            }
          }
        }, 10000); // 10秒超时
        
        // 添加crossOrigin设置，解决可能的CORS问题
        img.crossOrigin = 'anonymous';
        img.src = imgUrl;
        img.dataset.bigSrc = imgUrl;
      };
      
      // 添加图片加载失败处理
      img.onerror = function() {
        // 清除超时定时器
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
        retryCount++;
        
        if (retryCount <= maxRetries) {
          // 重试加载，使用不同的图片
          const newRandomIdx = Math.floor(Math.random() * originalImagePaths.length);
          imgUrl = originalImagePaths[newRandomIdx];
          loadImage();
        } else {
          // 多次重试失败后，显示占位图
          console.warn('图片加载失败，已重试', maxRetries, '次:', imgUrl);
          
          // 使用base64编码的占位图，避免额外请求
          const placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdW5pY29kZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2NjY2MiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmFkLXVuaWNvZGUpIi8+PHJlY3QgeD0iNDAiIHk9IjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmMGYwZjAiLz48cGF0aCBkPSJNNjAgMjBjLTUuNSAwLTEwIDQuNS0xMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwLTQuNS0xMC0xMC0xMHoiIGZpbGw9IiNmMGYwZjAiLz48c3Ryb2tlIHdpZHRoPSIyIiBmaWxsPSIjZjBmMDBmIi8+PC9zdmc+';
          this.src = placeholder;
          this.dataset.bigSrc = placeholder;
          this.style.opacity = '0.5';
          this.style.pointerEvents = 'none';
          
          // 即使是占位图也算作已加载
          loadedImages++;
          updateLoadingProgress();
          
          // 检查是否所有图片都已加载完成
          if (loadedImages >= totalImages) {
            hideLoadingIndicator();
          }
        }
      };
      
      // 添加图片加载完成处理
      img.onload = function() {
        // 清除超时定时器
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
        
        this.style.display = 'block';
        this.style.pointerEvents = 'auto';
        
        // 更新加载计数
        loadedImages++;
        updateLoadingProgress();
        
        // 检查是否所有图片都已加载完成
        if (loadedImages >= totalImages) {
          hideLoadingIndicator();
        }
      };
      
      // 计算总图片数量
      totalImages++;
      
      // 初始加载图片
      loadImage();

      const rotateY = i * angleStep;
      img.style.width = `${imgWidth}px`;
      img.style.height = `${imgHeight}px`;
      img.style.transform = `translateY(-50%) rotateY(${rotateY}deg) translateZ(${ringRadius}px)`;
      img.dataset.angle = rotateY;
      img.style.display = 'block';

      // 修复移动端点击事件（兼容touch/click）
      img.addEventListener('click', handleImgClick);
      // 移动端触摸结束事件（防止拖拽误触）
      img.addEventListener('touchend', (e) => {
        if (!isClickDrag) {
          e.preventDefault();
          handleImgClick(e);
        }
        isClickDrag = false;
      }, { passive: false });

      layer.appendChild(img);
    }
  });

  // 使用原始图片数组长度进行统计
  imgCount.textContent = `${originalImagePaths.length}张图片`;
  
  // 显示加载进度
  if (totalImages > 0) {
    updateLoadingProgress();
  } else {
    // 如果没有图片需要加载，则立即隐藏加载指示器
    hideLoadingIndicator();
  }
}

// 统一处理图片点击（打开大图）
function handleImgClick(e) {
  e.stopPropagation();
  const src = e.target.dataset.bigSrc;
  if (!src) return;
  openBigImg(src);
}

function calcImgWidth(ringRadius) {
  try {
    const circleCircumference = 2 * Math.PI * ringRadius;
    const totalGap = config.fixedImgGap * config.imgsPerLayer;
    const imgTotalWidth = circleCircumference - totalGap;
    return imgTotalWidth / config.imgsPerLayer;
  } catch (e) {
    console.error('计算图片宽度失败:', e);
    return 0;
  }
}

function updateLayerOffsets() {
  try {
    Object.keys(layers).forEach(layerKey => {
      const layer = layers[layerKey];
      if (!layer) return;
      const dynamicOffset = config.baseLayerOffsets[layerKey] * currentScale;
      layer.style.transform = `translate(-50%, calc(-50% + ${dynamicOffset}px))`;
    });
  } catch (e) {
    console.error('更新层偏移失败:', e);
  }
}

function openBigImg(src) {
  try {
    isRotating = false;
    bigImg.src = src;
    imgPopup.style.display = 'flex';
    // 移除缩放按钮相关逻辑
  } catch (e) {
    console.error('打开大图失败:', e);
  }
}

function closeBigImg() {
  try {
    isRotating = true;
    imgPopup.style.display = 'none';
    bigImg.src = '';
  } catch (e) {
    console.error('关闭大图失败:', e);
  }
}

function autoRotate() {
  try {
    if (isRotating && !isDragging && cylinder) {
      currentRotateY += config.autoRotateSpeed;
      updateTransform();
    }
  } catch (e) {
    console.error('自动旋转失败:', e);
  }
  requestAnimationFrame(autoRotate);
}

function updateTransform() {
  try {
    const ringRadius = config.baseRingRadius * currentScale;
    const imgWidth = calcImgWidth(ringRadius);
    const imgHeight = config.baseImgHeight * currentScale;

    document.querySelectorAll('.cylinder-img').forEach(img => {
      const rotateY = parseFloat(img.dataset.angle);
      if (isNaN(rotateY)) return;
      img.style.width = `${imgWidth}px`;
      img.style.height = `${imgHeight}px`;
      img.style.transform = `translateY(-50%) rotateY(${rotateY}deg) translateZ(${ringRadius}px)`;

      if (!isMobileDevice) {
        const effective = ((rotateY + currentRotateY) % 360 + 360) % 360;
        if (effective > 90 && effective < 270) {
          img.style.display = 'none';
          img.style.pointerEvents = 'none';
        } else {
          img.style.display = 'block';
          img.style.pointerEvents = 'auto';
        }
      } else {
        img.style.display = 'block';
        img.style.pointerEvents = 'auto';
      }
    });

    updateLayerOffsets();
    if (cylinder) {
      cylinder.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
    }
  } catch (e) {
    console.error('更新变换失败:', e);
  }
}

function bindDrag() {
  if (!cylinder) return;

  cylinder.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging = true;
    isClickDrag = false;
    startX = e.clientX;
    startY = e.clientY;
    startRotateX = currentRotateX;
    startRotateY = currentRotateY;
  });

  const handleMove = (clientX, clientY) => {
    if (!isDragging) return;
    const moveX = Math.abs(clientX - startX);
    const moveY = Math.abs(clientY - startY);
    // 判定拖拽阈值（防止轻微移动误判为点击）
    if (moveX > 5 || moveY > 5) isClickDrag = true;

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;
    currentRotateY = startRotateY + deltaX * config.dragSensitivity;
    currentRotateX = startRotateX - deltaY * config.dragSensitivity;
    currentRotateX = Math.max(-40, Math.min(50, currentRotateX));
    updateTransform();
  };

  // 鼠标拖拽
  document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    handleMove(e.clientX, e.clientY);
  });
  document.addEventListener('mouseup', () => {
    isDragging = false;
    isClickDrag = false;
  });
  document.addEventListener('mouseleave', () => {
    isDragging = false;
    isClickDrag = false;
  });

  // 移动端触摸（修复拖拽/点击冲突）
  cylinder.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.touches.length === 1) {
      isDragging = true;
      isClickDrag = false;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startRotateX = currentRotateX;
      startRotateY = currentRotateY;
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    }
  }, { passive: false });

  document.addEventListener('touchend', () => {
    isDragging = false;
    // 延迟重置，避免快速触摸误判
    setTimeout(() => { isClickDrag = false; }, 100);
  });
}

function bindScale() {
  if (!cylinder || !scaleRange || !scaleValue) return;

  // 滚轮缩放
  cylinder.addEventListener('wheel', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY > 0 ? -0.02 : 0.02;
    currentScale = Math.max(config.minScale, Math.min(config.maxScale, currentScale + delta));
    scaleRange.value = currentScale;
    scaleValue.textContent = Math.round(currentScale * 100) + '%';
    updateTransform();
  }, { passive: false });

  // 双指缩放
  let startDistance = 0;
  cylinder.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      startDistance = getDistance(e.touches[0], e.touches[1]);
    }
  }, { passive: false });

  document.addEventListener('touchmove', (e) => {
    if (e.touches.length !== 2) return;
    e.preventDefault();
    const currDistance = getDistance(e.touches[0], e.touches[1]);
    const scaleRatio = currDistance / startDistance;
    currentScale = Math.max(config.minScale, Math.min(config.maxScale, currentScale * scaleRatio));
    startDistance = currDistance;
    scaleRange.value = currentScale;
    scaleValue.textContent = Math.round(currentScale * 100) + '%';
    updateTransform();
  }, { passive: false });

  // 滑动条缩放（核心：确保移动端生效）
  scaleRange.addEventListener('input', (e) => {
    try {
      currentScale = parseFloat(e.target.value);
      if (isNaN(currentScale)) currentScale = 1;
      scaleValue.textContent = Math.round(currentScale * 100) + '%';
      updateTransform();
    } catch (e) {
      console.error('滑杆缩放失败:', e);
    }
  });
  // 初始化滑动条值
  scaleRange.value = currentScale;
  scaleValue.textContent = Math.round(currentScale * 100) + '%';
}

function getDistance(t1, t2) {
  try {
    const dx = t2.clientX - t1.clientX;
    const dy = t2.clientY - t1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  } catch (e) {
    console.error('计算双指距离失败:', e);
    return 0;
  }
}

function bindBigImgZoom() {
  if (!imgPopup || !bigImg || !closeBtn) return;

  let bigScale = 1;
  let isPanning = false;
  let lastX = 0;
  let lastY = 0;
  let translateX = 0;
  let translateY = 0;
  let startPinchDistance = 0;

  function applyTransform() {
    try {
      bigImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${bigScale})`;
    } catch (e) {
      console.error('应用大图变换失败:', e);
    }
  }

  // 滚轮缩放
  imgPopup.addEventListener('wheel', (e) => {
    if (imgPopup.style.display === 'none') return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -config.bigImgZoomStep : config.bigImgZoomStep;
    bigScale = Math.max(config.bigImgMinZoom, Math.min(config.bigImgMaxZoom, bigScale + delta));
    applyTransform();
  }, { passive: false });

  // 鼠标拖拽平移
  bigImg.addEventListener('pointerdown', (e) => {
    if (bigScale <= 1) return;
    e.preventDefault();
    bigImg.setPointerCapture(e.pointerId);
    isPanning = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });
  bigImg.addEventListener('pointermove', (e) => {
    if (!isPanning) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    translateX += dx;
    translateY += dy;
    applyTransform();
  });
  bigImg.addEventListener('pointerup', (e) => {
    isPanning = false;
    bigImg.releasePointerCapture(e.pointerId);
  });
  bigImg.addEventListener('pointercancel', () => {
    isPanning = false;
  });

  // 移动端双指缩放/拖拽
  imgPopup.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      startPinchDistance = getDistance(e.touches[0], e.touches[1]);
    } else if (e.touches.length === 1 && bigScale > 1) {
      isPanning = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }
  }, { passive: false });

  imgPopup.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const currDistance = getDistance(e.touches[0], e.touches[1]);
      const ratio = currDistance / startDistance;
      bigScale = Math.max(config.bigImgMinZoom, Math.min(config.bigImgMaxZoom, bigScale * ratio));
      startDistance = currDistance;
      applyTransform();
    } else if (e.touches.length === 1 && isPanning) {
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      translateX += dx;
      translateY += dy;
      applyTransform();
    }
  }, { passive: false });

  imgPopup.addEventListener('touchend', () => {
    isPanning = false;
  });

  // 双击重置
  bigImg.addEventListener('dblclick', () => {
    bigScale = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
  });
  // 移动端双击
  let touchTimer = null;
  let touchCount = 0;
  bigImg.addEventListener('touchstart', (e) => {
    touchCount++;
    if (touchCount === 2) {
      clearTimeout(touchTimer);
      touchCount = 0;
      bigScale = 1;
      translateX = 0;
      translateY = 0;
      applyTransform();
    } else {
      touchTimer = setTimeout(() => {
        touchCount = 0;
      }, 300);
    }
  }, { passive: false });

  // 键盘ESC关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBigImg();
  });

  // 关闭按钮点击（兼容移动端）
  closeBtn.addEventListener('click', closeBigImg);
  closeBtn.addEventListener('touchend', (e) => {
    e.preventDefault();
    closeBigImg();
  }, { passive: false });
}

// 图片缓存对象
const imageCache = {};

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    // 检查图片是否已在缓存中
    if (imageCache[url]) {
      resolve(imageCache[url]);
      return;
    }
    
    const img = new Image();
    img.crossOrigin = 'anonymous'; // 尝试跨域资源共享
    
    img.onload = () => {
      imageCache[url] = url; // 存储到缓存
      console.log('图片预加载成功:', url);
      resolve(url);
    };
    
    img.onerror = () => {
      console.warn('图片预加载失败:', url);
      // 不存储失败的图片到缓存
      reject(url);
    };
    
    // 设置超时处理
    const timeout = setTimeout(() => {
      console.warn('图片预加载超时:', url);
      reject(url);
    }, 10000);
    
    img.src = url;
    
    // 成功或失败后清除超时
    // 成功或失败后清除超时
    const handleLoad = function() {
      clearTimeout(timeout);
      imageCache[url] = url; // 存储到缓存
      console.log('图片预加载成功:', url);
      resolve(url);
    };
    
    const handleError = function() {
      clearTimeout(timeout);
      console.warn('图片预加载失败:', url);
      reject(url);
    };
    
    img.onload = handleLoad;
    img.onerror = handleError;
  });
}

function backgroundPreload() {
  // 使用原始图片数组的副本，避免修改原始数组
  const copy = originalImagePaths.slice();
  
  // 预加载所有图片，但限制并发数
  const CONCURRENT_LIMIT = 6; // 并发加载数量
  let index = 0;
  
  const loadNext = async () => {
    if (index >= copy.length) return;
    
    const urlsToLoad = [];
    for (let i = 0; i < CONCURRENT_LIMIT && index < copy.length; i++, index++) {
      urlsToLoad.push(copy[index]);
    }
    
    // 并发加载一批图片
    const promises = urlsToLoad.map(url => preloadImage(url).catch(() => {}));
    await Promise.allSettled(promises);
    
    // 继续加载下一批
    if (index < copy.length) {
      setTimeout(loadNext, 100); // 稍微延迟，避免阻塞主线程
    }
  };
  
  if (window.requestIdleCallback) {
    requestIdleCallback(loadNext, { timeout: 2000 });
  } else {
    setTimeout(loadNext, 100);
  }
}

function handleResize() {
  isMobileDevice = detectMobileDevice();
  updateTransform();
}

function init() {
  try {
    // 显示加载指示器
    if (loading) {
      loading.style.display = 'block';
      loading.textContent = '正在初始化...';
    }
    
    // 移除缩放按钮初始化
    // initScaleToggleBtn();
    bindDrag();
    bindScale();
    bindBigImgZoom();
    backgroundPreload();
    initImages();
    autoRotate();
    window.addEventListener('resize', handleResize);
    console.log('初始化完成，是否移动端:', isMobileDevice);
  } catch (e) {
    console.error('初始化失败:', e);
    loading.textContent = '初始化失败，请刷新页面';
  }
}

// 确保DOM加载完成后执行
function initApp() {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
}
window.addEventListener('load', initApp);
setTimeout(initApp, 100);
