import { defineStore } from 'pinia';
import axios from 'axios';

const clientId = 'dogancanalperr'; 
const clientVer = 1; 
const protoVer = 1;

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    animeList: [],
    animeDetails: {},
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAnimeList() {
      this.loading = true;
      try {
        const response = await axios.get(`http://api.anidb.net:9001/httpapi?client=${clientId}&clientver=${clientVer}&protover=${protoVer}&request=hotanime`);
        this.animeList = response.data.hotanime.anime;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchPopularAnime() {
      this.loading = true;
      try {
        const response = await axios.get(`http://api.anidb.net:9001/httpapi?client=${clientId}&clientver=${clientVer}&protover=${protoVer}&request=hotanime`);
        this.animeList = response.data.hotanime.anime;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async searchAnime(query) {
      this.loading = true;
      try {
        const response = await axios.get(`http://api.anidb.net:9001/httpapi?client=${clientId}&clientver=${clientVer}&protover=${protoVer}&request=anime&query=${query}`);
        this.animeList = response.data.anime;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    async fetchAnimeDetails(aid) {
      this.loading = true;
      try {
        const response = await axios.get(`http://api.anidb.net:9001/httpapi?client=${clientId}&clientver=${clientVer}&protover=${protoVer}&request=anime&aid=${aid}`);
        this.animeDetails = response.data.anime;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    }
  }
});
