
// 메뉴 토글
window.onload = function () {
    // const $menuLi = document.querySelectorAll(".lnb .dep1 > li > a");
    // $menuLi.forEach(element => {
    //     element.addEventListener("click", function () {
    //         const targetEl = this.parentElement;
    //         // console.log(targetEl);
    //         targetEl.classList.toggle("on");
    //     });
    // });

    // IE 호환
    const $menuLi = document.querySelectorAll(".lnb .dep1 > li > a");
    for (i = 0; i < $menuLi.length; i++) {
        $menuLi[i].addEventListener("click", function () {
            const targetEl = this.parentElement;
            // console.log(targetEl);
            targetEl.classList.toggle("on");
        });
    }
}
