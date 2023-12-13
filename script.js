class NavigationEffects {
    constructor() {
        this.mbo = document.querySelector('#nav');
        this.nav = document.querySelector('nav');
        this.info = document.querySelector('#info');
        this.svg1 =document.querySelector('#svg1');
        this.svg2 =document.querySelector('#svg2');
        this.info.style.display = 'none';
        this.menu = document.querySelector('#menu');
        this.nav.style.height='20vh';
        this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.prevScrollPos = window.scrollY || document.documentElement.scrollTop;
        this.initEvents();
    }

    initEvents() {
        this.mbo.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.nav.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.svg();
    }

    svg(){
        if (this.windowWidth>990) {
            console.log(this.windowWidth);
            this.svg2.style.display = 'block';
            this.svg1.style.display = 'none';
        } else {
            console.log(this.windowWidth);
            this.svg1.style.display = 'block';
            this.svg2.style.display = 'none';
            this.menu.style ="background-color:rgb(255, 151, 0)"
        }
    }

    handleMouseEnter() {
        this.nav.style.backgroundColor = 'white';
        this.info.style.display = 'flex';
        this.nav.style.height='50vh'
    }

    handleMouseLeave() {
        this.nav.style.backgroundColor = 'rgb(255, 151, 0)';
        this.info.style.display = 'none';
        this.nav.style.height='20vh'
    }

    handleScroll() {
        let scrollPosition = window.scrollY;
        let triggerHeight = 50;

        if (scrollPosition > triggerHeight) {
            let opacity = 1 - (scrollPosition - triggerHeight) / 200;
            this.nav.style.opacity = opacity;
        } else {
            this.nav.style.opacity = '1';
        }
    }
}

const navigation = new NavigationEffects();
