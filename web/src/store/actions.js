import gql from 'graphql-tag';
import jwt from 'jsonwebtoken';

import { REQUEST_INIT_APPLICATION } from './constants';
import { apollo } from '../plugins/apollo';

export default {
  [REQUEST_INIT_APPLICATION]: ({ rootState }) =>
    new Promise((resolve, reject) => {
      const { id } = jwt.verify(rootState.auth.token, process.env.SECRET);
      apollo
        .query({
          query: gql`
          {
            user(id: "${id}") {
              id
              firstName
              lastName
            }
            allContacts(userGuid:"${id}") {
              guid
              firstName
              lastName
              email
              phone
              address
              tags {
                guid
              }
              campaigns {
                guid
                campaignGuid
                contactGuid
                startDate
                campaign {
                  guid
                  userGuid
                  name
                }
              }
              campaignActions {
                guid
                campaignActionGuid
                contactGuid
                actionDate
                campaignAction {
                  guid
                  campaignGuid
                  name
                  description
                  actionType
                  actionInterval
                }
              }
            }
            allTags(userGuid:"${id}") {
              guid
              tagName
            }
            allCampaigns(userGuid:"${id}") {
              guid
              name
              actions {
                guid
                name
                description
                actionType
                actionInterval
              }
            }
          }
        `,
        })
        .then(response => {
          console.log(response);
          // parse graphql data to make it writeable.
          // const {
          //   user,
          //   allTags: tags,
          //   allContacts: contacts,
          //   allCampaigns: campaigns,
          // } = JSON.parse(JSON.stringify(response.data));

          // commit(`user/${USER_SET_USER}`, user);
          // commit(`contact/${CONTACT_SET_CONTACTS}`, contacts);
          // commit(`tag/${TAG_SET_TAGS}`, tags);
          // commit(`campaign/${CAMPAIGN_SET_CAMPAIGNS}`, campaigns);
          // commit(`loading/${LOADING_HIDE_MAIN_LOADER}`);
          resolve(response);
        })
        .catch(error => {
          console.error(error);
          reject(error);
        });
    }),
};
