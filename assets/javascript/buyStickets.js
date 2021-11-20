const buyBtns = document.querySelectorAll(".js-buy-stickets")
const modal = document.querySelector("#modal")
const btnClose = document.querySelector(".js-btn-close")
const modalContainer = document.querySelector(".js-modal-container")
const btnHelp = document.querySelector(".js-help-user")
const btnPay = document.querySelector(".js-btn-pay")


function showModal() {
    modal.classList.add("open")
}

function hideModal() {
    modal.classList.remove("open")
}

function helpAleart () {
    alert("Bạn nhập những thông tin để mua sticket nhé. Cảm ơn bạn")
}

function showPay () {
    var input1 = document.getElementById("how-many").value;
    var input2 = document.getElementById("mail").value;
    document.write("Số lượng của bạn" + input1)
    document.write("Email muốn gửi tới" + input2)
}


for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showModal)
}

btnClose.addEventListener("click", hideModal)
modal.addEventListener("click", hideModal)

modalContainer.addEventListener("click", function (donHide){
    donHide.stopPropagation()
})

btnHelp.addEventListener("click", helpAleart)

btnPay.addEventListener("click", showPay)