/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from "@storybook/vue";
import UserAvatar from "../../src/components/UserAvatar.vue";
import Vue from "vue";
import Vuex from "vuex";
import { withKnobs, text, number } from "@storybook/addon-knobs/vue";

const defaultValue = "Miloš Spasojević";

Vue.use(Vuex);

storiesOf("UserAvatar", module)
  .addDecorator(withKnobs)
  .add("with user", () => {
    const state = {
      user: { user_metadata: { full_name: defaultValue } }
    };
    const getters = {
      getUser: state => {
        return state.user;
      },
      getUserStatus: () => true
    };

    const store = new Vuex.Store({
      getters,
      state
    });

    return {
      props: {
        name: {
          type: String,
          default: text("Name", defaultValue)
        },
        width: {
          type: Number,
          default: number("Width", 60)
        },
        height: {
          type: Number,
          default: number("Height", 60)
        }
      },
      watch: {
        name() {
          this.$store.state.user.metadata = { full_name: this.name };
        }
      },
      components: { UserAvatar },
      store,
      template:
        "<div><user-avatar :style=\"'width:' + width + 'px; height:' + height + 'px'\" /></div>"
    };
  })

  .add("without user", () => {
    const getters = {
      getUser: () => ({ user_metadata: { full_name: "" } }),
      getUserStatus: () => false
    };

    const store = new Vuex.Store({
      getters
    });

    return {
      components: { UserAvatar },
      store,
      template: '<div> <user-avatar style="width:100px; height:100px" /> </div>'
    };
  })
  .add("with user's name only", () => {
    const getters = {
      getUser: () => ({ user_metadata: { full_name: "Miloš" } }),
      getUserStatus: () => true
    };

    const store = new Vuex.Store({
      getters
    });

    return {
      components: { UserAvatar },
      store,
      template: '<div> <UserAvatar style="width:100px; height:100px" /> </div>'
    };
  });
