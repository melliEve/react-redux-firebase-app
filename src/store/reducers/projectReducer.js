const initialState = {
  projects: [
    { id: '1', title: 'peas on earth', content: 'blah blah blah' },
    { id: '2', title: 'yolo!!!!!', content: 'blah blah blah' },
    { id: '3', title: 'i like big butts...', content: 'blah blah blah' },
  ]
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project, action.type);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.error);
      return state;
    default:
      return state;
  }
}

export default projectReducer;