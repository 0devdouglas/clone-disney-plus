document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button){
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hiddenAllTabs()
            tab.classList.add('shows__list--is-active')
            toggleActiveButton()
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function toggleActiveButton () {

    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}


function hiddenAllTabs () {

    const tabsContaineer = document.querySelectorAll('[data-tab-id]')
    for (let i = 0; i < tabsContaineer.length; i++) {
        tabsContaineer[i].classList.remove('shows__list--is-active')
        
    }
}