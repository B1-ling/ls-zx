// 生成粒子背景
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.width = (Math.random() * 3 + 2) + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
}

// 平滑滚动功能，修复导航链接定位问题
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        // 获取目标链接
        const href = this.getAttribute('href');
        
        // 只对内部链接处理平滑滚动
        if (href.startsWith('#')) {
            e.preventDefault();
            
            // 如果是首页链接，滚动到顶部
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // 对于其他内部链接，定位到对应的内容区块
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // 计算滚动位置，考虑导航栏高度
                    const navHeight = 70; // 导航栏高度
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            
            // 移除所有导航链接的active类
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            // 为当前点击的链接添加active类
            this.classList.add('active');
        }
    });
});

// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    // 切换菜单图标
    const icon = this.querySelector('i');
    if (navbarMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// 点击导航链接后关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// 初始化
window.addEventListener('load', function() {
    createParticles();
});
