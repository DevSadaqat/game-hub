import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '87ef776c976342bfb59d2f8926a0b2fc',
  },
});
