<template>
  <div>
    <p v-if="state === 'verifying'">
      Verifying your login...
    </p>

    <p v-if="state === 'loggedIn'">
      Welcome {{ name }}! :)
    </p>

    <div v-if="state === 'error'">
      <p>
        Failed to login in :(
      </p>

      <p>
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import axios from 'axios';

export default class Discord extends Vue
{
  name: string = '';
  error: string = '';
  state: 'verifying' | 'loggedIn' | 'error' = 'verifying';

  async mounted() {
    if ( !this.$route.query.code ) {
      this.$router.push('/');
      return;
    }

    // calling
    const url = `${process.env.CLIENT_APP_API_URL}/auth/discord?code=${this.$route.query.code}`;
    try {
      const { data } = await axios.get(url);

      this.name = data.name;
      this.state = 'loggedIn';
    } catch ( e ) {
      this.error = e.response.data.message;
      this.state = 'error';
    }
  }
}
</script>
