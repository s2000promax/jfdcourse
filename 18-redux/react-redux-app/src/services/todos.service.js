import httpService from './http.service';

const todosEndpoint = '/todos'

const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 10
      }
    });
    return data;
  },
  addTask: async  () => {
    const { data } = await httpService.post(todosEndpoint, {
      // id: Date.now(), // Comment because id rewrite on server
      title: `new Task ${Date.now()}`,
      completed: false
    })
    return { ...data, id: Date.now() };
  }
}

export default todosService;