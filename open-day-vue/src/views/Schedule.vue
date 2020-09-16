<template>
  <section id="schedule">
    <section id="conference-timeline">
      <div class="timeline-start">Start</div>
      <Loading :active="loading" :is-full-page="false"> </Loading>
      <div class="conference-center-line"></div>
      <div class="conference-timeline-content">
        <TimelineCard :item="item" v-for="item in items" :key="item.pk" />
      </div>
      <div class="timeline-end">End</div>
    </section>
  </section>
</template>
<script>
import 'vue-loading-overlay/dist/vue-loading.css';
import TimelineCard from '@/components/TimelineCard.vue';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
export default {
  name: 'Schedule',
  components: {
    TimelineCard,
    Loading,
  },
  data() {
    return {
      items: [],
      loading: true,
    };
  },
  async created() {
    const response = await axios.get(
      'https://spreadsheets.google.com/feeds/cells/1haXwrbIHVaAwNO_ltAjDiaUV8IrdyKwrUzWheZKHD-0/1/public/full?alt=json',
    );
    response.data.feed.entry
      .filter(
        entry =>
          entry.gs$cell.row > 3 &&
          entry.gs$cell.col > 1 &&
          entry.gs$cell.col < 9,
      )
      .map(item => {
        return {
          value: item.gs$cell.$t,
          row: item.gs$cell.row,
          col: item.gs$cell.col,
        };
      })
      .forEach(entry => {
        let field = '';
        if (!this.items[Number(entry.row) - 4]) {
          this.items[Number(entry.row) - 4] = {};
        }
        switch (entry.col) {
          case '2':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              pk: entry.value,
            };
            break;
          case '3':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              date: new Date(entry.value),
            };
            break;
          case '4':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              day: entry.value,
            };
            field = 'day';
            break;
          case '5':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              speaker: entry.value,
            };
            field = 'speaker';
            break;
          case '6':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              affiliation: entry.value,
            };
            field = 'affiliation';
            break;
          case '7':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              content: entry.value,
            };
            field = 'content';
            break;
          case '8':
            this.items[Number(entry.row) - 4] = {
              ...this.items[Number(entry.row) - 4],
              link: entry.value,
            };
            field = 'link';
            break;
        }
      });
    this.$forceUpdate();
    this.loading=false;
  },
};
</script>
<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');
#schedule {
  width: 100vw;
  min-height: 90vh;
  padding: 20px;
}
#conference-timeline {
  position: relative;
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  .timeline-start {
    border-radius: 3px;
    display: table;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    background: $blue;
    padding: 15px 23px;
    color: #fff;
    max-width: 5%;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .timeline-end {
    border-radius: 3px;
    display: table;
    font-size: 18px;
    font-weight: 900;
    text-transform: uppercase;
    background: $blue;
    padding: 15px 23px;
    color: #fff;
    max-width: 5%;
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .conference-center-line {
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    left: 50%;
    margin-left: -2px;
    background: $blue;
    z-index: -1;
  }
  .conference-timeline-content {
    padding-top: 67px;
    padding-bottom: 67px;
  }
}
@media only screen and (max-width: 830px) {
  #conference-timeline {
    .timeline-start {
      margin: 0;
    }
    .timeline-end {
      margin: 0;
    }
    .conference-center-line {
      margin-left: 0;
      left: 50px;
    }
  }
}
</style>
