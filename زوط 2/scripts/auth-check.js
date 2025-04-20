// التحقق من تسجيل الدخول
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    const currentPath = window.location.pathname;
    const publicPages = ['/login/l0gin.html', '/login/re0gister.html', '/login/reset-passw0rd.html'];
    
    // إذا كان المستخدم على صفحة عامة وهو مسجل دخول، نوجهه للصفحة الرئيسية
    if (currentUser && publicPages.some(page => currentPath.endsWith(page))) {
        window.location.href = '../indkex.html';
        return;
    }
    
    // إذا كان المستخدم على صفحة خاصة وغير مسجل دخول، نوجهه لصفحة تسجيل الدخول
    if (!currentUser && !publicPages.some(page => currentPath.endsWith(page))) {
        window.location.href = 'login/l0gin.html';
        return;
    }
}

// فحص حالة تسجيل الدخول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', checkAuth);