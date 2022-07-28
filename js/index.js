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
            }
            var arrCheck = document.getElementsByClassName('form-check-input');
            for (var i = 0; i < arrCheck.length; i++) {
                arrCheck[i].checked = true;
            }
            var arrChips = document.getElementsByClassName('chip');
            for (var i = 0; i < arrChips.length; i++) {
                arrChips[i].style.display = '';
                
            }
        }
