<template>
<div class="logo">
    <img src="../assets/img/ill.png" alt="" height="100">
    <h2>Estate 
        <br>
        Blog
    </h2>
</div>

<div class="band">
  <div class="item-1">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://mocah.org/thumbs/1008973-architecture-building-house-USA-mansions-archeology-estate-home-condominium-villa-professional-facade-headquarters-residential-area-property-real-estate.jpg);"></div>
      <article>
        <h1>The best investment on earth is earth.</h1>
        <span>Louis Glickman</span>
      </article>
    </a>
  </div>
  <div class="item-2">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://mocah.org/thumbs/1014700-urban-house-evening-resort-cottage-vacation-estate-home-villa-mansion-suburb-facade-residential-area-property-real-estate-log-cabin-landscape-lighting.jpg);"></div>
      <article>
        <h1>Expansion always, in all ways.”</h1>
        <span>Ryan Serhant</span>
      </article>
    </a>
  </div>
  <div class="item-3">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://mocah.org/thumbs/1003874-lights-window-room-bed-table-house-Switzerland-curtains-pillow-cupboard-carpets-bedroom-interior-design-cottage-estate-design-home-property-real-estate-living-room-suit.jpg);"></div>
      <article>
        <h1>Created by You, Gakuya</h1>
        <p>Don’t wait to buy real estate. Buy real estate and wait.! </p>
        <span>Living Area</span>
      </article>
    </a>
  </div>
  <div class="item-4">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://mocah.org/thumbs/1133029-boat-room-vehicle-beach-relaxing-resort-yacht-Caribbean-cottage-vacation-estate-home-villa-property-real-estate-living-room-suite-passenger-ship.jpg);"></div>
      <article>
        <h1>Inspirational Real Estate Quotes</h1>
        <p>The neighbors always leave their sprinklers on, which is a little bit annoying. It’s a source of constant irrigation.</p>
        <span>LaffGaff.com</span>
      </article>
    </a>
  </div>
  <div class="item-5">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://mocah.org/thumbs/1143974-sea-bay-beach-coast-swimming-pool-resort-dock-Hawaii-Caribbean-vacation-honolulu-estate-Marina-leisure-condominium-property-real-estate.jpg);"></div>
      <article>
        <h1>Find out where the people are going and buy the land before they get there.</h1>
        <span>William Penn Adair</span>
      </article>
    </a>
  </div>
  <div class="item-6">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://mocah.org/thumbs/1050222-food-flowers-room-table-kitchen-door-interior-design-cottage-lunch-estate-dining-room-floor-home-hardwood-farmhouse-property-real-estate-cabinetry-countertop-cuisine-cl.jpg);"></div>
      <article>
        <h1>If you’re not going to put money in real estate, where else?”</h1>

        <span>Tamir Sapir</span>
      </article>
    </a>
  </div>
  <div class="item-7">
    <a href="#" class="card">
      <div class="thumb" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png);"></div>
      <article>
        <h1>Vet your realtor upfront – make sure they are qualified upfront before you sign”</h1>
        <span>Egypt Sherrod</span>
      </article>
    </a>
  </div>
</div>
</template>

<script>

export default {
  name: "Home",
  components: { },
  data() {
    return {
      sampleBlogPost: [
        // {
        //   title: "This is a Filler Title!",
        //   blogHTML: "This is a filler blog post title",
        //   blogCoverPhoto: "beautiful-stories",
        // },
        {
          title: "This is a Filler Title2!",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
    padding: 0 20%;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.band {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 2em;
  margin-bottom: 4em;
  
  display: grid;
  
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  background: white;
  text-decoration: none;
  color: #444;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  border: 1px solid rgb(157, 157, 157);
  
  position: relative;
  top: 0;
  transition: all .1s ease-in;
  
  article {
    padding: 20px;
    flex: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  h1 {
    font-size: 20px;
    margin: 0;
    color: #333;
  }
  
  p {
    flex: 1;
    line-height: 1.4;
  }
  
  span {
    font-size: 12px;
    font-weight: bold;
    color: #999;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin: 2em 0 0 0;
  }
  
  .thumb {
    padding-bottom: 60%;
    background-size: cover;
    background-position: center center;
  }
}

.item-1 {
  @media (min-width: 60em) {
    grid-column: 1 / span 2;
    
    h1 {
      font-size: 24px;
    }
  }
}
</style>