<template>
  <section id="gallery">
    <div class="header">
      <h2>Gallery</h2>
    </div>
    <div class="gallery">
      <ul class="gallery__list">
        <li v-for="photo in photos" :key="photo.id">
          <figure v-lazyload>
            <img alt="image" :data-url="`https://picsum.photos/id/${photo.id}/200/300`"/>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import LazyLoadDirective from '@/helpers/lazyLoadDirective';
export default {
  name: 'SectionGallery',
  data() {
    let photos = [];
    const number_of_photos = 20
    for(let i=0; i<number_of_photos; i++){
      photos.push({id: Math.round(Math.random()*100)});
    }
    return {
      photos
    };
  },
  directives: {
    lazyload: LazyLoadDirective,
  },
};
</script>
<style scoped lang="scss">
#gallery {
  .header {
    background: $yellow;
    width: 100vw;
    height: $header-height;
    display: flex;
    h2 {
      margin: auto;
      padding: 0px;
    }
  }
  .gallery {
    padding: 0px;
    min-height: $section-height;
    .gallery__list {
      margin: 10px 0px;
      padding: 5vw;
      width: 90vw;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      grid-template-rows: repeat(6, 200px);
      grid-gap: 1rem;
      grid-auto-flow: dense;
      li {
        &:nth-child(4n) {
          grid-column: span 2;
          grid-row: span 2;
        }
        &:nth-child(8n) {
          grid-column: span 3;
          grid-row: span 3;
        }
        figure {
          height: 100%;
          width: 100%;
          margin: 0px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
</style>
