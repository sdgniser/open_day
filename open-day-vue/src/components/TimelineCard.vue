<template>
  <div class="timeline-article">
    <a :href="item.link" target="_blank">
      <div class="content-left-container">
        <div class="content-left">
          <p>
            <b>{{ item.content }}</b
            ><br />{{ item.day }}
            <span class="article-number">{{ item.pk }}</span>
          </p>
        </div>
        <span class="timeline-author"
          >{{ item.speaker }} - {{ item.affiliation }}</span
        >
      </div>
    </a>
    <div class="meta-date">
      <span class="date">{{ item.date.getDate() }}</span>
      <span class="month">{{
        [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ][item.date.getMonth()]
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TimelineCard',
  props: {
    item: {
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.timeline-article {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 20px 0;
  .content-left-container {
    max-width: 44%;
    width: 100%;
    float: left;
  }
  .content-right-container {
    max-width: 44%;
    width: 100%;
    float: right;
  }
  .timeline-author {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #242424;
    text-align: right;
  }
  .content-left {
    border-radius: 7px;
    position: relative;
    width: auto;
    border: 1px solid #ddd;
    background-color: white;
    padding: 27px 25px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 10px black;
    }
    &:before {
      font-family: 'FontAwesome';
      position: absolute;
      top: 20px;
      font-size: 23px;
      color: #ddd;
      content: '\f0da';
      right: -8px;
    }
  }
  .content-right {
    position: relative;
    width: auto;
    border: 1px solid #ddd;
    background-color: white;
    padding: 27px 25px;
    &:before {
      font-family: 'FontAwesome';
      position: absolute;
      top: 20px;
      font-size: 23px;
      color: #ddd;
      content: '\f0d9';
      left: -8px;
    }
  }
  p {
    margin: 0 0 0 60px;
    padding: 0;
    font-weight: 400;
    color: #242424;
    font-size: 14px;
    line-height: 24px;
    position: relative;
    span.article-number {
      position: absolute;
      font-weight: 300;
      font-size: 44px;
      top: 10px;
      left: -60px;
      color: $dark-blue;
    }
  }
  .meta-date {
    position: absolute;
    top: 0;
    left: 50%;
    width: 62px;
    height: 62px;
    margin-left: -31px;
    color: #fff;
    border-radius: 100%;
    background: $dark-blue;
    .date {
      display: block;
      text-align: center;
      font-weight: 900;
      font-size: 30px;
      line-height: 40px;
    }
    .month {
      display: block;
      text-align: center;
      font-weight: 900;
      font-size: 18px;
      line-height: 10px;
    }
  }
}

@media only screen and (max-width: 830px) {
  .timeline-article {
    .meta-date {
      margin-left: 0;
      left: 20px;
    }
    .content-left-container {
      max-width: 100%;
      width: auto;
      float: none;
      margin-left: 110px;
      min-height: 53px;
      margin-bottom: 20px;
    }
    .content-right-container {
      max-width: 100%;
      width: auto;
      float: none;
      margin-left: 110px;
      min-height: 53px;
    }
    .content-left {
      padding: 10px 25px;
      min-height: 65px;
      &:before {
        font-family: 'FontAwesome';
        color: #ddd;
        content: '\f0d9';
        right: auto;
        left: -8px;
      }
    }
    .content-right {
      padding: 10px 25px;
      min-height: 65px;
      &:before {
        display: none;
      }
    }
  }
}

@media only screen and (max-width: 400px) {
  .timeline-article {
    p {
      margin: 0;
      span.article-number {
        display: none;
      }
    }
  }
}
</style>
