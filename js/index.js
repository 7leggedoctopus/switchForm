        function showSecondModal() {
            closeModal('id01');
            document.getElementById('id02').style.display = 'block';
        }
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        function swichAccept() {
            let arrSelect = document.getElementsByClassName('form-select');
            for (var i = 0; i < arrSelect.length; i++) {
                arrSelect[i].selectedIndex = 0;
                console.log(arrSelect[i]);
            }
            var arrCheck = document.getElementsByClassName('form-check-input');
            for (var i = 0; i < arrCheck.length; i++) {
            arrCheck[i].checked = true;
            }
        }
