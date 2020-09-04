<template>
  <section>
    <GreenButton text="Feedback" link="/feedback" link_type="out"/>
  </section>
</template>
<script>
import GreenButton from '@/components/buttons/GreenButton';
export default {
  name: 'SectionFeedback',
  components: {
    GreenButton,
  }
}
</script>
<style scoped lang="scss">
section {
  width: 100vw;
  padding-bottom: 40px;
  text-align: center;
  display: flex;
  a {
    margin: auto;
  }
}
</style>
