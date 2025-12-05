// 确保 DOM 加载完成后执行脚本
document.addEventListener('DOMContentLoaded', function () {
    // 获取DOM元素
    const chapterList = document.getElementById('chapter-list');
    const chapterContent = document.getElementById('chapter-content');
    const progress = document.getElementById('progress');
    const dot = document.getElementById('dot');
    const label = document.getElementById('label');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // 初始年份
    let currentYear = 2023;

    // 更新时间轴进度
    function updateTimeline(year) {
        if (!progress || !dot || !label) return; // 容错：元素不存在则返回
        const totalYears = 2026 - 2023; // 总跨度：3年
        const percent = ((year - 2023) / totalYears) * 100;
        progress.style.width = `${percent}%`;
        dot.style.left = `${percent}%`;
        label.textContent = `${year}年`;
    }

    // 切换章节逻辑
    if (chapterList) {
        // 绑定点击事件
        chapterList.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                const year = parseInt(item.dataset.year);
                const title = item.textContent.trim();

                // 更新时间轴
                if (year !== currentYear) {
                    currentYear = year;
                    updateTimeline(year);
                }

                // 更新章节内容
                if (chapterContent) {
                    chapterContent.innerHTML = `
                              <h2><span>📘</span> ${title}</h2>
                              <p>这是一个关于${title.replace('章：', '章').replace(/ \d{4}$/, '')}的回忆片段。在这里，我们共同经历了许多难忘的时刻。</p>
                              <p>每个人的脸上都写满了成长的痕迹，而这些故事，正是我们班级最珍贵的记忆。</p>
                            `;
                }

                // 高亮当前章节
                chapterList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
                item.classList.add('active');

                // 移动端自动关闭侧边栏
                if (window.innerWidth <= 768) {
                    toggleSidebar();
                }
            });
        });

        // 初始化高亮第一个章节
        const firstItem = chapterList.querySelector('li');
        if (firstItem) {
            firstItem.classList.add('active');
        }
    }

    // 事件展开/收起
    window.toggleEvent = function (element) {
        const content = element.nextElementSibling;
        const btn = element.querySelector('.expand-btn');
        if (content && btn) {
            content.classList.toggle('show');
            btn.textContent = content.classList.contains('show')
                ? '收起详情 ▲'
                : '查看详情 ▼';
        }
    };

    // 侧边栏切换
    window.toggleSidebar = function () {
        if (sidebar && overlay) {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('show');
        }
    };

    // 初始化时间轴
    updateTimeline(currentYear);

    // 窗口大小变化时重新适配
    window.addEventListener('resize', function () {
        // 移动端窗口变化时关闭侧边栏
        if (window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
    });
});
