// srcディレクトリのapp.tsxが起点になっている
import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat    from './components/chat/Chat';
import { useSelector } from 'react-redux';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { Email } from '@mui/icons-material';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from "./utils/ErrorFallBack";


function App() {


  const user=useAppSelector((state) => state.user.user); //ここでuser情報を取得するための変数を定義し、useAppSelecterを定義している
  // const user=null;
  // console.log(user);
  const dispatch = useAppDispatch();

  // userEffectとは、Reactで定義されているhooksのうちの1種類の概念。
  // 関数コンポーネントで副作用（データのフェッチ、DOMの操作、サブスクリプションの設定など）を扱うためのHook
  // 買い物リストが変わるたびに何かをする、たとえば「リストが変わったら、メモを更新する」などの動作に使う。
  useEffect(()=>{
    auth.onAuthStateChanged((loginUser)=>{
      console.log(loginUser)
      if(loginUser){
        dispatch(login({
          uid:loginUser.uid,
          photo:loginUser.photoURL,
          email:loginUser.email,
          displayName:loginUser.displayName,
        }));
      } else{
        dispatch(logout());
      }
    })
  },[dispatch]);

  return (
    <div className="App">
      {user ? ( //ここは条件分岐。Trueの時にチャット画面が表示され、Falseの時にLogin画面が表示される
        <>
          <ErrorBoundary FallbackComponent={ErrorFallBack} >
             <Sidebar />
           </ErrorBoundary>
           <Chat/>    
        </>
      ) : (
        <>
          <Login/>
        </>
      )} 
    </div>
  );
}

export default App;
