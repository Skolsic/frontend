import Vue from 'vue';
import { mount, RouterLinkStub } from '@vue/test-utils'
import Matches from '../../../src/views/Matches.vue'
import Match from '../../../src/components/Match.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

let wrapper;
const data = [
  {
    "_tid": 29,
    "time": {
      "time": "18:00",
      "date": "22/01/21"
    },
    "teams": {
      "home": {
        "name": "Rapid"
      },
      "away": {
        "name": "Sturm Graz"
      }
    },
    "result": {
      "home": 4,
      "away": 1
    },
    "comment": "1:0 (7.) E.Kara, 1:1 (31.) J.Jantscher, 2:1 (45.) T.Schick, 3:1 (50.) C.Knasmullner, 4:1 (88.) Y.Demir"
  },
  {
    "_tid": 29,
    "time": {
      "time": "16:00",
      "date": "23/01/21"
    },
    "teams": {
      "home": {
        "name": "Wolfsberg"
      },
      "away": {
        "name": "TSV Hartberg"
      }
    },
    "result": {
      "home": 0,
      "away": 0
    },
    "comment": ""
  },
];

describe('Matches', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve) =>
      resolve({
        json: () => {
          return data;
        }
    })
  );
});

  beforeEach(() => {
    fetch.mockClear();

      wrapper = mount(Matches, {
        mocks: {
          $route: {
            params: { id: 29 }
          }
        },
        stubs: {
          RouterLink: RouterLinkStub,
        }
      });
  })

  test('should call fetch method when component is mounted', async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should call Api point to the /api/matches when component is mounted', async () => {
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api/matches/29");
  });

  test('should been called right data', async () => {
    expect((await global.fetch()).json()).toEqual(data);
  });

  describe('Match', () => {
    const wrapperMatch = mount(Match, {
    propsData: {
      match: data[0]
    },
    stubs: {
      RouterLink: RouterLinkStub
    },
  })

    test('should receive right data as prop', async () => {
      expect(wrapperMatch.props().match).toEqual(data[0]);
    });

    test('should show home team title', async () => {
      const title = wrapper.find('.home');

      expect(title.text()).toEqual(wrapperMatch.props().match.teams.home.name);
    });

    test('should show away team title', async () => {
      const title = wrapper.find('.away');

      expect(title.text()).toEqual(wrapperMatch.props().match.teams.away.name);
    });

    test('should show match result inside h3', async () => {
      const result = wrapper.find('h3');

      expect(result.text()).toEqual(
        wrapperMatch.props().match.result.home + " : " + wrapperMatch.props().match.result.away
      );
    });

    test('should indicate the date on which the match took place inside paragraph', async () => {
      const year = wrapper.find('.year');

      expect(year.text()).toEqual(
        "Match played: " + wrapperMatch.props().match.time.date + " at " + wrapperMatch.props().match.time.time
      );
    });
  })
});
