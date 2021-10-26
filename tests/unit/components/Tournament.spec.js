import { mount, RouterLinkStub } from '@vue/test-utils'
import Tournaments from '../../../src/views/Tournaments.vue'
import Tournament from '../../../src/components/Tournament.vue'

let wrapper;
const data = [
  {
    "_tid": 29,
    "_rcid": 17,
    "name": "Bundesliga",
    "year": "21/22",
    "seasontypename": "Regular Season"
  },
  {
      "_tid": 79864,
      "_rcid": 17,
      "name": "Bundesliga, Championship Round",
      "year": "21/22",
      "seasontypename": "Group stage"
  },
];

describe('Tournaments', () => {
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

      wrapper = mount(Tournaments, {
       stubs: {
          RouterLink: RouterLinkStub
        }
     });
  })

  test('should call fetch method when component is mounted', async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should call Api point to the /api/tournaments when component is mounted', async () => {
    expect(fetch).toHaveBeenCalledWith("http://localhost:8000/api/tournaments/");
  });

  test('should been called right data', async () => {
    expect((await global.fetch()).json()).toEqual(data);
  });

  describe('Tournament', () => {
    const wrapperTournament = mount(Tournament, {
      propsData: {
        tournament: data[0]
      },
      stubs: {
        RouterLink: RouterLinkStub
      },
    })

    test('should receive right data as prop', async () => {
      expect(wrapperTournament.props().tournament).toEqual(data[0]);
    });

    test('should show tournament name inside card title', async () => {
      const title = wrapper.find('.card-title');

      expect(title.text()).toEqual(wrapperTournament.props().tournament.name);
    });

    test('should show tournament season type inside card text', async () => {
      const seasontypename = wrapper.find('.card-text');

      expect(seasontypename.text()).toEqual(wrapperTournament.props().tournament.seasontypename);
    });

    test('should show tournament year inside card', async () => {
      const year = wrapper.find('.card-year');

      expect(year.text()).toEqual("Year: " + wrapperTournament.props().tournament.year);
    });
      
  })
});
