import { viewController } from './viewController'; 

export const controller = ((viewCtrl) => {

    var setUpListeners = () => {
        document.querySelector(viewCtrl.DOM().menu).addEventListener('click', e => {
            
            if(e.target.className === 'e'){
                const element = [e.target.id,e.target.innerText];

               viewCtrl.click(element);

                

            }
        });
    }



    return {
        init: () => {
            console.log('Application has started..');

            //Add Menu
            viewCtrl.addMenu();
            setUpListeners();

        }
    }
})(viewController);





/** Tasks
 * 1. Add Cards
 * 
 * 
 * 
 * 
 * 
 */