import './App.css'

import LeftMenu from './components/leftMenu/leftMenu';
import { CeCProvider } from './provider/context';
import StoryUsers from './components/storyUsers/storyUsers';
import Content from './components/content/content';
import RightMenu from './components/rightMenu/rightMenu';
import BottomMenu from './components/bottomMenu/bottomMenu';
import { UserCommentProvider } from './provider/comments';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <LeftMenu />
      </div>
      <div className='othercomp'>
        <div className='center'>
        <div className='main-icon'><span>Social Media</span></div>
          <div className='storycomp'>
            <CeCProvider numUser={10}>
              <StoryUsers />
            </CeCProvider>
          </div>
          <div className='contentcomp'>
            <CeCProvider numUser={6}>
              <UserCommentProvider dataComment={5}>
                <Content />
              </UserCommentProvider>
            </CeCProvider>
          </div>
        </div>
        <div className='right'>
          <CeCProvider numUser={5}>
            <RightMenu />
          </CeCProvider>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
}

export default App;
