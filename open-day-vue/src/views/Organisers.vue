<template>
  <section>
    <h1>Organisers</h1>
    <OrganiserCard
      v-for="organiser in organisers2020"
      :organiser="organiser"
      :key="organiser.name + organiser.affiliation"
    />
    <h2>2019</h2>
    <OrganiserCard
      v-for="organiser in organisers2019"
      :organiser="organiser"
      :key="organiser.name + organiser.affiliation"
    />
    <br />
    <OrganiserCard :organiser="organiser2018" />
    <OrganiserCard :organiser="organiser2017" />
    <OrganiserCard
      v-for="organiser in organisers2016"
      :organiser="organiser"
      :key="organiser.name + organiser.affiliation"
    />
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
          image: require('../assets/Akshay_Priyadarshi.jpeg'),
        },
        {
          name: 'Dhairya Patel',
          affiliation: 'Chemistry',
          image: require('../assets/Dhairya_Patel.jpg'),
        },
        {
          name: 'Sanaa Khan',
          affiliation: 'Biology',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Hradini Konthalapalli',
          affiliation: 'Biology',
          image: require('../assets/Hradini.jpg'),
        },
        {
          name: 'Nisarg Vyas',
          affiliation: 'Physics',
          image: require('../assets/Nisarg.jpg'),
        },
        {
          name: 'Prem Nigam',
          affiliation: 'Mathematics',
          image: require('../assets/Prem.jpg'),
        },
        {
          name: 'Ayush Singh',
          affiliation: 'Computer Sci.',
          image: require('../assets/ayush_profile.jpg'),
        },
        {
          name: 'Abhishek Anil Deshmukh',
          affiliation: 'Web Developer',
          image: 'https://deshmukh.ml/images/popitalk_dp.jpg',
        },
        {
          name: 'Jyotirmay Shivottam',
          affiliation: 'Web Developer',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Jyotish',
          affiliation: 'Robotics',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Smruthimedha Prida',
          affiliation: 'Design',
          image: require('../assets/Smruti.jpg'),
        },
        {
          name: 'Anoushka Sardar',
          affiliation: 'Logistics',
          image: require('../assets/Anoushka.jpg'),
        },
        {
          name: 'Anshuman Padhi',
          affiliation: 'Logistics',
          image: require('../assets/Anshuman.jpg'),
        },
        {
          name: 'Tanya Pattnaik',
          affiliation: "Volunteer's Coordinator",
          image: require('../assets/Tanya.jpg'),
        },
      ],
      organisers2019: [
        {
          name: 'Pankaj Kumar',
          affiliation: 'Overall',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Tanmay Pani',
          affiliation: 'Overall',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Pushpa Raj Prasaf',
          affiliation: 'Chemistry',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Prakhar Gupta',
          affiliation: 'Chemistry',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Srilakshmi',
          affiliation: 'Biology',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Saurabh Agarwal',
          affiliation: 'Biology',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Akshay Priyadarshani',
          affiliation: 'Physics, Design',
          image: require('../assets/Akshay_Priyadarshi.jpeg'),
        },
        {
          name: 'Dishant Swain',
          affiliation: 'Physics',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Paresh Singh Arora',
          affiliation: 'Mathematics',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Sannidhya Shukla',
          affiliation: 'Computer Sci.',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Aranya Giri',
          affiliation: 'Food',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Arnav Paul',
          affiliation: 'Food',
          image: require('../assets/Arnav_Paul.jpg'),
        },
        {
          name: 'Smrutimedha Prida',
          affiliation: 'Invite and design',
          image: 'https://via.placeholder.com/150',
        },
      ],
      organiser2018: {
        name: 'Biprateep Dey',
        affiliation: '2018 Chief Organiser',
        image: 'https://via.placeholder.com/150',
      },
      organiser2017: {
        name: 'Diptanil Roy',
        affiliation: '2017 Chief Organiser',
        image: 'https://via.placeholder.com/150',
      },
      organisers2016: [
        {
          name: 'Bipradeep Dey',
          affiliation: '2016 Chief Organiser',
          image: 'https://via.placeholder.com/150',
        },
        {
          name: 'Debashish Jena',
          affiliation: '2016 Chief Organiser',
          image: 'https://via.placeholder.com/150',
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss">
section {
  padding: 2vh 3vw;
}
</style>
