// التحقق من حالة تسجيل الدخول
function checkAuth() {
    const token = localStorage.getItem('token');
    const currentUser = sessionStorage.getItem('currentUser');
    const isLoginPage = window.location.pathname.includes('l0gin.html');
    const isRegisterPage = window.location.pathname.includes('re0gister.html');
    
    // إذا كنا في صفحة تسجيل الدخول أو التسجيل، لا نقوم بأي توجيه
    if (isLoginPage || isRegisterPage) {
        return;
    }
    
    // إذا لم يكن هناك توكن أو مستخدم، قم بتوجيهه إلى صفحة تسجيل الدخول
    if (!token || !currentUser) {
        window.location.replace('/login/l0gin.html');
    }
}

// تنفيذ التحقق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', checkAuth);