<template>
  <section id="gallery">
    <div class="header">
      <h2>Gallery</h2>
    </div>
    <div class="gallery">
      <ul class="gallery__list">
        <li v-for="photo in photos" :key="photo">
          <a :href="photo">
          <figure v-lazyload>
            <img alt="image" :data-url="photo" />
          </figure>
        </a>
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
    return {
      photos: [
        require('@/assets/gallery/1.jpg'),
        require('@/assets/gallery/2.jpg'),
        require('@/assets/gallery/3.jpg'),
        require('@/assets/gallery/4.jpg'),
        require('@/assets/gallery/5.jpg'),
        require('@/assets/gallery/6.jpg'),
        require('@/assets/gallery/7.jpg'),
        require('@/assets/gallery/8.jpg'),
        require('@/assets/gallery/9.jpg'),
        require('@/assets/gallery/10.jpg'),
        require('@/assets/gallery/11.jpg'),
        require('@/assets/gallery/12.jpg'),
        require('@/assets/gallery/13.jpg'),
      ],
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
      width: 95vw;
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
          transition: 0.2s ease;
          &:hover {
            margin: -3%;
            width: 106%;
            height: 106%;
            box-shadow: 0px 0px 8px #888;
          }
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
