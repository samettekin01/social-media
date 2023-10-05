import './style/App.css'

import LMenu from './comps/leftmenu';
import { CeCProvider } from './comps/ccontext';
import StoryUsers from './comps/storyusers';
import Content from './comps/content';
import RightMenu from './comps/rightmenu';
import BottomMenu from './comps/bottommenu';
import { UserCommentProvider } from './comps/comments';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <LMenu />
      </div>
      <div className='othercomp'>
        <div className='center'>
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
