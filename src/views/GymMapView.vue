<template>
  <div>
    <h1>Hitta Gym i Göteborg</h1>
    <div class="map-controls">
      <div class="gym-filter">
        <select
          v-model="selectedGymType"
          @change="filterByGymType(selectedGymType)"
        >
          <option value="">Visa alla gym</option>
          <option v-for="type in gymTypes" :value="type" :key="type">
            {{ type }}
          </option>
        </select>
      </div>
    </div>
    <div class="map" ref="map" />
    <div class="zoom-buttons">
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
    </div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import gymData from '/gymData.json'

  export default {
    data() {
      return {
        selectedGymType: '',
        map: null,
        mapboxToken:
          'pk.eyJ1IjoiYXdhbHRoZXJyIiwiYSI6ImNsZXlidzEwbDJqOGMzc3AxODZza2R5aDAifQ.BlU81_YGfwWReZNAgZmtpw'
      }
    },
    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const longitude = position.coords.longitude
            const latitude = position.coords.latitude
            this.showMap(longitude, latitude)
          })
        } else {
          alert('Geolocation stöds inte på enheten')
        }
      },
      showMap(longitude, latitude, filterByGymType) {
        mapboxgl.accessToken = this.mapboxToken
        this.map = new mapboxgl.Map({
          container: this.$refs.map,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude, latitude],
          zoom: 10,
          scrollZoom: false
        })
        let filteredGymData = gymData
        if (filterByGymType) {
          filteredGymData = gymData.filter(
            (gym) => gym.type === filterByGymType
          )
        }
        filteredGymData.forEach((gym) => {
          const gymMarker = new mapboxgl.Marker()
            .setLngLat([gym.longitude, gym.latitude])
            .addTo(this.map)
          gymMarker
            .setPopup(
              new mapboxgl.Popup({ maxWidth: '550px' }).setHTML(
                `<h3>${gym.name}</h3><p>${gym.adress}</p><a href="${gym.website}" target="_blank">Webbplats</a>`
              )
            )
            .on('click', () => this.flyToGym(gym.longitude, gym.latitude))
        })
      },
      filterByGymType(selectedGymType) {
        this.map.remove()
        this.showMap(
          this.map.getCenter().lng,
          this.map.getCenter().lat,
          selectedGymType
        )
      },
      flyToGym(longitude, latitude) {
        this.map.flyTo({
          center: [longitude, latitude],
          zoom: 15,
          speed: 1.4,
          curve: 1.2
        })
      },
      zoomIn() {
        this.map.zoomIn()
      },
      zoomOut() {
        this.map.zoomOut()
      }
    },
    computed: {
      gymTypes() {
        const gymTypes = new Set()
        gymData.forEach((gym) => gymTypes.add(gym.type))
        return Array.from(gymTypes)
      }
    },
    mounted() {
      this.getLocation()
    }
  }
</script>

<style>
  .map {
    height: 600px;
    position: relative;
    cursor: grab;
  }
  .zoom-buttons {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 50px;
    left: 25px;
  }

  .zoom-buttons button {
    margin-bottom: 10px;
  }

  .mapboxgl-popup {
    cursor: auto;
  }

  .mapboxgl-popup-content a {
    text-decoration: none;
  }

  .mapboxgl-popup-content a:focus {
    outline: none;
  }
</style>
