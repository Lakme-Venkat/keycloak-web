// import { KeycloakService } from "keycloak-angular";

// export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
//     return () =>
//       keycloak.init({
//         config: {
//           url: 'http://localhost:8080/auth',
//           realm: 'hotfoot',
//           clientId: 'hotfoot-web-client',
//         },
//         initOptions: {
//         //  onLoad: 'check-sso',
//           //silentCheckSsoRedirectUri:
//             //window.location.origin + '/assets/silent-check-sso.html',
//             checkLoginIframe: true,
//             checkLoginIframeInterval: 10
//         },
//       });
//   }