<template>
  <div>
    <h1>Hitta Gym</h1>
    <div class="map-controls">
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
    </div>
    <div class="map" ref="map" />
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import gymData from '/gymData.json'
  export default {
    data() {
      return {
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
      showMap(longitude, latitude) {
        mapboxgl.accessToken = this.mapboxToken
        this.map = new mapboxgl.Map({
          container: this.$refs.map,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude, latitude],
          zoom: 10,
          scrollZoom: false
        })
        gymData.forEach((gym) => {
          const gymMarker = new mapboxgl.Marker()
            .setLngLat([gym.longitude, gym.latitude])
            .addTo(this.map)
          gymMarker.setPopup(
            new mapboxgl.Popup({ maxWidth: '550px' }).setHTML(
              `<h3>${gym.name}</h3><p>${gym.adress}</p><a href="${gym.website}">Webbplats</a>`
            )
          )
        })
      },
      zoomIn() {
        this.map.zoomIn()
      },
      zoomOut() {
        this.map.zoomOut()
      }
    },
    mounted() {
      this.getLocation()
    }
  }
</script>

<style>
  .map {
    height: 800px;
    position: relative;
    cursor: grab;
  }
</style>
