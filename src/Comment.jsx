import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import './Header.css'
const CommentExampleComment = () => (
  <Comment.Group className='cm'>
    <Comment className='item'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
      <Comment.Content>
        <Comment.Author as='a'>Eldan Smith</Comment.Author>
        <Comment.Metadata>
          <div>Today at 10:51AM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment className='item'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Shikun Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday</div>
        </Comment.Metadata>
        <Comment.Text>I like your design</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
   
        <Comment className='item'>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hoban</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Hope to design more interesting functions</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
     

    <Comment className='item'>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Katrina Jess</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>This is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    
  </Comment.Group>
)

export default CommentExampleComment
