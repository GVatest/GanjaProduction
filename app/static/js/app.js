$(function () {


    // location
    var loc = $(location).attr('href').split('/'),
        nameOfcurrentfile = loc[loc.length - 1],
        navLink = $('.nav-link'),
        flag = 0

    for (var index = 0; index < navLink.length; index++) {
        $(navLink[index]).removeClass('active')
        if ($(navLink[index]).attr('id') == nameOfcurrentfile) {
            $(navLink[index]).addClass('active')
            flag = 1
        }
    }


    // nav
    var nav = $('.nav'),
        wrapperMenu = $('.wrapper-menu')


    wrapperMenu.on('click', function (event) {
        event.preventDefault()
        wrapperMenu.toggleClass('open')
        nav.slideToggle()
    })
    nav.on('click', function () {
            if (wrapperMenu.hasClass('open')) {
                nav.slideToggle()
                wrapperMenu.removeClass('open')
            }
    })

    // switch theme
    var themeBut = $('#theme_but')
    var link = $('.theme')[0]
    if (flag == 0) {
        nameOfcurrentfile = 'view'
    }

    function chosenTheme() {
      if(localStorage.getItem('theme') === 'black') {
        link.href = 'static/css/' + nameOfcurrentfile + '_' + 'black.css'
        link.id = 'black'
      }
    }

    themeBut.on('click', function () {

        var check = link.id === "white"

        

        if (check) {

            link.href = 'static/css/' + nameOfcurrentfile + '_' + 'black.css'
            link.id = 'black'
            localStorage.removeItem('theme', 'white')
            localStorage.setItem('theme', 'black')

        } else {

            link.href = 'static/css/' + nameOfcurrentfile + '_' + 'white.css'
            link.id = "white"
            localStorage.removeItem('theme', 'black')
            localStorage.setItem('theme', 'white')

        }

    })

    chosenTheme() 
})
