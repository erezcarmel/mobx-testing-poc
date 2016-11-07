import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import AppState from '../../AppState';
import Actions from '../../Actions';
import Sidebar from './Sidebar';
import sinon from 'sinon';

describe('Sidebar', () => {
  let appState, sidebar, actions, spy;
  
  beforeEach (() => {
    appState = new AppState();
    actions = new Actions();
    sidebar = mount(<Sidebar sections={appState.SECTIONS} actions={actions}/>);
    spy = sinon.spy(actions, 'loadData');
  });
  
  it('should have 5 buttons', () => {
    expect(sidebar.find('.section').length).to.equal(5);
  });
  
  it('should call loadData on button click', () => {
    let button = sidebar.find('.section').at(2);
    button.simulate('click');
    expect(actions.loadData.calledOnce);
  });
});