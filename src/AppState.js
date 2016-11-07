import { observable } from 'mobx';

class AppState {
  @observable section = 0;
  @observable content = 'Hello';
  
  SECTIONS = [
    'Overview',
    'Apps',
    'Webhooks',
    'Provider',
    'Tools'
  ];

  constructor() {}
}

export default AppState;
