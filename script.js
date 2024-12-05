document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动导航
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 微信二维码弹窗处理
    const wechatLink = document.querySelector('.wechat-link');
    if (wechatLink) {
        wechatLink.addEventListener('click', (e) => {
            e.preventDefault();
            const wechatId = wechatLink.getAttribute('data-wechat');
            alert('微信号：' + wechatId + '\n请添加我的微信进行联系');
        });
    }

    // 表单提交处理
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 基础表单验证
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('请填写所有必填项');
            return;
        }
        
        // 实际应用中，这里会发送到后端服务
        console.log('表单提交:', { name, email, message });
        
        // 显示成功消息
        alert('感谢您的留言！我会尽快回复。');
        
        // 重置表单
        this.reset();
    });

    // 滚动动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 为各个区块添加动画
    document.querySelectorAll('.about, .projects, .contact').forEach(section => {
        observer.observe(section);
    });
});
