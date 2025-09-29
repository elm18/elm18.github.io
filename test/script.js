
        function Check() {
            let q1 = document.getElementById('q1');
            let a1 = document.getElementById('a1');
            if (a1.value == '1') {
                q1.style.border = '1px solid green ';
            }
            else {
                q1.style.border = '1px solid red';
            }
        }