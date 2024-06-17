document.querySelectorAll('.fengjing-item').forEach(function(item) {
            item.addEventListener('mouseover', function() {
                this.querySelector('.jieshao').style.display = 'block';
            });
            item.addEventListener('mouseout', function() {
                this.querySelector('.jieshao').style.display = 'none';
            });
        });

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取输入值
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 验证用户名
    var usernameError = document.getElementById('usernameError');
    if (username === '') {
        usernameError.textContent = '用户名不能为空';
    } else {
        usernameError.textContent = '';
    }

    // 验证密码
    var passwordError = document.getElementById('passwordError');
    if (password === '') {
        passwordError.textContent = '密码不能为空';
    } else {
        passwordError.textContent = '';
    }

    // 如果输入正确，可以在这里进行登录处理
    if (username !== '' && password !== '') {
        alert('登录成功！');
    }
});





        
    