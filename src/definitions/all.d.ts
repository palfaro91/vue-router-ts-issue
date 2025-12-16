import Pusher from "pusher-js";

declare module 'vue' {
  interface ComponentCustomProperties {
    $pusher: Pusher
  }
}
