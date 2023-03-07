<template>
  <div>
    <h1>Dina koordinater</h1>
    <p class="coordinates">{{ coordinates }}</p>
    <div ref="map" style="height: 400px" />
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'

  export default {
    data() {
      return {
        coordinates: '',
        map: null,
        mapboxToken:
          'pk.eyJ1IjoiYXdhbHRoZXJyIiwiYSI6ImNsZXlidzEwbDJqOGMzc3AxODZza2R5aDAifQ.BlU81_YGfwWReZNAgZmtpw'
      }
    },
    methods: {
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.coordinates = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`
            this.showMap(position.coords.longitude, position.coords.latitude)
          })
        } else {
          alert('Geolocation is not supported')
        }
      },
      showMap(longitude, latitude) {
        mapboxgl.accessToken = this.mapboxToken
        this.map = new mapboxgl.Map({
          container: this.$refs.map,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude, latitude],
          zoom: 14
        })
        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(this.map)
      }
    },
    mounted() {
      this.getLocation()
    }
  }
</script>

<style>
  .coordinates {
    text-align: center;
    margin-bottom: 80px;
  }
</style>
