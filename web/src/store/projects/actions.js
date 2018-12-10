// import gql from 'graphql-tag';

// import apollo from '../../plugins/apollo';
// import { PROJECTS_CREATE_PROJECT } from './constants';
// // import { axios } from '../../plugins/axios';

// export default {
//   [PROJECTS_CREATE_PROJECT]: ({ commit }, project) =>
//     new Promise((resolve, reject) => {
//       console.log(commit);
//       // const { guid } = rootState.user.user;
//       // project.userGuid = guid;
//       apollo
//         .mutate({
//           mutation: gql`
//             mutation(
//               $firstName: String!
//               $userGuid: String!
//               $lastName: String
//               $email: String
//               $phone: String
//               $address: String
//             ) {
//               createContact(
//                 firstName: $firstName
//                 userGuid: $userGuid
//                 lastName: $lastName
//                 email: $email
//                 phone: $phone
//                 address: $address
//               ) {
//                 firstName
//                 lastName
//                 email
//                 phone
//                 address
//                 guid
//               }
//             }
//           `,
//           variables: project,
//         })
//         .then(async response => {
//           // const data = JSON.parse(JSON.stringify(response.data.createContact));
//           // commit(PROJECT_CREATE_PROJECT, data);
//           // await dispatch(PROJECT_SAVE_PROJECT, data);
//           // await dispatch(PROJECT_SORT_PROJECTS);
//           resolve(response);
//         })
//         .catch(error => {
//           // TODO: Better Error Handling
//           console.error(error);
//           reject(error);
//         });
//     }),
// };
