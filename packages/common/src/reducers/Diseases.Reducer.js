import {
  FETCH_DISEASES,
  FETCH_DISEASE_BY_ID,
  SET_SELECTED_DISEASE,
  FETCH_DISEASE_SCORES,
  DISEASE_TEAM_MEMBERS,
  DISEASE_EVENTS_TIMELINE,
  FETCH_READINGS_RANGES,
  RESET_STATE,
} from '../actions/types';
import {PatientScore} from '../models/Score';
import TimelineEvent from '../models/TimelineEvent';

export const INITIAL_STATE = {
  items: [],
  selected: {},
  treatmentsOptions: [],
  selectedTreatmentEvents: [],
  selectedEvents: [],
  pdisease: {},
  ranges: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DISEASES:
      return {
        ...state,
        items: action.payload,
        treatmentsOptions: [],
        selectedTreatmentEvents: [],
        selectedEvents: [],
      };

    case FETCH_DISEASE_BY_ID: {
      const {pdisease, update} = action.payload;

      return {
        ...state,
        items: update
          ? state.items.map((d) => (d.id === pdisease.id ? pdisease : d))
          : [{...pdisease}],
        selected: {
          ...pdisease,
        },
        treatmentsOptions: [],
        selectedTreatmentEvents: [],
        selectedEvents: [],
      };
    }

    case SET_SELECTED_DISEASE: {
      const {conditionID} = action.payload;
      const selectedItem = state.items.find((item) => item.id === conditionID);
      return {
        ...state,
        selected: selectedItem,
      };
    }

    case FETCH_DISEASE_SCORES: {
      const {pdisease, coaScores} = action.payload;
      let {selected} = state;

      if (String(state.selected.id) === String(pdisease.id)) {
        selected = {
          ...selected,
          scores:
            coaScores && coaScores.length
              ? coaScores.map((score) => new PatientScore(score))
              : [],
        };
      }

      return {
        ...state,
        items: state.items.map((i) => {
          if (String(i.id) === String(pdisease.id)) {
            return {
              ...i,
              scores:
                coaScores && coaScores.length
                  ? coaScores.map((score) => new PatientScore(score))
                  : [],
            };
          }
          return i;
        }),
        selected,
      };
    }

    case DISEASE_TEAM_MEMBERS: {
      return {
        ...state,
        items: state.items.map((pdisease) => {
          if (pdisease.id === action.payload.pdiseaseID) {
            return {
              ...pdisease,
              team_members: action.payload.items,
            };
          }
          return pdisease;
        }),
      };
    }

    case DISEASE_EVENTS_TIMELINE: {
      return {
        ...state,
        eventsTimeline:
          action.payload && action.payload.length
            ? action.payload.map((e) => new TimelineEvent(e))
            : [],
      };
    }

    case FETCH_READINGS_RANGES:
      return {
        ...state,
        ranges: action.payload,
      };

    case RESET_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}
