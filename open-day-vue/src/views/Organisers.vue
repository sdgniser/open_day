<template>
  <section>
    <h1>Organisers</h1>
    <OrganiserCard :organiser="organiser" v-for="organiser in organisers2020" :id="organiser.name" />
    <h2>2019</h2>
    <OrganiserCard :organiser="organiser" v-for="organiser in organisers2019" :id="organiser.name" />
    <OrganiserCard :organiser="organiser2018"/>
    <OrganiserCard :organiser="organiser2017"/>
    <OrganiserCard :organiser="organisers" v-for="organiser in organisers2016" :id="organiser.name"/>
  </section>
</template>
<script lang="ts">
import OrganiserCard from '@/components/OrganiserCard.vue';
export default {
  name: 'Organisers',
  components: {
    OrganiserCard,
  },
  data() {
    return {
      organisers2020: [
        {
          name: 'Akshay Priyadarshani',
          affiliation: 'Chief Coordinator',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Dhairya Patel',
          affiliation: 'Chemistry',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Sanaa Khan',
          affiliation: 'Biology',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Hradini Konthalapalli',
          affiliation: 'Biology',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Nisarg Vyas',
          affiliation: 'Physics',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Prem Nigam',
          affiliation: 'Mathematics',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Ayush Singh',
          affiliation: 'Computer Sci.',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Abhishek Anil Deshmukh',
          affiliation: 'Web Developer',
          content: '0111011001101111011010010\n11011001100001110100000',
          image: 'https://deshmukh.ml/images/popitalk_dp.jpg'
        },
        {
          name: 'Jyotirmay Shivottam',
          affiliation: 'Web Developer',
          content: 'some words domw words some words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Jyotish',
          affiliation: 'Robotics',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Smruthimedha Prida',
          affiliation: 'Design',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Anoushka Sardar',
          affiliation: 'Logistics',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Anshuman Padhi',
          affiliation: 'Logistics',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Tanya Pattnaik',
          affiliation: 'Volunteer\'s Coordinator',
          content: 'Some words some wordssome wordssome words',
          image: 'https://via.placeholder.com/150'
        },
      ],
      organisers2019: [
        {
          name: 'Pankaj Kumar',
          affiliation: 'Overall',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Tanmay Pani',
          affiliation: 'Overall',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Pushpa Raj Prasaf',
          affiliation: 'Chemistry',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Prakhar Gupta',
          affiliation: 'Chemistry',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Srilakshmi',
          affiliation: 'Biology',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Saurabh Agarwal',
          affiliation: 'Biology',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Akshay Priyadarshani',
          affiliation: 'Physics, Design',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Dishant Swain',
          affiliation: 'Physics',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Paresh Singh Arora',
          affiliation: 'Mathematics',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Sannidhya Shukla',
          affiliation: 'Computer Sci.',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Aranya Giri',
          affiliation: 'Food',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Arnav Paul',
          affiliation: 'Food',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
        {
          name: 'Smrutimedha Prida',
          affiliation: 'Invite and design',
          content: 'Some words, older wordsolder wordsolder words',
          image: 'https://via.placeholder.com/150'
        },
      ],
      organiser2018: {
        name: 'Biprateep Dey',
        affiliation: '2018 Chief Organiser',
        content: 'Some really really old words',
        image: 'https://via.placeholder.com/150'
      },
      organiser2017: {
        name: 'Diptanil Roy',
        affiliation: '2017 Chief Organiser',
        content: 'Some really really old words',
        image: 'https://via.placeholder.com/150'
      },
      organisers2016: [
      {
        name: 'Bipradeep Dey',
        affiliation: '2016 Chief Organiser',
        content: 'Some really really old words',
        image: 'https://via.placeholder.com/150'
      },
        {
        name: 'Debashish Jena',
        affiliation: '2016 Chief Organiser',
        content: 'Some really really old words',
        image: 'https://via.placeholder.com/150'
        }]
    }
  }
};
</script>
<style scoped lang="scss">
section {
  padding: 2vh 3vw;
}
</style>
