import React from 'react';
import styled, { injectGlobal } from 'styled-components';

// injectGlobal`
//   @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,800');
// `;
const CommentListDiv = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  display: inline-block;
  vertical-align: top;
  width: 265px;
`;

const CommentItemDiv = styled.div`
  font-size: 12px;
  line-height: 14px;
  clear: both;
  height: 48px;
  margin-bottom: 10px;
  box-shadow: rgba(0,0,0,.2) 0 0 10px 0;
  background: linear-gradient(120deg, rgba(248, 248, 254, .95), rgba(250, 250, 250, .95));
  border-radius: 48px;
`;

const AvatarDiv = styled.div`
  float: left;
  position: relative;
  overflow: hidden;
  height: 48px;
  width: 48px;
  margin-right: 14px;
  background: #dfecf2;
  border-radius: 48px;
`;

const AvatarImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  background: #999;
`;

const MessageDiv = styled.div`
  overflow: hidden;
  padding-top: 10px;
  padding-right: 20px;
`;

const AuthorSpan = styled.span`
font-weight: bold;
`;
const TextSpan = styled.span``;

export default function CommentList({ loading, comments, totalCount }) {
  if(loading) {
    return <div>loading</div>
  };

  if(comments.length === 0) {
    return <div>empty</div>;
  }

  return (
    <CommentListDiv>
      {comments.map(({ text, author: { name, avatar }}) => (
        <CommentItemDiv>
          <AvatarDiv><AvatarImg src={avatar}/></AvatarDiv>
          <MessageDiv>
            <AuthorSpan>{name}</AuthorSpan>
            <TextSpan>{text}</TextSpan>
          </MessageDiv>
        </CommentItemDiv>
      ))}
    </CommentListDiv>
    );
}

