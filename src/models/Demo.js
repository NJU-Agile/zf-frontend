import * as DemoServices from '@/services/Demo';

export default {
  namespace: 'Demo',

  state: {},

  effects: {
    * fetchData({payload, callback}, {call}) {
      return yield call(DemoServices.fetchData, payload);
    },
    * uploadData({payload, callback}, {call}) {
      return yield call(DemoServices.uploadData, payload);
    },
    * modifyData({payload, callback}, {call}) {
      return yield call(DemoServices.modifyData, payload);
    },
  },

  reducers: {},
}
