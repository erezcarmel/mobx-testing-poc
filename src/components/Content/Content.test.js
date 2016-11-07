import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import AppState from '../../AppState';
import Content from './Content';
import sinon from 'sinon';

describe('Content', () => {
  let appState, content, spy;
  let mockContent = {userId: 1, id: 5, title: "test content", body: "my test content"};
  let mockActions = {
    loadData: () => {
      appState.content = mockContent.body;
    }
  };
  
  beforeEach (() => {
    appState = new AppState();
    content = mount(<Content section={appState.section} actions={mockActions} content={appState.content}/>);
    spy = sinon.spy(mockActions, 'loadData');
  });
  
  it('should get content from appState on content loading', () => {
    mockActions.loadData(2);
    expect(mockActions.loadData.calledOnce);
    expect(appState.content).to.eq(mockContent.body);
  });
});