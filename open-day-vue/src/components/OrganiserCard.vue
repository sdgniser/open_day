<template>
  <article>
    <figure v-lazyload>
      <img v-if="organiser.image" :alt="organiser.name + '\'s image'" :data-url="organiser.image"/>
      <img v-else :alt="organiser.name + '\'s image'" :data-url="'https://api.adorable.io/avatars/200/'+organiser.name+'@adorable.io.png'"/>
    </figure>
    <h2>{{ organiser.name }}</h2>
    <p class="subtext">{{ organiser.affiliation }}</p>
  </article>
</template>
<script>
import LazyLoadDirective from '@/helpers/lazyLoadDirective';
export default {
  name: 'OrganiserCard',
  props: {
    organiser: Object,
  },
  directives: {
    lazyload: LazyLoadDirective,
  },
};
</script>
<style scoped lang="scss">
article {
  display: inline-block;
  width: 92vw;
  padding: 3vw;
  @media (min-width: $bp-md) {
    width: 46vw;
  }
  @media (min-width: $bp-lg) {
    width: 23vw;
  }
  figure {
    width: 100%;
    display: flex;
    margin: 0px 0px 30px 0px;
    img {
      width: 80%;
      border-radius: 40px;
      margin: auto;
      transition: 0.2s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  h2 {
    margin: 0px;
    line-height: 1;
    font-size: 22px;
  }
  .subtext {
    margin-top: 4px;
    color: #555;
    line-height: 1.1;
  }
  .content {
    text-align: center;
  }
}
</style>
