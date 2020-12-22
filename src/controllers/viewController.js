export const viewController = (() => {


var DOMStrings = {
    menu: '.menu'
}
//Data for the links you can add or remove the links here
var linkData = [
    {
        id:"about",
       card:"About" 
    },
    {
        id:"experience",
        card:"Experience" 
    },
    {
        id:"education",
        card:"Education" 
    },
    {
        id:"skills",
        card:"Skills" 
    },
    {
        id:"interests",
        card:"Interests"
    },
    {
        id:"awards",
        card:"Awards" 
    }
];



var linkClick = data => {
    unSetLinks();
   document.getElementById(data[0]).style.color = 'white';
   $(document).ready(function(){
        $('html, body').animate({
            scrollTop: ($(`#${data[1]}`).offset().top)
        },1000)
    });
 } 

var unSetLinks = () => {
    linkData.forEach(el => {
        document.getElementById(el.id).style.color = 'greenyellow';
    });

}












return {

    addCards: () => {

    },
    //Parses Array and adds the data to the DOM
    addMenu: () => {
        var markup =linkData.map(el => {
           return `<tr><td class="menuText">
        <a  class="e"id="${el.id}" href="#" data="${el.card}">${el.card}</a>
    </td></tr>
        `}).join('');
        document.querySelector(DOMStrings.menu).insertAdjacentHTML('afterbegin',markup);
    },
    //linkClik
    click: obj => {
        linkClick(obj);
    },
    DOM: () => {
        return DOMStrings;
    }
    

}





})();