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

// 使用本地图片资源，避免跨域问题
const imagePaths = [
"pic/01000797.jpg",
"pic/01000811.jpg",
"pic/10e5m6bwgd41qxgwd3aygkk73_0.jpg",
"pic/2t4y7dsjpee9aub116z268dqm_0.jpg",
"pic/46b286d15f4a41ca9a84784debf69761.jpg",
"pic/640 (1).jpg",
"pic/640 (2).jpg",
"pic/640.jpg",
"pic/8981CCAB10D31EC602E24E604AA02637.jpg",
"pic/8d663a0b4b3a41a6a3a4cc3c8f485180.jpg",
"pic/DINGTALK_IM_3329579061.JPG.jpg",
"pic/F38L6V09VDUOYUKZ6PNK.png",
"pic/IMG_20230915_130053.jpg",
"pic/IMG_20231011_095948.jpg",
"pic/IMG_20231011_141049.jpg",
"pic/IMG_20231011_141106.jpg",
"pic/IMG_20231012_080006.jpg",
"pic/IMG_20231012_080011.jpg",
"pic/IMG_20231012_093023.jpg",
"pic/IMG_20231012_093320.jpg",
"pic/IMG_20231012_103531.jpg",
"pic/IMG_20231012_103536.jpg",
"pic/IMG_20231012_103537.jpg",
"pic/IMG_20231012_103541.jpg",
"pic/IMG_20231012_103546.jpg",
"pic/IMG_20231012_103547.jpg",
"pic/IMG_20231012_103549.jpg",
"pic/IMG_20231012_103553.jpg",
"pic/IMG_20231012_103554.jpg",
"pic/IMG_20231012_103608.jpg",
"pic/IMG_20231012_103609.jpg",
"pic/IMG_20231012_103620.jpg",
"pic/IMG_20231012_103622.jpg",
"pic/IMG_20231012_103625.jpg",
"pic/IMG_20231012_103635.jpg",
"pic/IMG_20231012_103641.jpg",
"pic/IMG_20231012_103721.jpg",
"pic/IMG_20231012_103732.jpg",
"pic/IMG_20231012_103734.jpg",
"pic/IMG_20231012_103736.jpg",
"pic/IMG_20231012_103738.jpg",
"pic/IMG_20231012_103740.jpg",
"pic/IMG_20231012_103757.jpg",
"pic/IMG_20231012_133930.jpg",
"pic/IMG_20231012_133940.jpg",
"pic/IMG_20231012_134251.jpg",
"pic/IMG_20231012_134306.jpg",
"pic/IMG_20231012_141443.jpg",
"pic/IMG_20231012_143131.jpg",
"pic/IMG_20231012_143909.jpg",
"pic/IMG_20231012_144446.jpg",
"pic/IMG_20231012_154656.jpg",
"pic/IMG_20231012_154749.jpg",
"pic/IMG_20231012_155330.jpg",
"pic/IMG_20231012_155426.jpg",
"pic/IMG_20231013_083009.jpg",
"pic/IMG_20231013_083034.jpg",
"pic/IMG_20231013_084022.jpg",
"pic/IMG_20231013_084037.jpg",
"pic/IMG_20231013_085208.jpg",
"pic/IMG_20231013_100757.jpg",
"pic/IMG_20231013_101028.jpg",
"pic/IMG_20231013_151325.jpg",
"pic/IMG_20231013_151700.jpg",
"pic/IMG_20231027_150034.jpg",
"pic/IMG_20231027_150054.jpg",
"pic/IMG_20231027_150152.jpg",
"pic/IMG_20231103_124842.jpg",
"pic/IMG_20231103_125038.jpg",
"pic/IMG_20231103_125139.jpg",
"pic/IMG_20231103_125240.jpg",
"pic/IMG_20231103_125536.jpg",
"pic/IMG_20231123_063511.jpg",
"pic/IMG_20231208_124732.jpg",
"pic/IMG_20231208_124945.jpg",
"pic/IMG_20231208_124948.jpg",
"pic/IMG_20231211_121144.jpg",
"pic/IMG_20231214_115226.jpg",
"pic/IMG_20231225_085827.jpg",
"pic/IMG_20231229_100537.jpg",
"pic/IMG_20231229_100545.jpg",
"pic/IMG_20231229_100556.jpg",
"pic/IMG_20231229_100604.jpg",
"pic/IMG_20231229_100616.jpg",
"pic/IMG_20231229_100622.jpg",
"pic/IMG_20231229_102137.jpg",
"pic/IMG_20231229_102244.jpg",
"pic/IMG_20231229_102326.jpg",
"pic/IMG_20231229_110601.jpg",
"pic/IMG_20241009_150908.jpg",
"pic/IMG_20241017_083829.jpg",
"pic/IMG_20241017_151302.jpg",
"pic/IMG_20241017_152854.jpg",
"pic/IMG_20241018_091236.jpg",
"pic/IMG_20241018_092353.jpg",
"pic/IMG_20241018_093242.jpg",
"pic/IMG_20241018_101821.jpg",
"pic/IMG_20241018_153809.jpg",
"pic/IMG_20241018_155240.jpg",
"pic/IMG_20241106_150841.jpg",
"pic/IMG_20241125_072555.jpg",
"pic/IMG_20241126_074758.jpg",
"pic/IMG_20241216_164713.jpg",
"pic/IMG_20241223_070846.jpg",
"pic/IMG_20241231_153633.jpg",
"pic/IMG_20250113_154158.jpg",
"pic/IMG_20250117_121951.jpg",
"pic/IMG_20250211_152655.jpg",
"pic/IMG_20250321_155309.jpg",
"pic/IMG_20250331_072100.jpg",
"pic/IMG_20250331_075314.jpg",
"pic/IMG_20250331_075321.jpg",
"pic/IMG_20250331_094240.jpg",
"pic/IMG_20250331_115035.jpg",
"pic/IMG_20250331_115603.jpg",
"pic/IMG_20250331_134045.jpg",
"pic/IMG_20250416_121221.jpg",
"pic/IMG_20250425_114302.jpg",
"pic/IMG_20250426_154656.jpg",
"pic/IMG_20250502_090531.jpg",
"pic/IMG_20250502_090724.jpg",
"pic/IMG_20250508_114321.jpg",
"pic/IMG_20250513_073837.jpg",
"pic/IMG_20250523_155630.jpg",
"pic/IMG_20250530_145430.jpg",
"pic/IMG_20250530_151950.jpg",
"pic/IMG_20250530_160007.jpg",
"pic/IMG_20250611_152509.jpg",
"pic/QQ20250806-164327.png",
"pic/QQ20250806-172450.png",
"pic/QQ20250806-173431.png",
"pic/QQ20250806-173446.png",
"pic/d504c55c37b74e3d9850aaf2e1420cec.jpg",
"pic/iwELAqNqcGcDBgTRDMAF0QmQBrBqtFUVHTk28Afg5s4CxOoAB9IIohkPCAAJo2VkdQoAC9IAMMLl.jpg",
"pic/iwELAqNqcGcDBgTRDMAF0QmQBrDktKyYmVlgoQfg5oPhvc8AB9IIohkPCAAJo2VkdQoAC9IAOzdO.jpg",
"pic/lQDPJxwF8TrEHfvNBQDNA8Cwh8zWF-bhvFYH0F5THCwrAQ_960_1280.jpg",
"pic/lQDPJyENyW0FnB_NEADNDACwbDp4s5OQXf4G-OoRGv1UAA_3072_4096.jpg",
"pic/lQDPKHS7fB1ZLvvNBQDNA8CwQajxVRuN87IH0F5THCwrAA_960_1280.jpg",
"pic/lQDPKIKVmrS9WR_NEADNDACwQkIXEq-xRl8G-OoNmif5AA_3072_4096.jpg",
"pic/mmexport1697006867078.jpg",
"pic/mmexport1697006870035.jpg",
"pic/mmexport1697006872472.jpg",
"pic/mmexport1697171716644.jpg",
"pic/mmexport1697171719096.jpg",
"pic/mmexport1697171721383.jpg",
"pic/mmexport1697171723744.jpg",
"pic/mmexport1697171726163.jpg",
"pic/mmexport1731219304189.jpg",
"pic/mmexport1731292694586.jpg",
"pic/mmexport1731292698290.jpg",
"pic/mmexport1731671987116.jpg",
"pic/mmexport1745117573012.jpg",
"pic/wx_camera_1748592645564.jpg",
"pic/微信图片_2025-08-07_200621_706.jpg",
"pic/微信图片_2025-08-07_200745_581.jpg",
"pic/微信图片_2025-08-07_201708_906.jpg",
"pic/微信图片_2025-08-08_204527_723.jpg",
"pic/微信图片_2025-08-08_211527_414.jpg",
"pic/微信图片_2025-08-08_211924_836.jpg",
"pic/微信图片_2025-08-10_202132_741.jpg"
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
      
      // 存储图片路径，用于懒加载
      img.dataset.imgUrl = imgUrl;
      img.dataset.loaded = 'false';
      
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
        
        // 本地图片不需要crossOrigin和随机参数
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
      
      // 不初始加载图片，改为懒加载
      // loadImage();

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
  
  // 初始化时只加载可见区域的图片
  loadVisibleImages();
  
  // 监听滚动和旋转事件，加载可见区域的图片
  window.addEventListener('scroll', loadVisibleImages);
  // 每帧检查可见区域
  requestAnimationFrame(function checkVisible() {
    loadVisibleImages();
    requestAnimationFrame(checkVisible);
  });
}

// 加载可见区域的图片
function loadVisibleImages() {
  const images = document.querySelectorAll('.cylinder-img');
  images.forEach(img => {
    if (img.dataset.loaded === 'true') return;
    
    // 检查图片是否在可见区域
    const rect = img.getBoundingClientRect();
    const isVisible = (
      rect.top >= -rect.height * 2 &&
      rect.left >= -rect.width * 2 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 2 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) * 2
    );
    
    if (isVisible) {
      // 加载可见的图片
      const imgUrl = img.dataset.imgUrl;
      if (imgUrl) {
        // 检查图片是否已在缓存中
        if (imageCache[imgUrl]) {
          // 使用缓存的图片
          img.src = imgUrl;
          img.dataset.bigSrc = imgUrl;
          img.dataset.loaded = 'true';
          img.style.display = 'block';
          img.style.pointerEvents = 'auto';
          
          // 更新加载计数
          loadedImages++;
          updateLoadingProgress();
          
          // 检查是否所有图片都已加载完成
          if (loadedImages >= totalImages) {
            hideLoadingIndicator();
          }
          return;
        }
        
        let retryCount = 0;
        const maxRetries = 3;
        
        const loadImage = () => {
          // 设置加载中状态
          img.style.opacity = '0.3';
          img.style.filter = 'blur(2px)';
          img.dataset.loading = 'true';
          
          // 设置超时处理
          img.timeoutId = setTimeout(() => {
            if (img.complete) return;
            
            retryCount++;
            
            if (retryCount <= maxRetries) {
              // 重试加载，使用不同的图片
              const newRandomIdx = Math.floor(Math.random() * originalImagePaths.length);
              const newImgUrl = originalImagePaths[newRandomIdx];
              img.dataset.imgUrl = newImgUrl;
              loadImage();
            } else {
              // 多次重试失败后，显示占位图
              console.warn('图片加载超时，已重试', maxRetries, '次:', imgUrl);
              
              // 使用base64编码的占位图，避免额外请求
              const placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdW5pY29kZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2NjY2MiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmFkLXVuaWNvZGUpIi8+PHJlY3QgeD0iNDAiIHk9IjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmMGYwZjAiLz48cGF0aCBkPSJNNjAgMjBjLTUuNSAwLTEwIDQuNS0xMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwLTQuNS0xMC0xMC0xMHoiIGZpbGw9IiNmMGYwZjAiLz48c3Ryb2tlIHdpZHRoPSIyIiBmaWxsPSIjZjBmMDBmIi8+PC9zdmc+';
              img.src = placeholder;
              img.dataset.bigSrc = placeholder;
              img.style.opacity = '0.5';
              img.style.filter = 'none';
              img.style.pointerEvents = 'none';
              img.dataset.loaded = 'true';
              img.dataset.loading = 'false';
              
              // 即使是占位图也算作已加载
              loadedImages++;
              updateLoadingProgress();
              
              // 检查是否所有图片都已加载完成
              if (loadedImages >= totalImages) {
                hideLoadingIndicator();
              }
            }
          }, 10000);
          
          // 本地图片不需要crossOrigin和随机参数
          img.src = imgUrl;
          img.dataset.bigSrc = imgUrl;
          // 不要在这里标记为已加载，等onload事件触发后再标记
          // img.dataset.loaded = 'true';
        };
        
        // 添加图片加载失败处理
        img.onerror = function() {
          // 清除超时定时器
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
          }
          if (this.dataset.loaded === 'true') return;
          
          retryCount++;
          
          if (retryCount <= maxRetries) {
            // 重试加载，使用不同的图片
            const newRandomIdx = Math.floor(Math.random() * originalImagePaths.length);
            const newImgUrl = originalImagePaths[newRandomIdx];
            this.dataset.imgUrl = newImgUrl;
            loadImage();
          } else {
            // 多次重试失败后，显示占位图
            console.warn('图片加载失败，已重试', maxRetries, '次:', imgUrl);
            
            // 使用base64编码的占位图，避免额外请求
            const placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQtdW5pY29kZSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNjY2NjY2MiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNncmFkLXVuaWNvZGUpIi8+PHJlY3QgeD0iNDAiIHk9IjMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNmMGYwZjAiLz48cGF0aCBkPSJNNjAgMjBjLTUuNSAwLTEwIDQuNS0xMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwLTQuNS0xMC0xMC0xMHoiIGZpbGw9IiNmMGYwZjAiLz48c3Ryb2tlIHdpZHRoPSIyIiBmaWxsPSIjZjBmMDBmIi8+PC9zdmc+';
            this.src = placeholder;
            this.dataset.bigSrc = placeholder;
            this.style.opacity = '0.5';
            this.style.filter = 'none';
            this.style.pointerEvents = 'none';
            this.dataset.loaded = 'true';
            this.dataset.loading = 'false';
            
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
          
          // 清除加载中状态，添加平滑过渡效果
          this.style.transition = 'opacity 0.3s ease, filter 0.3s ease';
          this.style.opacity = '1';
          this.style.filter = 'none';
          this.style.display = 'block';
          this.style.pointerEvents = 'auto';
          this.dataset.loaded = 'true';
          this.dataset.loading = 'false';
          
          // 将加载完成的图片添加到缓存
          const imgUrl = this.dataset.imgUrl;
          if (imgUrl) {
            imageCache[imgUrl] = imgUrl;
            console.log('图片已缓存:', imgUrl);
          }
          
          // 更新加载计数
          loadedImages++;
          updateLoadingProgress();
          
          // 检查是否所有图片都已加载完成
          if (loadedImages >= totalImages) {
            hideLoadingIndicator();
          }
        };
        
        // 加载图片
        loadImage();
      }
    }
  });
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
    // 本地图片不需要跨域设置
    
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
  
  // 优化预加载策略：根据网络状况调整并发数
  let CONCURRENT_LIMIT = 3; // 初始并发数较低，适合国内网络
  
  // 检测网络状况并调整并发数
  if (navigator.connection) {
    const effectiveType = navigator.connection.effectiveType;
    if (effectiveType === '4g') {
      CONCURRENT_LIMIT = 8;
    } else if (effectiveType === '3g') {
      CONCURRENT_LIMIT = 5;
    }
  }
  
  let index = 0;
  let isPreloading = false;
  
  const loadNext = async () => {
    if (index >= copy.length || isPreloading) return;
    
    isPreloading = true;
    
    const urlsToLoad = [];
    for (let i = 0; i < CONCURRENT_LIMIT && index < copy.length; i++, index++) {
      urlsToLoad.push(copy[index]);
    }
    
    try {
      // 并发加载一批图片
      const promises = urlsToLoad.map(url => preloadImage(url).catch(() => {}));
      await Promise.allSettled(promises);
    } catch (e) {
      console.error('预加载批次失败:', e);
    } finally {
      isPreloading = false;
    }
    
    // 继续加载下一批，增加延迟避免阻塞主线程
    if (index < copy.length) {
      setTimeout(loadNext, 200); // 增加延迟，更适合国内网络
    }
  };
  
  // 延迟启动预加载，让初始化优先完成
  setTimeout(() => {
    if (window.requestIdleCallback) {
      requestIdleCallback(loadNext, { timeout: 5000 });
    } else {
      setTimeout(loadNext, 500);
    }
  }, 1000);
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
