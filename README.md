# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
##  리엑트 기반으로 만든 숫자 맞추는 게임 
 1~ 99의 숫자의 두 합을 구하는 간단한 문제를 내주는 게임이며 
 useEffect, useState를 사용하여 만들었음.
 그 후 알게 된것은 useRef를 사용하여 하게 될경우 dom을 쓸수 있으며 무의미한 랜더링,인더벌,타임아웃등으로 인하여 
 생기는 렉을 줄일 수 있다 .
 
 버튼을 마우스로 누를경우만 입력이 되었으나 onKeyDown을 사용하여 e.keycode에 해당되는 엔터의 숫자를 찾아서 버튼 온클릭함수에 넣어주면 작동하게 된다는것을 알게되었다.
 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

