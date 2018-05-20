import "jest-localstorage-mock";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({ adapter: new Adapter() })

console.log("***********favoriteIds array in local storage mocked in setupTests.js*************");
if (!localStorage.getItem("favoriteIds")) {
            localStorage.setItem("favoriteIds", "[]");
          }


//https://github.com/jefflau/jest-fetch-mock/issues/53
global.fetch = require('jest-fetch-mock');